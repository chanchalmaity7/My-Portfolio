export const voicemailProjectCaseStudy = {
  title: 'Visual Voicemail System',
  subtitle: 'Android-first voicemail product with Twilio call flow, Mongo storage, greeting setup, and inbox playback',
  shortDescription:
    'A visual voicemail concept built around missed-call forwarding, Twilio webhook handling, MongoDB storage, and a mobile inbox where users can see, open, and play voicemail messages instead of calling a carrier mailbox blindly.',
  longDescription:
    'Visual Voicemail System is a telephony-oriented product concept designed to bring an iOS-style voicemail experience to Android users. The backend receives forwarded unanswered calls through Twilio, plays a greeting, records the caller message, stores voicemail metadata in MongoDB, and exposes the inbox through a mobile app. The app presents voicemail messages in a list, shows unread state, allows playback, and supports user-level greeting setup. The project combines backend webhooks, file upload handling, Mongo data models, and mobile audio playback into one connected product idea.',
  soloNarrative:
    'I designed this project as a full product flow across telephony handling, voicemail capture, inbox UX, audio playback, and Hindi-friendly mobile presentation.',
  assets: {
    poster: '/project/visual-voicemail.svg',
  },
  heroMetrics: [
    { value: 'Twilio webhook flow', label: 'Incoming call routing turns missed calls into recorded messages' },
    { value: 'Mongo inbox', label: 'Caller details, audio URL, duration, unread state, and timestamps are stored centrally' },
    { value: 'Greeting support', label: 'Users can set a custom voicemail greeting instead of using a generic message' },
    { value: 'Mobile playback', label: 'Voicemails are browsed and opened through an app-based inbox experience' },
    { value: 'Hindi-first UX', label: 'The user flow is designed for Indian users with localized guidance' },
    { value: 'Telephony product thinking', label: 'This is a workflow product, not just a static messages screen' },
  ],
  homeProofBlocks: [
    {
      title: 'Telephony to app workflow',
      detail:
        'The interesting part is the end-to-end workflow: ring timeout, Twilio forwarding, greeting playback, recording capture, database save, and app inbox visibility.',
    },
    {
      title: 'Inbox behavior',
      detail:
        'Unread badges, timestamps, durations, caller numbers, and tap-to-play behavior make voicemail feel like a modern list-based product instead of a hidden telecom feature.',
    },
    {
      title: 'Greeting pipeline',
      detail:
        'Users can upload or associate greeting audio, which is an important part of making the experience feel personal and productized.',
    },
    {
      title: 'Cross-layer execution',
      detail:
        'This project mixes backend webhook handling, file storage, Mongo schemas, and mobile audio playback rather than living in a single frontend layer.',
    },
  ],
  keySystems: [
    {
      title: 'Missed-call capture flow',
      description:
        'The project models the real-world voicemail lifecycle: a call rings, forwards on timeout, greeting audio is played, the caller leaves a message, and that recording becomes part of the user inbox.',
    },
    {
      title: 'Voicemail inbox UX',
      description:
        'Messages are shown as a readable list with caller identity, duration, timestamps, and unread state instead of forcing users into voice-only carrier navigation.',
    },
    {
      title: 'Greeting and identity handling',
      description:
        'Users register a number, maintain their voicemail profile, and can upload or point to a custom greeting that becomes part of the telephony experience.',
    },
    {
      title: 'Audio message playback',
      description:
        'React Native playback support makes voicemail retrieval feel like a media app action rather than a hidden backend artifact.',
    },
    {
      title: 'Backend persistence',
      description:
        'MongoDB stores voicemail records, user profile fields, greeting references, unread state, and timestamps so the app has a real source of truth.',
    },
    {
      title: 'Telecom-style product thinking',
      description:
        'This is useful portfolio work because it combines mobile UX with backend event workflows and real-world phone behavior rather than ordinary CRUD-only screens.',
    },
  ],
  technicalArchitecture: [
    {
      title: 'Backend webhook service',
      summary:
        'Node.js and Express receive incoming-call and recording-complete events, generate TwiML responses, and persist voicemail records.',
      items: ['Node.js', 'Express.js', 'Twilio webhooks', 'TwiML generation', 'Multer uploads'],
    },
    {
      title: 'Data and media persistence',
      summary:
        'MongoDB stores voicemail metadata and user voicemail settings while uploaded greeting media is handled through file storage.',
      items: ['MongoDB', 'Mongoose', 'voicemail schema', 'user schema', 'audio path storage'],
    },
    {
      title: 'React Native inbox app',
      summary:
        'The mobile surface lists voicemail records, tracks unread state, and plays messages through a native-friendly audio playback layer.',
      items: ['React Native', 'Axios', 'React Native Sound', 'list-based inbox UI', 'status badge logic'],
    },
    {
      title: 'Product behavior',
      summary:
        'The system connects real call forwarding behavior to a cleaner voicemail experience designed for Android users.',
      items: ['ring timeout workflow', 'greeting message setup', 'mark-as-read logic', 'localized UX'],
    },
  ],
  soloOwnership: [
    'Telephony-to-app voicemail product design',
    'Express routes for user registration, greeting upload, voicemail fetch, and read-state updates',
    'MongoDB schemas for voicemail records and user voicemail settings',
    'Twilio webhook flow for greeting playback and recording capture',
    'React Native inbox UX with audio playback behavior',
    'Localized Hindi-oriented user experience and product framing',
  ],
  technologyList: [
    'React Native',
    'Node.js',
    'Express.js',
    'MongoDB',
    'Mongoose',
    'Twilio',
    'TwiML',
    'Multer',
    'Axios',
    'React Native Sound',
    'CORS',
    'Localized mobile UX',
  ],
};
