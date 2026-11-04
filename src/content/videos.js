// Curated workshop videos. Embedding only — playback and hosting stay with the
// original creators on YouTube, which keeps the page fast and the rights clean.
// Add three per week; keep the list newest-first. Verified against the live
// watch pages on 2026-11-04.
export const VIDEOS = [
  {
    id: 'OXUnVaSAY6c',
    title: 'Turning Foam into Metal | Painting Tutorial',
    channel: 'KamuiCosplay',
    duration: '06:51',
    views: '807K',
    added: '2026-11-04',
    tags: ['painting', 'finishing', 'primer'],
    why: 'Walks the primer-plus-chrome sequence that decides whether a painted foam piece reads as metal or as plastic, which is the question buyers ask when our finish costs more.',
  },
  {
    id: 'kSppMZAr0Hw',
    title: '10 Tips and Tricks for EVA Foam!',
    channel: 'Kinpatsu Cosplay',
    duration: '05:33',
    views: '727K',
    added: '2026-11-04',
    tags: ['EVA foam', 'gluing', 'technique'],
    why: 'Ten shop-floor habits around blades, contact cement and heat sealing that explain the seam quality a buyer should expect from a factory build.',
  },
  {
    id: 'FgjKDHxCaDk',
    title: '3 Easy Ways to Pattern Your Own Clothes',
    channel: 'Ginny Di',
    duration: '09:05',
    views: '326K',
    added: '2026-11-04',
    tags: ['patterning', 'fit', 'sewing'],
    why: 'Patterning from an existing garment, by draping or from a cut-down piece, is how our pattern room reaches a first fit before any fabric is cut.',
  },
  {
    id: 'jXqk5dNkPiA',
    title: 'How to Cosplay using EVA Foam Basics — Tools and Materials',
    channel: 'SKS Props',
    duration: '15:46',
    views: '404K',
    added: '2026-10-30',
    tags: ['EVA foam', 'tools', 'beginner'],
    why: 'The materials-and-tools primer we hand to new buyers: what foam density, glue and primer actually change the finished piece.',
  },
  {
    id: '3ajOJivJisg',
    title: 'DIY Knight Armor — Pattern to Finished Plate',
    channel: 'Lost Wax',
    duration: '37:17',
    views: '373K',
    added: '2026-10-30',
    tags: ['armor', 'patterning', 'assembly'],
    why: 'One continuous build from pattern cutting to strapping — closest thing to our own sample-room workflow on film.',
  },
  {
    id: 'E73AEz7t84E',
    title: 'How to Cut Foam Like a Pro',
    channel: 'KamuiCosplay',
    duration: '27:24',
    views: '349K',
    added: '2026-10-30',
    tags: ['cutting', 'bevels', 'technique'],
    why: 'Straight, bevel and curve cuts explained chapter by chapter; the difference between a clean edge and a repairable one.',
  },
];

export const videoThumb = (id) => `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
export const videoUrl = (id) => `https://www.youtube.com/watch?v=${id}`;

// Silent 4-second loops rendered from our own product photography. Hosted
// locally so they play without YouTube (mainland China, corporate firewalls).
export const REELS = [
  {
    id: 'reel-black-spider',
    title: 'Black Spider Hero Bodysuit',
    src: '/videos/reel-black-spider-hero-bodysuit.webp',
    productId: 'black-spider-hero-bodysuit',
    note: 'Printed spandex, four-way stretch',
  },
  {
    id: 'reel-gothic-gown',
    title: 'Gothic Witch Gown',
    src: '/videos/reel-womens-gothic-witch-gown.webp',
    productId: 'womens-gothic-witch-gown',
    note: 'Flame print mesh over full skirt',
  },
  {
    id: 'reel-ninja',
    title: 'Kids Stealth Ninja Costume',
    src: '/videos/reel-kids-stealth-ninja-costume.webp',
    productId: 'kids-stealth-ninja-costume',
    note: 'Hooded suit, face mask, sash',
  },
];
