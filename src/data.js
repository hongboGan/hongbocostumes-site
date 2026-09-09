// ---------------------------------------------------------------
// Site content data — Hongbo Costumes B2B independent site
// Products & company facts sourced from the owner's Alibaba store:
// https://ouwanni.en.alibaba.com  (Wuhan Ouwanni Clothing Co., Ltd.)
// ---------------------------------------------------------------

export const SITE = {
  name: 'Hongbo Costumes',
  wordmark: 'HONG&nbsp;BO',
  tagline: 'Halloween, Cosplay & Fancy-Dress Costume Manufacturer',
  legalName: 'Wuhan Ouwanni Clothing Co., Ltd.',
  location: 'Wuhan, Hubei, China',
  email: 'Zoe@hoburn.group',
  whatsapp: '8618120424228',
  whatsappDisplay: '+86 181 2042 4228',
};

export const waLink = (msg) =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(msg)}`;

export const WA_DEFAULT = waLink(
  `Hi ${SITE.name}! I'm interested in your costumes. Could you send me the catalog and wholesale prices?`
);

export const HERO_IMAGES = [
  'https://sc04.alicdn.com/kf/H28e456cb9ff14f99bc2fa323e422d4c2U/276291960/H28e456cb9ff14f99bc2fa323e422d4c2U.png',
  'https://sc04.alicdn.com/kf/Hf6fde6294969419b881a5c348755153eo/276291960/Hf6fde6294969419b881a5c348755153eo.jpg',
  'https://sc04.alicdn.com/kf/Hfab37dfe6bd4493bb240672ca91210211/276291960/Hfab37dfe6bd4493bb240672ca91210211.jpg',
  'https://sc04.alicdn.com/kf/Hde549176b01440dca97e99599fb9192aT/276291960/Hde549176b01440dca97e99599fb9192aT.jpg',
  'https://sc04.alicdn.com/kf/H78064ef9b0564b38a2db34779a57e691f/276291960/H78064ef9b0564b38a2db34779a57e691f.jpg',
];

export const COMPANY = {
  headline: 'A costume factory that moves as fast as your selling season.',
  stats: [
    { value: '7+', label: 'Years exporting' },
    { value: '41', label: 'In-house team' },
    { value: '3', label: 'Production lines' },
    { value: '1,540㎡', label: 'Factory floor' },
  ],
  proofs: [
    { value: '4.7/5', label: 'Supplier rating' },
    { value: '≤4h', label: 'Response time' },
    { value: '91%', label: 'On-time dispatch' },
    { value: '25%', label: 'Reorder rate' },
  ],
  services: [
    {
      title: 'Custom OEM & ODM',
      text: 'Custom colors, sizes, prints and logos on stock patterns — or build your own design from sketch, drawing or sample.',
      icon: 'pen',
    },
    {
      title: '7-Day Samples',
      text: 'Sample orders ship within about 7 days so you can validate quality before bulk production.',
      icon: 'rocket',
    },
    {
      title: 'Rigorous QC',
      text: '4 QC inspectors plus needle detection on kid-safe lines. 91% on-time dispatch across orders.',
      icon: 'shield',
    },
    {
      title: 'Amazon FBA Ready',
      text: 'E-commerce-friendly packing, retail-ready labeling and FBA support for marketplace sellers.',
      icon: 'box',
    },
  ],
  process: [
    { step: '01', title: 'Send inquiry', text: 'Tell us your styles, quantities and target price.' },
    { step: '02', title: 'Get quote & sample', text: 'We confirm specs, produce samples in ~7 days.' },
    { step: '03', title: 'Bulk production', text: '3 production lines run your order with QC checks.' },
    { step: '04', title: 'Ship worldwide', text: 'Sea, air or express — tracked to your door.' },
  ],
};

export const CATEGORIES = [
  {
    id: 'halloween',
    label: 'Halloween Costumes',
    tag: 'Scare & shine',
    blurb: 'Adult & kids Halloween sets for parties, haunted houses and events.',
    image: 'https://sc04.alicdn.com/kf/H170c9a1eac524f45a2bac7c0cab2ec52N/Girls-Renaissance-Velvet-Dress-and-Hooded-Cloak.png',
  },
  {
    id: 'movie',
    label: 'Superhero, Movie & TV',
    tag: 'Screen icons',
    blurb: 'Character-style jumpsuits and movie looks with custom 3D print options.',
    image: 'https://sc04.alicdn.com/kf/H7d1ee8d69aaa44fa810adf96259119949/High-Quality-Custom-Logo-OEM-Costumes-Bodysuit.jpg',
  },
  {
    id: 'anime',
    label: 'Anime & Cosplay',
    tag: 'Con-ready',
    blurb: 'Lolita, maid, kimono and cosplay sets for conventions and collectors.',
    image: 'https://sc04.alicdn.com/kf/H4d0e420388f944418a413e9df4ae9272S/Cute-Lolita-Maid-Dress-Plus-Size-Apron.jpg',
  },
  {
    id: 'kids',
    label: 'Kids, Princess & Party',
    tag: 'Little stars',
    blurb: 'Tutu princess gowns, sparkle dresses and playful animal sets for kids.',
    image: 'https://sc04.alicdn.com/kf/H9c5d88933b1a4ec18883992314c0719c8/Kids-Sequin-Princess-Tulle-Dress-Girls-Sparkly.png',
  },
  {
    id: 'funny',
    label: 'Funny, Career & Novelty',
    tag: 'Make them laugh',
    blurb: 'Career day outfits and novelty costumes that stand out in any crowd.',
    image: 'https://sc04.alicdn.com/kf/H0fac5017e4ee493eb80557b39587e46ao/Funny-Beer-Mug-Costume-for-Kids-Oktoberfest.png',
  },
  {
    id: 'props',
    label: 'Party Masks, Hats & Props',
    tag: 'Finishing touch',
    blurb: 'Crowns, masks & accessories that complete any costume.',
    image: 'https://sc04.alicdn.com/kf/Hc5db7cb48cb846d8b2089005a6a5fcf2t/Halloween-Carnival-Half-Face-Phantom-Mask-One.jpg',
  },
  {
    id: 'christmas',
    label: 'Christmas & Thanksgiving',
    tag: 'Holiday hits',
    blurb: 'Santa sets, Christmas tree suits and festive cosplay for the holiday season.',
    image: 'https://sc04.alicdn.com/kf/H5edf6297ca38439089280d8e48ebc9335/New-Arrival-Christmas-Costume-Family-Santa-Claus.jpg',
  },
];

export const PRODUCTS = [
  {
    id: 'victorian-tailcoat-boys',
    cat: 'halloween',
    ali: 'Halloween Costume',
    name: "Boys' Victorian Tailcoat 3-Piece Suit",
    fullTitle:
      "Boys Kids Victorian Tailcoat Suit 3 Piece Set Gold Buttons Bowtie Halloween Party Stage Performance Fancy Costume",
    image:
      'https://sc04.alicdn.com/kf/Haf44b63b7d2142c9a60ea7be4dc2589dC/Boys-Kids-Victorian-Tailcoat-Suit-3-Piece.jpg',
    priceFrom: 9.99,
    priceTo: 11.59,
    url: 'https://www.alibaba.com/product-detail/Boys-Kids-Victorian-Tailcoat-Suit-3_1601944760177.html',
    blurb: 'Tailcoat, gold buttons and bowtie — a stage-ready 3-piece set for kids.',
  },
  {
    id: 'renaissance-velvet-cloak',
    cat: 'halloween',
    ali: 'Halloween Costume',
    name: "Girls' Renaissance Velvet Dress & Cloak",
    fullTitle:
      "Girls Renaissance Velvet Dress and Hooded Cloak Set Gold Trim Medieval Faire Halloween Stage Performance Costume",
    image:
      'https://sc04.alicdn.com/kf/H170c9a1eac524f45a2bac7c0cab2ec52N/Girls-Renaissance-Velvet-Dress-and-Hooded-Cloak.png',
    priceFrom: 16.29,
    priceTo: 19.99,
    url: 'https://www.alibaba.com/product-detail/Girls-Renaissance-Velvet-Dress-and-Hooded_1601944665286.html',
    blurb: 'Velvet dress with hooded cloak and gold trim — medieval faire elegance.',
  },
  {
    id: 'gothic-lolita-maid',
    cat: 'halloween',
    ali: 'Halloween Costume',
    name: "Women's Gothic Lolita Maid Outfit",
    fullTitle:
      'Japanese Maid Costume Women Gothic Lolita Pinstripe Apron Dress Choker Ruffled Sleeve Cosplay Halloween Outfit',
    image:
      'https://sc04.alicdn.com/kf/Hf7d8db79ec344b7c96339e27f87995638/Japanese-Maid-Costume-Women-Gothic-Lolita-Pinstripe.png',
    priceFrom: 14.41,
    priceTo: 16.89,
    url: 'https://www.alibaba.com/product-detail/Japanese-Maid-Costume-Women-Gothic-Lolita_1601942395450.html',
    blurb: 'Pinstripe apron dress, choker and ruffled sleeves — gothic maid cosplay.',
  },
  {
    id: 'templar-knight-set',
    cat: 'halloween',
    ali: 'Anime Costume',
    name: 'Templar Knight Crusader Tunic Set',
    fullTitle:
      'Deluxe Cross Print Halloween Templar Knight Medieval Tunic Warrior Costume Crusader Costume Vest Coat With Belt',
    image:
      'https://sc04.alicdn.com/kf/Hcff9723cbd61436e956cd3ef8a381fe9E/Deluxe-Cross-Print-Halloween-Templar-Knight-Medieval.jpg',
    priceFrom: 9.8,
    priceTo: 10.5,
    url: 'https://www.alibaba.com/product-detail/Deluxe-Cross-Print-Halloween-Templar-Knight_1601017702252.html',
    blurb: 'Cross-print tunic, vest coat and belt — a deluxe crusader warrior look.',
  },
  {
    id: 'custom-3d-bodysuit',
    cat: 'movie',
    ali: 'Spider Man Costume',
    name: 'Custom 3D-Print Bodysuit Jumpsuit',
    fullTitle:
      'High Quality Custom Logo OEM Costumes Bodysuit 3D Print Adult Halloween Costume Custom Jumpsuit',
    image:
      'https://sc04.alicdn.com/kf/H7d1ee8d69aaa44fa810adf96259119949/High-Quality-Custom-Logo-OEM-Costumes-Bodysuit.jpg',
    priceFrom: 1.8,
    priceTo: 9.9,
    url: 'https://www.alibaba.com/product-detail/High-Quality-Custom-Logo-OEM-Costumes_1601021299050.html',
    blurb: 'Your artwork, our sewing — custom logo 3D-print bodysuits for brands.',
  },
  {
    id: 'moana-maui-set',
    cat: 'movie',
    ali: 'Princess&Prince Costume',
    name: 'Moana Movie Maui Cosplay Set',
    fullTitle:
      'New Movie Moana 4 Costume Maui Cosplay Costume Girls Carnival Party Princess Moana Dress With Necklace',
    image:
      'https://sc04.alicdn.com/kf/H57b082f399444e79b003f49967717651i/New-Movie-Moana-4-Costume-Maui-Cosplay.jpg',
    priceFrom: null,
    priceTo: null,
    url: 'https://www.alibaba.com/product-detail/New-Movie-Moana-4-Costume-Maui_1601256496495.html',
    blurb: 'Movie-style Moana costume with matching necklace — carnival party ready.',
  },
  {
    id: 'lolita-catgirl-maid',
    cat: 'anime',
    ali: 'Anime Costume',
    name: 'Lolita Catgirl Maid Dress Set',
    fullTitle:
      'Cute Lolita Maid Dress Plus Size Apron Set Catgirl Roleplay Costume Black White Kawaii Lolita Dress',
    image:
      'https://sc04.alicdn.com/kf/H4d0e420388f944418a413e9df4ae9272S/Cute-Lolita-Maid-Dress-Plus-Size-Apron.jpg',
    priceFrom: 11.18,
    priceTo: 12.59,
    url: 'https://www.alibaba.com/product-detail/Cute-Lolita-Maid-Dress-Plus-Size_1601687638877.html',
    blurb: 'Kawaii black-white maid dress with apron — plus-size catgirl roleplay.',
  },
  {
    id: 'japanese-kimono-robe',
    cat: 'anime',
    ali: 'Anime Costume',
    name: 'Japanese Kimono Yukata Robe',
    fullTitle:
      'Silky Satin Floral Robe Japanese Traditional Kimono Bath Robe With Obi Princess Japan Kimono Yukata Dress',
    image:
      'https://sc04.alicdn.com/kf/H5fc55f62a92941c5931e82075b1af8efp/Silky-Satin-Floral-Robe-Japanese-Traditional-Kimono.jpg',
    priceFrom: 9.2,
    priceTo: 9.8,
    url: 'https://www.alibaba.com/product-detail/Silky-Satin-Floral-Robe-Japanese-Traditional_1601019282544.html',
    blurb: 'Satin floral kimono with obi belt — traditional Japanese yukata style.',
  },
  {
    id: 'sequin-princess-dress',
    cat: 'kids',
    ali: 'Princess&Prince Costume',
    name: "Kids' Sequin Princess Tulle Gown",
    fullTitle:
      'Kids Sequin Princess Tulle Dress Girls Sparkly Bubble Sleeve Gown for Halloween and Birthday Party',
    image:
      'https://sc04.alicdn.com/kf/H9c5d88933b1a4ec18883992314c0719c8/Kids-Sequin-Princess-Tulle-Dress-Girls-Sparkly.png',
    priceFrom: 9.69,
    priceTo: 11.25,
    url: 'https://www.alibaba.com/product-detail/Kids-Sequin-Princess-Tulle-Dress-Girls_1601789054240.html',
    blurb: 'Sparkly bubble-sleeve gown for Halloween parties and birthdays.',
  },
  {
    id: 'ballet-tutu-dress',
    cat: 'kids',
    ali: 'Princess&Prince Costume',
    name: "Girls' Ballet Tutu 3D Floral Dress",
    fullTitle:
      'Girls Ballet Tutu Princess Dress 3D Floral Applique Sequin Swirl Embroidered Tulle Skirt Stage Performance Choir Outfit',
    image:
      'https://sc04.alicdn.com/kf/He59edf13102542aea861fdab311ecef3H/Girls-Ballet-Tutu-Princess-Dress-3D-Floral.png',
    priceFrom: 7.37,
    priceTo: 8.69,
    url: 'https://www.alibaba.com/product-detail/Girls-Ballet-Tutu-Princess-Dress-3D_1601930221114.html',
    blurb: '3D floral applique on a swirl-embroidered tutu — stage & choir ready.',
  },
  {
    id: 'cindy-princess-dress',
    cat: 'kids',
    ali: 'Princess&Prince Costume',
    name: 'Cindy Princess Puffy Gauze Dress',
    fullTitle:
      'Hot Selling Cindy Princess Dress Solid Color Puffy Gauze Princess Dress Halloween Cosplay Birthday Dress',
    image:
      'https://sc04.alicdn.com/kf/Hc5d341d142764046a4f9bdff08986d98P/Hot-Selling-Cindy-Princess-Dress-Solid-Color.jpg',
    priceFrom: 9.9,
    priceTo: 12.59,
    url: 'https://www.alibaba.com/product-detail/Hot-Selling-Cindy-Princess-Dress-Solid_1601019964342.html',
    blurb: 'Puffy gauze princess dress — a hot-selling birthday & cosplay pick.',
  },
  {
    id: 'flower-girl-tutu',
    cat: 'kids',
    ali: 'Girl Daily Dress',
    name: "Christmas Flower Girl Tutu Dress",
    fullTitle:
      "Christmas Girl's Princess Flower Girl's Wedding Sequin Mesh Cake Tutu Dress for Children with Echo Character",
    image:
      'https://sc04.alicdn.com/kf/H8adf56e18c5c4bf192a5bf7605ea89ccC/Christmas-Girl-s-Princess-Flower-Girl-s.png',
    priceFrom: 10.79,
    priceTo: 12.77,
    url: 'https://www.alibaba.com/product-detail/Christmas-Girl-s-Princess-Flower-Girl_1601894506218.html',
    blurb: 'Sequin mesh cake-tutu style — flower girl & Christmas party favorite.',
  },
  {
    id: 'pink-pig-kids-set',
    cat: 'kids',
    ali: 'Party Mask&Hat&Props',
    name: "Kids' Pink Pig Animal Costume Set",
    fullTitle:
      'Cute Kids Pink Pig Animal Cosplay Costume Complete Accessory Set With Pig Ear Headband Nose Bow Tail Paw Gloves Pink Tutu',
    image:
      'https://sc04.alicdn.com/kf/Hc285824d8cd5409c91e76eb8d660314f1/Cute-Kids-Pink-Pig-Animal-Cosplay-Costume.jpg',
    priceFrom: 1.59,
    priceTo: 2.02,
    url: 'https://www.alibaba.com/product-detail/Cute-Kids-Pink-Pig-Animal-Cosplay_1601885860475.html',
    blurb: 'Complete pig set — headband, nose, bow, tail, gloves and tutu.',
  },
  {
    id: 'pirate-kids-set',
    cat: 'kids',
    ali: 'Customization Print',
    name: "Kids' Pirate Suit & Top Set",
    fullTitle:
      "New Arrival Halloween Anime-Style Costume Set Kids' Little Boys Pirate Suit and Top for Cosplay Performance",
    image:
      'https://sc04.alicdn.com/kf/Hb0f386b6cd9f4321b4ccb60f60b46248D/New-Arrival-Halloween-Anime-Style-Costume-Set.jpg',
    priceFrom: 4.99,
    priceTo: 6.29,
    url: 'https://www.alibaba.com/product-detail/New-Arrival-Halloween-Anime-Style-Costume_1601013027695.html',
    blurb: "Anime-style pirate suit & top for little boys' cosplay performance.",
  },
  {
    id: 'scientist-lab-coat',
    cat: 'funny',
    ali: 'Career Day Costume',
    name: "Kids' Scientist Lab Coat Set",
    fullTitle:
      'Unisex Children Scientist Lab Coat Costume Set Breathable White Doctor Coat With Protective Goggles Name ID Card',
    image:
      'https://sc04.alicdn.com/kf/H08f229b495144590bb1be9ce22104ba6v/Unisex-Children-Scientist-Lab-Coat-Costume-Set.png',
    priceFrom: 5.59,
    priceTo: 6.99,
    url: 'https://www.alibaba.com/product-detail/Unisex-Children-Scientist-Lab-Coat-Costume_1601885785572.html',
    blurb: 'Breathable lab coat with goggles and ID card — career day classic.',
  },
  {
    id: 'crossing-guard-girls',
    cat: 'funny',
    ali: 'Career Day Costume',
    name: "Girls' Crossing Guard Costume",
    fullTitle:
      'Halloween Costumes Helper Costume for Girls Crossing Guard Costume for Kids Girls Traffic Director Costume Service Outfit',
    image:
      'https://sc04.alicdn.com/kf/He64fab74131f4a8cadecf99caf5806e1l.png',
    priceFrom: null,
    priceTo: null,
    url: 'https://www.alibaba.com/product-detail/Halloween-Costumes-Helper-Costume-for-Girls_1601573109311.html',
    blurb: 'Traffic-director helper outfit — community helper dress-up favorite.',
  },
  {
    id: 'beer-mug-kids',
    cat: 'funny',
    ali: 'Funny Costume',
    name: "Kids' Beer Mug Oktoberfest Suit",
    fullTitle:
      'Funny Beer Mug Costume for Kids Oktoberfest Party Performance Outfit Yellow Ale Cup With Foam Handle Tunics',
    image:
      'https://sc04.alicdn.com/kf/H0fac5017e4ee493eb80557b39587e46ao/Funny-Beer-Mug-Costume-for-Kids-Oktoberfest.png',
    priceFrom: 6.59,
    priceTo: 7.59,
    url: 'https://www.alibaba.com/product-detail/Funny-Beer-Mug-Costume-for-Kids_1601845414511.html',
    blurb: 'Yellow ale-cup tunic with foam handle — Oktoberfest party gag hit.',
  },
  {
    id: 'lederhosen-set',
    cat: 'funny',
    ali: 'Easter &St PatrickCostume',
    name: "Men's Bavarian Oktoberfest Lederhosen Set",
    fullTitle:
      'Mens Bavarian Oktoberfest Costume Set Lederhosen Orange Shorts Green Vest White Shirt Alpine Hat Complete Beer Outfit',
    image:
      'https://sc04.alicdn.com/kf/H536c5b3b182d419dafaee4e637c1779fE/Mens-Bavarian-Oktoberfest-Costume-Set-Lederhosen-Orange.png',
    priceFrom: 11.59,
    priceTo: 13.99,
    url: 'https://www.alibaba.com/product-detail/Mens-Bavarian-Oktoberfest-Costume-Set-Lederhosen_1601922255732.html',
    blurb: 'Lederhosen, vest, shirt and alpine hat — the complete Bavarian outfit.',
  },
  {
    id: 'santa-family-set',
    cat: 'christmas',
    ali: 'Christmas&Thanksgiving',
    name: 'Santa Claus Family Outfit Set',
    fullTitle:
      'New Arrival Christmas Costume Family Santa Claus Set Clause Outfit Xmas Suit Santa Outfit for Christmas Party Cosplay',
    image:
      'https://sc04.alicdn.com/kf/H5edf6297ca38439089280d8e48ebc9335/New-Arrival-Christmas-Costume-Family-Santa-Claus.jpg',
    priceFrom: 10.56,
    priceTo: 13.66,
    url: 'https://www.alibaba.com/product-detail/New-Arrival-Christmas-Costume-Family-Santa_1601273833860.html',
    blurb: 'Family Santa suits from XS to 2XL — matching Christmas cosplay sets.',
  },
  {
    id: 'christmas-tree-kids',
    cat: 'christmas',
    ali: 'Christmas&Thanksgiving',
    name: "Kids' Christmas Tree Costume Suit",
    fullTitle:
      'Hot Sale Customizable Green Christmas Party Unisex Santa Children Clothing Tree Suit Cosplay Outfits for Kids Includes Dresses',
    image:
      'https://sc04.alicdn.com/kf/H8405edd1e60d42e3849f5f59c9dc187fn/Hot-Sale-Customizable-Green-Christmas-Party-Unisex.jpg',
    priceFrom: 6.5,
    priceTo: 7,
    url: 'https://www.alibaba.com/product-detail/Hot-Sale-Customizable-Green-Christmas-Party_1601018570958.html',
    blurb: 'Green Christmas tree suit for kids — customizable unisex holiday look.',
  },
  {
    id: 'gingerbread-onesie',
    cat: 'christmas',
    ali: 'Onesie Pajama',
    name: 'Gingerbread Man Bodysuit Onesie',
    fullTitle:
      'Customizable Halloween Christmas Boys Cosplay Gingerbread Man Costume Brown Polyester Fabric Bodysuit',
    image:
      'https://sc04.alicdn.com/kf/H324dcfc952bb49be991b4e957124aa86d/Customizable-Halloween-Christmas-Boys-Cosplay-Gingerbread-Man.jpg',
    priceFrom: 7.14,
    priceTo: 8.16,
    url: 'https://www.alibaba.com/product-detail/Customizable-Halloween-Christmas-Boys-Cosplay-Gingerbread_1601211966167.html',
    blurb: 'Brown gingerbread bodysuit — a sweet hit for Christmas & Halloween.',
  },
  {
    id: 'bloody-bride',
    cat: 'halloween',
    ali: 'Halloween Costume',
    name: "Adult Bloody Bride Gown with Veil",
    fullTitle:
      'Adult Bloody Bride Costume Red Sleeveless Tulle Tiered Gown Lace Veil Black Belt Halloween Horror Party Stage Wear',
    image: 'https://sc04.alicdn.com/kf/H954ba1514f2c4aad97419e5e793564eco/Adult-Bloody-Bride-Costume-Red-Sleeveless-Tulle.jpg',
    priceFrom: 11.06,
    priceTo: 14.03,
    url: 'https://www.alibaba.com/product-detail/Adult-Bloody-Bride-Costume-Red-Sleeveless_1601934305457.html',
    blurb: 'Sleeveless tulle gown with lace veil — horror bride for stage & party.',
  },
  {
    id: 'mummy-kids',
    cat: 'halloween',
    ali: 'Halloween Costume',
    name: "Kids' Horror Mummy Hooded Jumpsuit",
    fullTitle:
      'Kids Horror Mummy Costume Gauze Wrapped Hooded Jumpsuit Beige Tattered Bandage Halloween Party Stage Performance Wear',
    image: 'https://sc04.alicdn.com/kf/Ha51ed5d9259844c9ba85f7240029c82bN/Kids-Horror-Mummy-Costume-Gauze-Wrapped-Hooded.jpg',
    priceFrom: 7.19,
    priceTo: 8.36,
    url: 'https://www.alibaba.com/product-detail/Kids-Horror-Mummy-Costume-Gauze-Wrapped_1601918372432.html',
    blurb: 'Gauze-wrapped hooded jumpsuit with a tattered bandage look.',
  },
  {
    id: 'skull-king',
    cat: 'halloween',
    ali: 'Halloween Costume',
    name: "Men's Skull King Cosplay Set",
    fullTitle:
      'Mens Skull King Cosplay Costume Blue Muscle Bodysuit Bone Mask Black Cape Purple Tassets Halloween Stage Wear',
    image: 'https://sc04.alicdn.com/kf/He0ac442e61bd4a81823b3bd1476ec99f1/Mens-Skull-King-Cosplay-Costume-Blue-Muscle.png',
    priceFrom: 8.99,
    priceTo: 10.43,
    url: 'https://www.alibaba.com/product-detail/Mens-Skull-King-Cosplay-Costume-Blue_1601914387782.html',
    blurb: 'Blue muscle bodysuit, bone mask, cape & tassets — skull king look.',
  },
  {
    id: 'retro-clown',
    cat: 'halloween',
    ali: 'Halloween Costume',
    name: 'Adult Retro Clown Jumpsuit Set',
    fullTitle:
      'Adult Retro Clown Costume Jumpsuit Ruffled Collar Pointed Hat Pompom Two Tone Vintage Halloween Masquerade Party Wear',
    image: 'https://sc04.alicdn.com/kf/H7d9fc6f3da48406e9ec4e5b932ae8b374/Adult-Retro-Clown-Costume-Jumpsuit-Ruffled-Collar.png',
    priceFrom: 17.63,
    priceTo: 20.51,
    url: 'https://www.alibaba.com/product-detail/Adult-Retro-Clown-Costume-Jumpsuit-Ruffled_1601927914201.html',
    blurb: 'Two-tone jumpsuit, ruffled collar & pointed hat — vintage circus clown.',
  },
  {
    id: 'prince-charming-boys',
    cat: 'kids',
    ali: 'Princess&Prince Costume',
    name: "Boys' Prince Charming Royal Outfit",
    fullTitle:
      'Kids Halloween Prince Charming Costume Royal King Outfit Long Sleeve Role Play Clothing for Boys',
    image: 'https://sc04.alicdn.com/kf/He5ef59442b51433eb2a7a0618268a5266/Kids-Halloween-Prince-Charming-Costume-Royal-King.png',
    priceFrom: 8.69,
    priceTo: 10.19,
    url: 'https://www.alibaba.com/product-detail/Kids-Halloween-Prince-Charming-Costume-Royal_1601664974839.html',
    blurb: 'Royal king outfit for little princes — role-play Halloween classic.',
  },
  {
    id: 'dressup-gift-princess',
    cat: 'kids',
    ali: 'Princess&Prince Costume',
    name: "Girls' Princess Dress-up Gift Set",
    fullTitle:
      '3-8 Birthday Gift Little Girl Princess Dress up Clothes Princess Dresses Princess Cape With Crown Toy Gift for Christmas',
    image: 'https://sc04.alicdn.com/kf/H80a2dbf5070048e6a2f2bcc71373e45eS/3-8-Birthday-Gift-Little-Girl-Princess.jpg',
    priceFrom: 5.04,
    priceTo: 5.46,
    url: 'https://www.alibaba.com/product-detail/3-8-Birthday-Gift-Little-Girl_1601270289425.html',
    blurb: 'Dress-up set with cape & crown — a princess gift box for ages 3–8.',
  },
  {
    id: 'sofia-princess-dress',
    cat: 'kids',
    ali: 'Princess&Prince Costume',
    name: 'Sofia Princess Puff-Sleeve Dress',
    fullTitle:
      'Sofia Princess Dress Birthday Costume Puff Sleeve Kids Halloween Christmas Evening Party Rapunzel Tv Movie Princess Dress',
    image: 'https://sc04.alicdn.com/kf/H458ee597df0f4efaadca842f73825e0aC/Sofia-Princess-Dress-Birthday-Costume-Puff-Sleeve.jpg',
    priceFrom: 8.19,
    priceTo: 9.49,
    url: 'https://www.alibaba.com/product-detail/Sofia-Princess-Dress-Birthday-Costume-Puff_1601686837385.html',
    blurb: 'Puff-sleeve princess dress — a storybook party favorite.',
  },
  {
    id: 'pink-nurse-girls',
    cat: 'funny',
    ali: 'Career Day Costume',
    name: "Girls' Pink Nurse Career Set",
    fullTitle:
      'Little Girls Pink Nurse Costume Short Sleeve Pattern Dress With Apron Hat School Career Day Performance Suit',
    image: 'https://sc04.alicdn.com/kf/Hc740d5b177484dea8a216d4437899451J/Little-Girls-Pink-Nurse-Costume-Short-Sleeve.png',
    priceFrom: 8.49,
    priceTo: 9.89,
    url: 'https://www.alibaba.com/product-detail/Little-Girls-Pink-Nurse-Costume-Short_1601867813203.html',
    blurb: 'Pattern dress with apron & hat — career-day nurse for little girls.',
  },
  {
    id: 'firefighter-kids',
    cat: 'funny',
    ali: 'Career Day Costume',
    name: "Kids' Firefighter Stage Set",
    fullTitle:
      "Children's Halloween Firefighter Performance Stage Costumes TV Movie Character Inspired Set With Top Component",
    image: 'https://sc04.alicdn.com/kf/Hc0ae6a3c0ff746eb821f7b0b0622ab02I/Children-s-Halloween-Firefighter-Performance-Stage-Costumes.jpg',
    priceFrom: 5.5,
    priceTo: 6.9,
    url: 'https://www.alibaba.com/product-detail/Children-s-Halloween-Firefighter-Performance-Stage_1601126159959.html',
    blurb: 'Character-inspired firefighter stage set — hero for a day.',
  },
  {
    id: 'cop-boys',
    cat: 'funny',
    ali: 'Career Day Costume',
    name: "Boys' Police Costume Set",
    fullTitle:
      'Halloween Cop Costume Black Suit Boys Kids Stage & Dancerwear Cosplay Uniform Set',
    image: 'https://sc04.alicdn.com/kf/Hdfa922e156f641169f26beb84a75416em/Halloween-Cop-Costume-Black-Suit-Boys-Kids.jpg',
    priceFrom: 10.48,
    priceTo: 12.38,
    url: 'https://www.alibaba.com/product-detail/Halloween-Cop-Costume-Black-Suit-Boys_1601574286486.html',
    blurb: 'Black cop suit set for boys — uniform cosplay for career day.',
  },
  {
    id: 'surgeon-dr-set',
    cat: 'funny',
    ali: 'Career Day Costume',
    name: '6-Piece Doctor & Surgeon Set',
    fullTitle:
      '6pcs Halloween Clothes Surgeon Dr Set Career Day Cosplay Costume Hospital Nurse Doctor Costume With Stethoscope',
    image: 'https://sc04.alicdn.com/kf/Hefbef72112cd4bc28c0d72b8010a5db2E/6pcs-Halloween-Clothes-Surgeon-Dr-Set-Career.jpg',
    priceFrom: 7.3,
    priceTo: 7.8,
    url: 'https://www.alibaba.com/product-detail/6pcs-Halloween-Clothes-Surgeon-Dr-Set_1601016237899.html',
    blurb: '6-piece hospital set with stethoscope — role-play kit for kids.',
  },
  {
    id: 'banana-suit',
    cat: 'funny',
    ali: 'Funny Costume',
    name: 'Unisex Funny Banana Suit',
    fullTitle:
      'Adult Unisex Funny Banana Suit Yellow Costume Light Halloween Fruit Fancy Party Festival Dance Costume Funny Banana Costume',
    image: 'https://sc04.alicdn.com/kf/H2704c2647cc84b0db215db3672752e8fo/Adult-Unisex-Funny-Banana-Suit-Yellow-Costume.jpg',
    priceFrom: 5.59,
    priceTo: 6.19,
    url: 'https://www.alibaba.com/product-detail/Adult-Unisex-Funny-Banana-Suit-Yellow_1601595436310.html',
    blurb: 'Light yellow banana suit — an instant gag for any party.',
  },
  {
    id: 'dino-inflatable',
    cat: 'funny',
    ali: 'Funny Costume',
    name: 'Inflatable T-Rex Dinosaur Suit',
    fullTitle:
      'Funny Halloween Dinosaur Inflatable Costume Tyrannosaurus Rex Polyester Cosplay Performance Play Carnival Festivities',
    image: 'https://sc04.alicdn.com/kf/Hb0263d552b464b15ba043d983663d969E/Funny-Halloween-Dinosaur-Inflatable-Costume-Tyrannosaurus-Rex.jpg',
    priceFrom: 17,
    priceTo: 17.9,
    url: 'https://www.alibaba.com/product-detail/Funny-Halloween-Dinosaur-Inflatable-Costume-Tyrannosaurus_1601165346242.html',
    blurb: 'Inflatable T-Rex suit — big laughs at carnivals and parades.',
  },
  {
    id: 'shark-mascot',
    cat: 'funny',
    ali: 'Funny Costume',
    name: 'Inflatable Shark Mascot Jumpsuit',
    fullTitle:
      'Cosplay Party Animal Mascot Costume Fancy Dress Funny Carcharias Suit Air Blow up Jaws Jumpsuit Inflatable Shark Costume',
    image: 'https://sc04.alicdn.com/kf/H6f779f33a5094f929263187053271ac7Y/Cosplay-Party-Animal-Mascot-Costume-Fancy-Dress.jpg',
    priceFrom: 12.14,
    priceTo: null,
    url: 'https://www.alibaba.com/product-detail/Cosplay-Party-Animal-Mascot-Costume-Fancy_1601291011499.html',
    blurb: 'Air-blow-up shark jumpsuit — mascot-style fancy dress.',
  },
  {
    id: 'king-crown-kids',
    cat: 'props',
    ali: 'Party Mask&Hat&Props',
    name: "Kids' King Crown & Prince Tiara",
    fullTitle:
      'King Crown for Kids Polyester Prince Tiara for Halloween Costume Cosplay Prom Dress up Party Supplies Birthday Headband Unisex',
    image: 'https://sc04.alicdn.com/kf/H6ab53dcd366e4e1c9934230a72f564a2d/King-Crown-for-Kids-Polyester-Prince-Tiara.jpg',
    priceFrom: 0.7,
    priceTo: null,
    url: 'https://www.alibaba.com/product-detail/King-Crown-for-Kids-Polyester-Prince_1601022310184.html',
    blurb: 'Polyester king crown & tiara — an easy add-on to any royal look.',
  },
  {
    id: 'phantom-mask',
    cat: 'props',
    ali: 'Party Mask&Hat&Props',
    name: 'Phantom Half-Face Carnival Mask',
    fullTitle:
      'Halloween Carnival Half-Face Phantom Mask One-Eyed Phantom of the Opera Mask Dance Party Nightclub Mask',
    image: 'https://sc04.alicdn.com/kf/Hc5db7cb48cb846d8b2089005a6a5fcf2t/Halloween-Carnival-Half-Face-Phantom-Mask-One.jpg',
    priceFrom: 1.67,
    priceTo: 3.54,
    url: 'https://www.alibaba.com/product-detail/Halloween-Carnival-Half-Face-Phantom-Mask_1601019019009.html',
    blurb: 'Half-face Phantom of the Opera mask — masquerade nightclub hit.',
  },
  {
    id: 'xmas-tutu-girls',
    cat: 'christmas',
    ali: 'Christmas&Thanksgiving',
    name: "Girls' Christmas Tutu Party Skirt",
    fullTitle:
      'Christmas Tutu Skirt for Girls Puffy Tulle Party Dress with Gold Foil Christmas Tree Reindeer Print Cosplay Dress',
    image: 'https://sc04.alicdn.com/kf/H89e6d033bc3843388fa9b019a6cbcebcN/Christmas-Tutu-Skirt-for-Girls-Puffy-Tulle.jpg',
    priceFrom: 2.78,
    priceTo: 2.8,
    url: 'https://www.alibaba.com/product-detail/Christmas-Tutu-Skirt-for-Girls-Puffy_1601630427180.html',
    blurb: 'Puffy tulle tutu with tree & reindeer foil print — festive favorite.',
  },
  {
    id: 'golden-santa',
    cat: 'christmas',
    ali: 'Christmas&Thanksgiving',
    name: "Men's Golden Santa Claus Full Set",
    fullTitle:
      'Golden Santa Claus Cosplay Costume Adult Men Christmas Suit Plush Top Pants Hat Beard Full Set Adult Performance Party Set Suit',
    image: 'https://sc04.alicdn.com/kf/H3589b23b6bbf4cce8ffc75599b3dbe42L/Golden-Santa-Claus-Cosplay-Costume-Adult-Men.jpg',
    priceFrom: 15.48,
    priceTo: 21.85,
    url: 'https://www.alibaba.com/product-detail/Golden-Santa-Claus-Cosplay-Costume-Adult_1601586334940.html',
    blurb: 'Plush golden Santa suit with hat & beard — deluxe performance set.',
  },
  {
    id: 'miles-morales-spiderman',
    cat: 'movie',
    ali: '1688 超级英雄(蜘蛛侠-迈尔斯)',
    name: 'Miles Morales Spider-Man Style Bodysuit',
    fullTitle:
      'Spider-Verse hero bodysuit — Miles Morales style muscle-print one-piece, kids & adult sizes',
    image: 'https://cbu01.alicdn.com/img/ibank/O1CN01mb7J8o1zrngziVqmZ_!!4120606768-0-cib.jpg',
    priceFrom: 28.6,
    priceTo: null,
    url: 'https://detail.1688.com/offer/1057529956433.html',
    blurb: 'Into the Spider-Verse hero look — kids & adult sizes.',
  },
  {
    id: 'spider-gwen',
    cat: 'movie',
    ali: '1688 超级英雄(蜘蛛侠-格温)',
    name: 'Spider-Gwen Style Bodysuit',
    fullTitle:
      'Spider-Gwen style zipped muscle bodysuit — Spider-Verse cosplay for kids & adults',
    image: 'https://cbu01.alicdn.com/img/ibank/O1CN01wyDtY61zrngzXDhlK_!!4120606768-0-cib.jpg',
    priceFrom: 39,
    priceTo: null,
    url: 'https://detail.1688.com/offer/1057546484270.html',
    blurb: 'Spider-Gwen style with printed muscle & web details.',
  },
  {
    id: 'iron-spider',
    cat: 'movie',
    ali: '1688 超级英雄(蜘蛛侠/钢铁蜘蛛款)',
    name: 'Iron Spider Style Bodysuit',
    fullTitle:
      'Iron Spider style one-piece muscle bodysuit — armored hero cosplay for kids & adults',
    image: 'https://cbu01.alicdn.com/img/ibank/O1CN011TAuqJ1zrngzlCDah_!!4120606768-0-cib.jpg',
    priceFrom: 39,
    priceTo: null,
    url: 'https://detail.1688.com/offer/1048003693133.html',
    blurb: 'Armored Iron Spider look with metallic print accents.',
  },
  {
    id: 'venom-symbiote',
    cat: 'movie',
    ali: '1688 超级英雄(毒液)',
    name: 'Venom Symbiote Style Bodysuit',
    fullTitle:
      'Venom symbiote style muscle bodysuit — black hero one-piece for kids & men, cross-border favorite',
    image: 'https://cbu01.alicdn.com/img/ibank/O1CN01OnmygB1zrngzRygch_!!4120606768-0-cib.jpg',
    priceFrom: 42.9,
    priceTo: null,
    url: 'https://detail.1688.com/offer/677781421791.html',
    blurb: 'Black symbiote muscle suit — a cross-border bestseller.',
  },
  {
    id: 'spiderman-peter-parker',
    cat: 'movie',
    ali: '1688 超级英雄(蜘蛛侠-彼得·帕克)',
    name: 'Spider-Man Movie Style Bodysuit (Peter Parker)',
    fullTitle:
      'Marvel Spider-Man 4 Peter Parker style muscle one-piece — movie same-style Halloween cosplay',
    image: 'https://cbu01.alicdn.com/img/ibank/O1CN01Her9b41zrnhwuZdwu_!!4120606768-0-cib.jpg',
    priceFrom: 45.5,
    priceTo: null,
    url: 'https://detail.1688.com/offer/1044012337052.html',
    blurb: 'Movie-grade print with 3D muscle shading.',
  },
  {
    id: 'venom-carnage-red',
    cat: 'movie',
    ali: '1688 超级英雄(毒液/屠杀)',
    name: 'Carnage Red Venom Style Bodysuit',
    fullTitle:
      'Venom 2 red Carnage style hero one-piece — movie same-style Halloween performance bodysuit',
    image: 'https://cbu01.alicdn.com/img/ibank/O1CN0155MvAA1zrnh02IjA8_!!4120606768-0-cib.jpg',
    priceFrom: 39,
    priceTo: null,
    url: 'https://detail.1688.com/offer/1055943056841.html',
    blurb: 'Red Carnage hero print — bold and screen-accurate.',
  },
  {
    id: 'lightning-venom',
    cat: 'movie',
    ali: '1688 超级英雄(毒液-炫彩)',
    name: 'Flash Venom Style Bodysuit',
    fullTitle:
      'Flashy Venom style iridescent one-piece — glowing web print for stage & Halloween',
    image: 'https://cbu01.alicdn.com/img/ibank/O1CN01jM8Zgg1zrngzDcCNU_!!4120606768-0-cib.jpg',
    priceFrom: 52,
    priceTo: null,
    url: 'https://detail.1688.com/offer/678350480192.html',
    blurb: 'Iridescent flash print that pops under stage lights.',
  },
  {
    id: 'venom-blackpanther-kids',
    cat: 'movie',
    ali: '1688 超级英雄(毒液系列/多角色儿童款)',
    name: 'Venom & Black Panther Style Kids Bodysuit',
    fullTitle:
      'Venom series & Black Panther style kids muscle bodysuit with hood — hero cosplay one-piece for children',
    image: 'https://cbu01.alicdn.com/img/ibank/O1CN01TtWF7P1zrngz73lbe_!!4120606768-0-cib.jpg',
    priceFrom: 42.9,
    priceTo: null,
    url: 'https://detail.1688.com/offer/974035074934.html',
    blurb: 'Hooded hero muscle suit — little heroes’ favorite.',
  },
  {
    id: 'captain-america-muscle',
    cat: 'movie',
    ali: '1688 超级英雄(美国队长)',
    name: 'Captain America Style Muscle Bodysuit',
    fullTitle:
      'Avengers Captain America style kids muscle one-piece — star-print hero bodysuit for Halloween',
    image: 'https://cbu01.alicdn.com/img/ibank/O1CN01rltF1B1zrnh0Dly5r_!!4120606768-0-cib.jpg',
    priceFrom: 42.9,
    priceTo: null,
    url: 'https://detail.1688.com/offer/970052340311.html',
    blurb: 'Shield-star print with padded muscle silhouette.',
  },
  {
    id: 'deadpool-cosplay',
    cat: 'movie',
    ali: '1688 超级英雄(死侍)',
    name: 'Deadpool Style Cosplay Bodysuit',
    fullTitle:
      'Deadpool style stage performance bodysuit — red & black hero one-piece for kids & men',
    image: 'https://cbu01.alicdn.com/img/ibank/O1CN01K8yWiP1zrngzx5eeC_!!4120606768-0-cib.jpg',
    priceFrom: 45.5,
    priceTo: null,
    url: 'https://detail.1688.com/offer/678069917532.html',
    blurb: 'The wisecracking merc — red & black muscle suit.',
  },
  {
    id: 'wolverine-deadpool3',
    cat: 'movie',
    ali: '1688 超级英雄(金刚狼/死侍3合集)',
    name: 'Wolverine Style Cosplay Bodysuit',
    fullTitle:
      'Wolverine & Deadpool 3 style cosplay one-piece — claw-print hero bodysuit for stage',
    image: 'https://cbu01.alicdn.com/img/ibank/O1CN01XCesrj1zrnh00DfnS_!!4120606768-0-cib.jpg',
    priceFrom: 45.5,
    priceTo: null,
    url: 'https://detail.1688.com/offer/971543476372.html',
    blurb: 'Claw-print hero suit from the big-screen duo.',
  },
  {
    id: 'hero-capes-set',
    cat: 'props',
    ali: '1688 超级英雄披风/配饰',
    name: 'Marvel Superhero Capes Set',
    fullTitle:
      'Reversible hero capes — Spider-Man, Superman, Captain America, Batman & Iron Man styles for stage & parade',
    image: 'https://cbu01.alicdn.com/img/ibank/O1CN010vfjBb1zrnh2vSUKX_!!4120606768-0-cib.jpg',
    priceFrom: 11.7,
    priceTo: null,
    url: 'https://detail.1688.com/offer/1047498472235.html',
    blurb: 'Five-in-one hero cape set — instant costume upgrade.',
  },
];

export const getCategory = (id) => CATEGORIES.find((c) => c.id === id);
export const getProduct = (id) => PRODUCTS.find((p) => p.id === id);
export const productsIn = (catId) => PRODUCTS.filter((p) => p.cat === catId);
export const formatPrice = (p) =>
  p.priceFrom == null
    ? 'Wholesale price on request'
    : `From $${p.priceFrom.toFixed(2)} / pc`;
export const priceRange = (p) =>
  p.priceFrom == null
    ? 'Wholesale price on request'
    : p.priceTo && p.priceTo > p.priceFrom
      ? `$${p.priceFrom.toFixed(2)}–${p.priceTo.toFixed(2)} / piece`
      : `From $${p.priceFrom.toFixed(2)} / piece`;

export const PRODUCT_TYPE_OPTIONS = [
  'Halloween Costumes',
  'Superhero, Movie & TV',
  'Anime & Cosplay',
  'Kids, Princess & Party',
  'Funny, Career & Novelty',
  'Christmas & Thanksgiving',
  'Party Masks, Hats & Props',
  'Custom OEM / ODM (my own design)',
];
