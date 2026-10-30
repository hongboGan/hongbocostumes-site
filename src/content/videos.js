// Curated workshop videos. Embedding only — playback and hosting stay with the
// original creators on YouTube, which keeps the page fast and the rights clean.
// Add three per week; keep the list newest-first. Verified against the live
// watch pages on 2026-10-30.
export const VIDEOS = [
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
