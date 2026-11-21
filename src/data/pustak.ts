// Content for the Pustak Scan product page (/pustak-scan) and its comparison page.
// Only state facts that are true for the current release (v2). Keep claims small and checkable.

export const pustak = {
  name: 'Pustak Scan',
  path: '/pustak-scan',
  playUrl: 'https://play.google.com/store/apps/details?id=com.pustak.scanner',
  packageId: 'com.pustak.scanner',
  pitch: 'Scan documents and read Hindi + English text, right on your phone. Free, offline, no watermark.',
  description:
    'Pustak Scan is a free Android document scanner that reads Hindi and English text (OCR) on your phone, offline. Export searchable PDF, Word or text, with no watermark and no sign-up.',
  highlights: ['Free', 'No watermark', 'No sign-up', 'Works offline', 'हिन्दी + English'],
  // Real store images go in public/pustak-scan/. Missing files show a styled placeholder instead.
  featureGraphic: { src: '/pustak-scan/feature-graphic.webp', width: 1024, height: 500, alt: 'Pustak Scan: scan documents and read Hindi and English text on your phone' },
  screens: [
    { src: '/pustak-scan/screens/01.webp', alt: 'Library screen with folders and recent documents, each marked Text ready — headline: Scan Hindi & English documents' },
    { src: '/pustak-scan/screens/02.webp', alt: 'Text read from a scanned Hindi book page — headline: Pages to text, right on your phone' },
    { src: '/pustak-scan/screens/03.webp', alt: 'Text editor with a centred title, bold and underlined words and a formatting toolbar — headline: Fix and format the text' },
    { src: '/pustak-scan/screens/04.webp', alt: 'Export sheet with Searchable PDF, PDF, Word and Plain text, save location and PDF quality — headline: Searchable PDF, Word or Text' },
    { src: '/pustak-scan/screens/05.webp', alt: 'Reading a 240-page PDF in the background with progress — headline: Import PDFs with hundreds of pages' },
    { src: '/pustak-scan/screens/06.webp', alt: 'Document with a grid of page thumbnails to reorder — headline: Every page, organised' },
    { src: '/pustak-scan/screens/07.webp', alt: 'Library screen with menus in Hindi — headline: App in Hindi or English' },
    { src: '/pustak-scan/screens/08.webp', alt: 'PDF saved screen with a No watermark badge and Open, Share, Show folder buttons — headline: Saved. Clean. No watermark.' },
  ],
};

export const pustakFeatures = [
  {
    id: 'ocr',
    label: 'read --lang hi,en',
    title: 'Reads Hindi + English text',
    lead: 'Text recognition (OCR) runs on the phone itself, using Google ML Kit’s Devanagari model, which also reads English.',
    points: [
      'Hindi and English on the same page',
      '“English only” mode when a page has no Hindi',
      'Works offline: nothing is uploaded',
      'Re-read a page any time',
    ],
  },
  {
    id: 'search',
    label: 'grep -r "पुस्तक"',
    title: 'Search inside every page',
    lead: 'Type a word in Hindi or English and find it in any document, down to the exact page.',
    points: [
      'Searches document names and the text of every page',
      'Tap a result to open that page',
      'Runs in the background, even across big books',
    ],
  },
  {
    id: 'scan',
    label: 'scan --batch 50',
    title: 'Clean, straight scans',
    lead: 'Uses Google’s document scanner, so pages come out straight and readable.',
    points: [
      'Automatic edge detection and crop',
      'Filters for clearer pages',
      'Up to 50 pages in one go',
      'Or import pages from your photos',
    ],
  },
  {
    id: 'pdf',
    label: 'import big.pdf',
    title: 'Big PDFs, no freezing',
    lead: 'Import PDFs with hundreds of pages. They are imported and read page by page in the background.',
    points: [
      'Keep using the app while it works',
      'The phone stays responsive',
      'A warning (not a block) if a PDF is large for your phone’s memory',
      'A heads-up when storage is low',
    ],
  },
  {
    id: 'export',
    label: 'export --format',
    title: 'Export the way you need',
    lead: 'Pick a format, which pages (all or a range) and a quality (Small, Balanced or High). No watermark on any export.',
    points: [
      'Searchable PDF: the page image with an invisible, selectable text layer',
      'Plain image PDF',
      'Word (.docx) that keeps bold, italic, underline, headings, lists and alignment, with Hindi fonts that render correctly',
      'Plain text',
      'Images (JPG), one per page, easy to send',
    ],
  },
  {
    id: 'edit',
    label: 'edit page.txt',
    title: 'Fix and format the text',
    lead: 'Every page has its own text editor, so you can correct OCR mistakes before you export.',
    points: [
      'Bold, italic, underline and text size',
      'Headings and titles, bullet lists',
      'Left, centre, right alignment',
      'Undo and redo',
    ],
  },
  {
    id: 'id',
    label: 'scan --id-card',
    title: 'ID card mode',
    lead: 'Scan the front and the back, and get both on one A4 page at real card size (85.6 × 54 mm), ready to print.',
    points: ['Front and back on a single page', 'True-to-size for photocopy-style prints'],
  },
  {
    id: 'organise',
    label: 'ls ~/My\\ Scans',
    title: 'Simple folders',
    lead: 'Start scanning straight away. Documents land in “My Scans”, no naming needed first.',
    points: [
      'Move or copy documents between folders',
      'Crop, rotate, reorder or delete pages',
      'Add more pages later',
    ],
  },
  {
    id: 'save',
    label: 'save --to Downloads',
    title: 'Save and share',
    lead: 'Files go to Downloads/Pustak Scan, or any folder you choose.',
    points: ['“Always save here” for one-tap saving', 'Share directly to any app'],
  },
  {
    id: 'backup',
    label: 'backup --all',
    title: 'Back up, and move to a new phone',
    lead: 'Save every document into one backup file, kept wherever you choose: Google Drive, your phone or a computer.',
    points: [
      'Restore it on a new phone in a few taps',
      'Restoring only adds documents, it never deletes any',
      'No account and no Pustak cloud',
    ],
  },
];

export const pustakSteps = [
  { n: '01', title: 'Scan', text: 'Point the camera at a page, or import photos or a PDF. Edges are found and cropped for you.' },
  { n: '02', title: 'Read text', text: 'Hindi and English text is read on the phone. Fix anything in the editor and add formatting.' },
  { n: '03', title: 'Export', text: 'Save as searchable PDF, image PDF, Word or text, then share it or save it to any folder.' },
];

export const pustakPrivacy = [
  { title: 'Stays on your phone', text: 'Documents never leave the phone on their own. There is no Pustak cloud and no server. A backup is a file you save wherever you choose.' },
  { title: 'No account', text: 'No sign-up and no login. Open the app and scan.' },
  { title: 'Only the camera', text: 'The only permission is the camera (plus storage on very old Android versions). No contacts, no location.' },
  { title: 'Offline', text: 'Scanning, text reading and exporting all work without internet.' },
];

export const pustakFaq = [
  {
    q: 'Is Pustak Scan free?',
    a: 'Yes. It is free, exports have no watermark and there is no sign-up or login. This version shows no ads.',
  },
  {
    q: 'Can it read Hindi text?',
    a: 'Yes. It reads Hindi (Devanagari) and English text using Google ML Kit on the phone itself. There is also an “English only” mode.',
  },
  {
    q: 'Does it need internet?',
    a: 'No. Text is read on the phone and your documents are never uploaded anywhere.',
  },
  {
    q: 'Can I edit the text after scanning?',
    a: 'Yes. Each page has a text editor with bold, italic, underline, text size, headings, bullet lists, alignment and undo/redo. You can also re-read a page.',
  },
  {
    q: 'Which formats can I export?',
    a: 'Searchable PDF (image with an invisible selectable text layer), plain image PDF, Word (.docx), plain text, and images (one JPG per page). PDFs come in Small, Balanced or High quality, and you can export all pages or only a range.',
  },
  {
    q: 'Can I search inside my scans?',
    a: 'Yes. The search bar at the top of the library finds words in Hindi or English in document names and in the text of every page, and opens the page where the word appears.',
  },
  {
    q: 'What happens when I change phones?',
    a: 'In Settings, “Back up all scans” saves every document into one file. Keep it on Google Drive or copy it to your computer. On the new phone, install Pustak Scan and choose “Restore from backup”. Restoring adds documents and never deletes any.',
  },
  {
    q: 'Can I import a PDF with hundreds of pages?',
    a: 'Yes. Large PDFs are imported and read page by page in the background, so the phone doesn’t freeze and you can keep using the app. If a PDF is large for your phone’s memory, or storage is low, you get a warning, not a block.',
  },
  {
    q: 'How do I print an ID card?',
    a: 'Use ID card mode: scan the front and the back, and both are placed on one A4 page at real card size (85.6 × 54 mm).',
  },
  {
    q: 'Where are my files saved?',
    a: 'In Downloads/Pustak Scan by default, or any folder you choose. You can tick “always save here”, or share straight to another app.',
  },
  {
    q: 'Is the app available in Hindi?',
    a: 'Yes. The app menus can be in Hindi or English.',
  },
  {
    q: 'Who makes Pustak Scan?',
    a: 'Pustak Scan is built with Flutter by Ankit Bansal, an independent developer.',
  },
];
