export const aiCameraProjectCaseStudy = {
  title: 'AI Camera Pro',
  subtitle: 'React Native camera experience with permission flow, capture modes, gallery import, and client-side enhancement behavior',
  shortDescription:
    'A polished camera-style mobile product focused on capture UX, photo mode presets, image enhancement behavior, permission handling, and high-quality gallery or camera imports.',
  longDescription:
    'AI Camera Pro is a mobile imaging prototype built with React Native. It combines a premium camera-style interface with Android permission handling, photo capture, gallery import, mode-specific enhancement behavior, image resizing, flash control, quality selection, animated capture feedback, processing overlays, and preview presentation. The current implementation focuses on device-side user experience and enhancement flow design rather than cloud AI APIs, which makes it a good example of mobile product thinking around imaging and responsiveness.',
  soloNarrative:
    'I built this as a mobile-first imaging experience where permissions, performance, interaction design, and enhancement flow all matter together instead of treating the camera like a plain utility screen.',
  assets: {
    poster: '/project/ai-camera-pro.svg',
  },
  heroMetrics: [
    { value: 'Mode presets', label: 'Photo, Portrait, Night, Macro, and Pro create a richer capture model than a plain camera button' },
    { value: 'Device-side processing', label: 'Image resizing and enhancement flow happen on the device for a responsive mobile experience' },
    { value: 'Capture + gallery', label: 'Users can either shoot fresh photos or import existing images for enhancement' },
    { value: 'Permission-first UX', label: 'Android camera and media access are treated as a designed onboarding flow' },
    { value: 'Quality control', label: 'HD vs standard quality settings influence output size and processing behavior' },
    { value: 'Premium mobile feel', label: 'Animated transitions, overlays, and preview modals make it feel more product-like' },
  ],
  homeProofBlocks: [
    {
      title: 'Camera-style interaction design',
      detail:
        'The project is shaped like a real mobile camera experience with capture animation, flash modes, settings, and mode switching instead of a simple upload page.',
    },
    {
      title: 'Enhancement workflow',
      detail:
        'Images go through a device-side enhancement pipeline with resizing, quality-aware targets, and processing feedback rather than a dead-end capture step.',
    },
    {
      title: 'Permission and device handling',
      detail:
        'Android camera and storage permissions are handled explicitly so the app behaves like a product that understands real device constraints.',
    },
    {
      title: 'Mobile UX polish',
      detail:
        'Animated states, modal preview, settings drawer behavior, and richer visual framing make this feel stronger than a default starter camera screen.',
    },
  ],
  keySystems: [
    {
      title: 'Permission-gated capture flow',
      description:
        'The app does not assume hardware access. Camera and media permissions are requested and surfaced as part of the first-run mobile experience.',
    },
    {
      title: 'Mode-aware photo behavior',
      description:
        'Photo, Portrait, Night, Macro, and Pro modes are framed as separate enhancement personalities, making the app more productized than a single-mode capture utility.',
    },
    {
      title: 'Enhancement and resizing pipeline',
      description:
        'Captured or imported images pass through a resizing flow with quality-aware output targets, processing progress, and post-capture transformation steps.',
    },
    {
      title: 'Capture and gallery ingestion',
      description:
        'Users can shoot a new photo with camera access or bring in an existing image from the gallery for the same enhancement flow.',
    },
    {
      title: 'Preview and settings UX',
      description:
        'Photo preview, flash toggles, quality selection, and settings surfaces are treated as first-class parts of the app experience.',
    },
    {
      title: 'Mobile imaging product thinking',
      description:
        'This project shows that I can turn a lower-level device capability into a more refined product experience with clear interaction states.',
    },
  ],
  technicalArchitecture: [
    {
      title: 'React Native app shell',
      summary:
        'The app is built as a native mobile product with direct permission handling, animated state, and a capture-first screen structure.',
      items: ['React Native', 'TypeScript-ready app structure', 'Animated API', 'Safe areas'],
    },
    {
      title: 'Capture and gallery integration',
      summary:
        'Camera and gallery access are handled through native device bridges rather than browser-like abstractions.',
      items: ['react-native-image-picker', 'camera launch', 'gallery import', 'media permissions'],
    },
    {
      title: 'Device-side processing',
      summary:
        'The enhancement flow currently uses local image resizing and mode-dependent processing decisions to keep the experience immediate on device.',
      items: ['image resizing', 'quality targets', 'processing progress UI', 'mode-specific tuning'],
    },
    {
      title: 'Mobile polish layer',
      summary:
        'Permission screens, status bar handling, preview modal, and animated transitions make the app feel more complete as a mobile product exercise.',
      items: ['permission UX', 'flash mode switching', 'preview modal', 'capture animation'],
    },
  ],
  soloOwnership: [
    'React Native mobile camera experience design',
    'Android permission handling for camera and media access',
    'Capture, gallery import, and preview flow implementation',
    'Device-side image resizing and enhancement behavior',
    'Mode preset system for Photo, Portrait, Night, Macro, and Pro',
    'Processing-state UI and overall visual polish',
  ],
  technologyList: [
    'React Native',
    'react-native-image-picker',
    '@bam.tech/react-native-image-resizer',
    'react-native-permissions',
    'Animated API',
    'Android permission flow',
    'Mobile image processing',
    'Camera-mode UX',
    'Preview modal design',
  ],
};
