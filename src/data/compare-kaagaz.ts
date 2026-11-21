// Pustak Scan vs Kaagaz Scanner (/pustak-scan/vs-kaagaz-scanner).
// Every Kaagaz claim must point at a public source below and be re-checked on `checked`.
// If something can't be verified, say "Not stated" rather than guessing.

export const checked = { iso: '2026-11-20', label: '20 November 2026' };

export const sources = {
  play: {
    label: 'Google Play listing: “PDF Scanner & Editor by Kaagaz”',
    url: 'https://play.google.com/store/apps/details?id=kaagaz.scanner.docs.pdf&hl=en_IN',
  },
  dataSafety: {
    label: 'Google Play Data safety section for Kaagaz',
    url: 'https://play.google.com/store/apps/datasafety?id=kaagaz.scanner.docs.pdf&hl=en',
  },
  appStore: {
    label: 'Apple App Store listing (India): “Kaagaz PDF Scanner & Compress”',
    url: 'https://apps.apple.com/in/app/id1544400722',
  },
  premium: {
    label: 'Kaagaz website: Benefits of Kaagaz Premium Plan',
    url: 'https://kaagaz.app/premium-plan-benefits-iOS-app',
  },
  faq: { label: 'Kaagaz website: FAQs', url: 'https://kaagaz.app/faqs' },
  privacy: { label: 'Kaagaz privacy policy', url: 'https://kaagaz.app/privacy' },
  cloud: { label: 'Kaagaz Cloud (web access)', url: 'https://cloud.kaagaz.app' },
  pustakPlay: {
    label: 'Pustak Scan on Google Play',
    url: 'https://play.google.com/store/apps/details?id=com.pustak.scanner',
  },
} as const;

export type SourceKey = keyof typeof sources;

// 'yes' | 'no' | 'partial' | 'unknown' drive the little status marks; the text says what it means.
export type Mark = 'yes' | 'no' | 'partial' | 'unknown';
export interface Cell {
  mark: Mark;
  text: string;
  src?: SourceKey[];
}
export interface Row {
  feature: string;
  pustak: Cell;
  kaagaz: Cell;
}

export const rows: Row[] = [
  {
    feature: 'Price',
    pustak: { mark: 'yes', text: 'Free' },
    kaagaz: {
      mark: 'partial',
      text: 'Free to scan. On iPhone, Premium is ₹999/year or ₹199/month for HD scans, unlimited PDF tools, desktop access, 1 GB cloud and no ads',
      src: ['premium', 'appStore'],
    },
  },
  {
    feature: 'Watermark on exports',
    pustak: { mark: 'yes', text: 'None' },
    kaagaz: { mark: 'yes', text: 'No default watermark. Optional custom watermark', src: ['play', 'faq'] },
  },
  {
    feature: 'Sign-up needed to scan',
    pustak: { mark: 'yes', text: 'No account at all' },
    kaagaz: {
      mark: 'yes',
      text: 'No (“No Sign In required”). An account is needed for Kaagaz Cloud and web access',
      src: ['play', 'faq'],
    },
  },
  {
    feature: 'Ads',
    pustak: { mark: 'yes', text: 'None in this version' },
    kaagaz: { mark: 'partial', text: 'Play listing says “Contains ads”. No ads is a Premium benefit', src: ['play', 'premium'] },
  },
  {
    feature: 'Text reading (OCR)',
    pustak: { mark: 'yes', text: 'Hindi + English, plus an English-only mode' },
    kaagaz: {
      mark: 'partial',
      text: 'Has an OCR tool that extracts text and makes searchable PDFs. OCR languages are not stated',
      src: ['appStore'],
    },
  },
  {
    feature: 'Reads Hindi (Devanagari) text',
    pustak: { mark: 'yes', text: 'Yes' },
    kaagaz: { mark: 'unknown', text: 'Not stated in its public listings (not verified)' },
  },
  {
    feature: 'Where text is read',
    pustak: { mark: 'yes', text: 'On the phone, offline' },
    kaagaz: { mark: 'unknown', text: 'Not stated (not verified)' },
  },
  {
    feature: 'Searchable PDF',
    pustak: { mark: 'yes', text: 'Yes' },
    kaagaz: { mark: 'yes', text: 'Yes, through the OCR tool', src: ['appStore'] },
  },
  {
    feature: 'Word (.docx) export',
    pustak: { mark: 'yes', text: 'Yes, keeps formatting and Hindi fonts' },
    kaagaz: { mark: 'unknown', text: 'Not mentioned in its listings (not verified)' },
  },
  {
    feature: 'Edit the recognised text',
    pustak: { mark: 'yes', text: 'Per-page editor with bold, headings, lists, alignment, undo/redo' },
    kaagaz: {
      mark: 'partial',
      text: 'PDF editing: write text on a PDF, highlight, erase, add images',
      src: ['play'],
    },
  },
  {
    feature: 'Export formats',
    pustak: { mark: 'yes', text: 'Searchable PDF, image PDF, Word, text, JPG (all pages or a range)' },
    kaagaz: { mark: 'yes', text: 'PDF, JPG, PNG (and searchable PDF via OCR)', src: ['play', 'appStore'] },
  },
  {
    feature: 'ID card (front + back on one page)',
    pustak: { mark: 'yes', text: 'Yes, at real card size on A4' },
    kaagaz: { mark: 'yes', text: 'Yes', src: ['play', 'appStore'] },
  },
  {
    feature: 'Large PDF import',
    pustak: { mark: 'yes', text: 'Hundreds of pages, read page by page in the background' },
    kaagaz: { mark: 'partial', text: 'Imports PDFs (including from WhatsApp). Large-PDF handling not stated', src: ['play'] },
  },
  {
    feature: 'Backup',
    pustak: {
      mark: 'partial',
      text: 'One backup file you save yourself (for example to Google Drive) and restore on a new phone. No Pustak cloud and no automatic sync',
    },
    kaagaz: {
      mark: 'yes',
      text: 'Kaagaz Cloud, 100 MB free (1 GB with yearly Premium). Upload to Google Drive or Dropbox',
      src: ['play', 'premium'],
    },
  },
  {
    feature: 'E-signature',
    pustak: { mark: 'no', text: 'No' },
    kaagaz: { mark: 'yes', text: 'Yes, “Add Signature”', src: ['play'] },
  },
  {
    feature: 'PDF tools (merge, split, compress, password)',
    pustak: { mark: 'no', text: 'No' },
    kaagaz: { mark: 'yes', text: 'Yes (unlimited with Premium)', src: ['play', 'premium'] },
  },
  {
    feature: 'Platforms',
    pustak: { mark: 'partial', text: 'Android' },
    kaagaz: { mark: 'yes', text: 'Android, iPhone, and web access from a computer (Premium)', src: ['play', 'appStore', 'premium'] },
  },
  {
    feature: 'App languages',
    pustak: { mark: 'partial', text: 'Hindi, English' },
    kaagaz: { mark: 'yes', text: '12 languages, including Hindi, Marathi, Tamil and Bengali', src: ['play'] },
  },
  {
    feature: 'Privacy and data',
    pustak: { mark: 'yes', text: 'Documents never leave the phone unless you share or back them up. Only the camera permission' },
    kaagaz: {
      mark: 'partial',
      text: 'Scans stay on the device unless you use its cloud. Play Data safety lists data that may be collected (e.g. approximate location, optional personal info) and some shared for analytics',
      src: ['privacy', 'dataSafety'],
    },
  },
];

export const verdict = {
  pustak: [
    'You need Hindi and English text read from your pages, and want to fix and format that text',
    'You want Word (.docx) export that keeps formatting and Hindi fonts',
    'You don’t want an account or any cloud option at all',
    'You import very large PDFs (Pustak Scan handles hundreds of pages in the background)',
    'You want a free app that shows no ads (in its current version)',
  ],
  kaagaz: [
    'You use an iPhone, or want your scans on a computer too',
    'You want cloud backup (Kaagaz Cloud) or uploads to Google Drive or Dropbox',
    'You sign documents or need PDF tools like merge, split, compress or password',
    'You want the app in a language other than Hindi or English',
    'You prefer a widely used app (Google Play shows 1Cr+ downloads)',
  ],
};

export const kaagazAliases = 'Kaagaz is also written Kagaz, Kaagaj or Kagaaz';
