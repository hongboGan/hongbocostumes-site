"""Trim the Chinese marketing banners baked into the bottom of 1688-sourced
product photos (orange cross-border strip + dark "17 years" pill badge).

Detection: scan upward from the bottom and find the topmost row that belongs to
the solid orange banner strip; then extend upward while rows still look like the
dark pill badge region. Everything below that row is cropped away.

Originals are backed up to catalog/1688-originals/ before overwriting.
Usage: python scripts/trim-1688-banners.py
"""
import os
import shutil
import sys

from PIL import Image

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PRODUCTS_DIR = os.path.join(ROOT, "public", "products")
BACKUP_DIR = os.path.join(os.path.dirname(ROOT), "catalog", "1688-originals")

FILES = [
    "miles-morales-spiderman.jpg",
    "spider-gwen.jpg",
    "iron-spider.jpg",
    "venom-symbiote.jpg",
    "spiderman-peter-parker.jpg",
    "venom-carnage-red.jpg",
    "lightning-venom.jpg",
    "venom-blackpanther-kids.jpg",
    "captain-america-muscle.jpg",
    "deadpool-cosplay.jpg",
    "wolverine-deadpool3.jpg",
    "hero-capes-set.jpg",
]


def row_stats(img, y, w):
    px = img.load()
    step = max(1, w // 200)  # sample up to ~200 columns for speed
    total = 0
    orange = 0
    dark_left = 0
    left_total = 0
    for x in range(0, w, step):
        r, g, b = px[x, y][:3]
        total += 1
        # banner strip: strong saturated warm colour (255,78,0 measured)
        if r > 200 and g < 185 and b < 110:
            orange += 1
        if x < w * 0.55:
            left_total += 1
            if r < 120 and g < 120 and b < 130:
                dark_left += 1
    return orange / total, dark_left / max(1, left_total)


def find_cut(img):
    w, h = img.size
    max_scan = int(h * 0.35)
    # 1) solid banner strip: scan bottom-up
    y = h - 1
    orange_top = None
    while y > h - max_scan:
        orange_share, _ = row_stats(img, y, w)
        if orange_share >= 0.35:
            orange_top = y
            y -= 1
        else:
            break
    if orange_top is None:
        return None

    # 2) dark pill badge sits just above the strip, left-aligned.
    #    Extend upward only while the left half stays dark (pill) and within 18% of height.
    cut = orange_top
    limit = max(int(h * 0.82), orange_top - int(h * 0.18))
    y = orange_top - 1
    while y > limit:
        _, dark_left = row_stats(img, y, w)
        if dark_left >= 0.05:
            cut = y
            y -= 1
        else:
            break
    return max(cut - 6, 0)


def main():
    os.makedirs(BACKUP_DIR, exist_ok=True)
    for name in FILES:
        path = os.path.join(PRODUCTS_DIR, name)
        if not os.path.exists(path):
            print(f"MISSING {name}")
            continue
        backup = os.path.join(BACKUP_DIR, name)
        if not os.path.exists(backup):
            shutil.copy2(path, backup)

        img = Image.open(path)
        w, h = img.size
        cut = find_cut(img)
        if cut is None:
            print(f"NO_BANNER {name} ({w}x{h}) — left unchanged")
            continue
        trimmed = img.crop((0, 0, w, cut))
        trimmed.save(path, quality=88, optimize=True)
        print(
            f"TRIMMED {name}: {w}x{h} -> {trimmed.size[0]}x{trimmed.size[1]} "
            f"(removed bottom {h - cut}px, {round((h - cut) / h * 100, 1)}%)"
        )


if __name__ == "__main__":
    sys.exit(main())
