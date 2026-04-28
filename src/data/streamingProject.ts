export const PRIVATE_THEATER_LIVE_URL = 'https://aas-pas-theatre-frontend.vercel.app/';

export const streamingProjectCaseStudy = {
  title: 'AasPas Private Theater',
  subtitle: 'Realtime watch-party platform with synced playback, voice chat, source compatibility, and room persistence',
  shortDescription:
    'A collaborative private theater product where a host creates a room, guests join through a link, video playback stays synchronized, voice and chat stay live, and room state survives reloads through Mongo-backed persistence.',
  longDescription:
    'AasPas Private Theater is a realtime watch-party platform built to make remote video sessions feel controlled and social instead of chaotic. The product lets a host create a room around a video source, share a join link, and keep playback synchronized for everyone through Socket.IO state updates. It supports YouTube, Google Drive, direct video files, HLS streams, Streamable links, and generic embedded players. The room also includes WebRTC voice, realtime chat, emoji reactions, MongoDB-backed room recovery, identity persistence, automatic room expiry, and compatibility checks so users do not create broken rooms accidentally.',
  soloNarrative:
    'I built this system end to end across the room lifecycle, source parsing, sync rules, voice integration, persistence model, playback recovery behavior, and the dark streaming-style product interface.',
  assets: {
    poster: '/project/aaspas-private-theater.svg',
  },
  heroMetrics: [
    { value: 'Host-led sync', label: 'Only the room owner controls shared play, pause, and seek for everyone else' },
    { value: 'Voice + chat', label: 'WebRTC voice, live chat, and emoji reactions keep the room social in real time' },
    { value: 'Flexible sources', label: 'Supports YouTube, Google Drive, direct MP4, HLS, Streamable, and embed-style inputs' },
    { value: 'Mongo-backed state', label: 'Playback position, room activity, chat, and member profiles can recover after reloads' },
    { value: 'Link-based access', label: 'Guests can join private rooms quickly without a heavy account system' },
    { value: 'TTL cleanup', label: 'Inactive rooms expire automatically so stale collaboration state does not stay forever' },
  ],
  homeProofBlocks: [
    {
      title: 'Shared playback engine',
      detail:
        'This is more than a video page. It includes host-authority playback control, drift-aware synchronization, seek handling, and reload recovery so multiple viewers stay aligned.',
    },
    {
      title: 'Source compatibility layer',
      detail:
        'The product parses multiple source types, normalizes tricky links, inspects remote media responses, and gives users feedback before room creation when a link is not browser-friendly.',
    },
    {
      title: 'Collaboration stack',
      detail:
        'Voice chat, room chat, emoji reactions, guest presence, shareable room links, fullscreen chat overlays, and join identity persistence make the experience feel like a real shared room.',
    },
    {
      title: 'Persistence and cleanup',
      detail:
        'MongoDB stores room playback state, capped chat history, and member profiles while TTL rules and runtime resets keep temporary rooms manageable.',
    },
  ],
  keySystems: [
    {
      title: 'Room creation and identity flow',
      description:
        'A host enters a video link and name, receives a private room code, and shares that link with guests while lightweight participant identity is preserved locally for smoother re-entry.',
    },
    {
      title: 'Host-controlled synchronized playback',
      description:
        'The room creator is the master controller for play, pause, and seek. Other participants receive versioned state updates so the room does not split into multiple conflicting playback timelines.',
    },
    {
      title: 'Universal media compatibility',
      description:
        'A parsing layer classifies YouTube, Google Drive, HLS, direct media files, Streamable, and embedded players so the app can route each source through the correct playback strategy.',
    },
    {
      title: 'Realtime collaboration',
      description:
        'Socket.IO powers presence, synced playback events, chat, emoji reactions, room join events, and voice participant discovery in one connected collaboration flow.',
    },
    {
      title: 'Voice room layer',
      description:
        'SimplePeer-based WebRTC voice gives participants a built-in audio room with mic and speaker controls, making the experience feel closer to a real shared hangout than passive co-watching.',
    },
    {
      title: 'Persistence, expiry, and recovery',
      description:
        'Playback state, activity timestamps, chat history, and member profiles are persisted in MongoDB, while inactive room expiry and runtime reset behavior prevent stale state from growing endlessly.',
    },
  ],
  productSurfaces: [
    {
      title: 'Room creation surface',
      tone: 'Fast entry and source validation',
      summary:
        'The landing experience is built around speed: create a private room quickly, detect the kind of media link the user pasted, and prevent obviously broken sources before the room opens.',
      points: [
        'Name plus video URL entry with lightweight friction',
        'Automatic source-type detection and badge feedback',
        'Google Drive link normalization and direct-link conversion',
        'Server-assisted inspection for unsupported or misleading responses',
        'Room creation with owner identity binding',
        'Immediate redirect into a shareable join link flow',
      ],
    },
    {
      title: 'Watch room surface',
      tone: 'Shared video experience',
      summary:
        'The main room screen combines the player, host controls, participant presence, and fullscreen-friendly interaction patterns into one viewing surface.',
      points: [
        'Shared player area with playback-state recovery',
        'Host-only timeline control for play, pause, and seek',
        'Guest-side sync requests when playback drifts or buffers',
        'Quality controls for supported YouTube playback',
        'Fullscreen support with floating collaboration UI',
        'Join-live behavior for participants who fall behind playback',
      ],
    },
    {
      title: 'Collaboration surface',
      tone: 'Voice, chat, and reactions',
      summary:
        'The social layer is not bolted on. Voice chat, live room messages, floating reactions, and participant status are integrated into the watch session itself.',
      points: [
        'Realtime chat with capped history replay on join',
        'Emoji reaction bursts across the room',
        'SimplePeer WebRTC voice join and leave behavior',
        'Mic and speaker controls for each participant',
        'Voice participant discovery over Socket.IO signalling',
        'Floating chat overlay during fullscreen playback',
      ],
    },
    {
      title: 'Backend control plane',
      tone: 'State, authority, and lifecycle rules',
      summary:
        'The backend decides room lifecycle, persistence, sync authority, and media validation so the product remains recoverable and predictable.',
      points: [
        'MongoDB room model with playback and activity state',
        'TTL cleanup for inactive rooms',
        'Versioned playback snapshots with timestamps',
        'Capped chat history and bounded member profile storage',
        'Host authority enforcement for player actions',
        'Source inspection and compatibility endpoints',
      ],
    },
  ],
  technicalArchitecture: [
    {
      title: 'Next.js client product',
      summary:
        'The UI is built as a client-heavy realtime product with a create-room flow, join-room flow, fullscreen behavior, and collaboration-first room layout.',
      items: ['Next.js', 'React 19', 'TypeScript', 'app router', 'responsive dark UI'],
    },
    {
      title: 'Player abstraction layer',
      summary:
        'A universal player interface routes YouTube, direct media, HLS, Streamable, and iframe-like sources through the right playback implementation while exposing a consistent control API.',
      items: ['ReactPlayer', 'react-youtube', 'HLS handling', 'player control abstraction', 'quality control'],
    },
    {
      title: 'Realtime room sync',
      summary:
        'Room playback behavior is coordinated through Socket.IO messages, versioned state snapshots, drift thresholds, and explicit recovery sync requests.',
      items: ['Socket.IO', 'state versioning', 'sync requests', 'drift handling', 'host authority'],
    },
    {
      title: 'Persistence and lifecycle',
      summary:
        'MongoDB stores room state, chat, and member profiles, while TTL expiry keeps temporary collaboration rooms from becoming permanent clutter.',
      items: ['MongoDB', 'Mongoose', 'TTL index', 'room activity timestamps', 'bounded history'],
    },
    {
      title: 'Voice communication',
      summary:
        'WebRTC voice is layered on top of socket signalling so participants can speak inside the room without relying on third-party meeting software.',
      items: ['WebRTC', 'SimplePeer', 'STUN/TURN-assisted signalling', 'mic controls', 'speaker controls'],
    },
    {
      title: 'Source compatibility and validation',
      summary:
        'The backend helps evaluate remote media responses so users are warned about unsupported HTML previews, blocked downloads, or non-streamable content before a broken room is created.',
      items: ['source parsing', 'content-type inspection', 'link normalization', 'fallback URL strategy', 'proxy-compatible playback'],
    },
  ],
  sourceSystems: [
    'YouTube detection with quality-aware embedded playback',
    'Google Drive link extraction, direct-url conversion, and fallback URLs',
    'Direct MP4, WebM, MOV, MKV-style link recognition',
    'HLS stream handling for `.m3u8` media',
    'Streamable and generic embed detection for iframe playback',
    'Pre-room compatibility inspection to prevent obviously broken sources',
  ],
  realtimeSystems: [
    'Socket.IO room join, leave, and participant presence events',
    'Host-only shared playback control enforcement',
    'Versioned player snapshots with timestamps and updated-by markers',
    'Drift-aware sync rules plus explicit request-sync recovery',
    'Realtime guest join notifications and room population awareness',
    'Live emoji reactions and chat events across active participants',
  ],
  collaborationSystems: [
    'Realtime chat with replayed room history on join',
    'Emoji reaction bursts for lightweight social feedback',
    'WebRTC voice room with participant discovery through sockets',
    'Mic mute and speaker mute controls inside the same room UI',
    'Fullscreen floating chat overlay for immersive watching',
    'Local identity persistence so users rejoin rooms more smoothly',
  ],
  soloOwnership: [
    'Room creation flow, source parsing, and media compatibility decisions',
    'Socket.IO playback sync rules and authority enforcement',
    'WebRTC voice integration and participant signalling flow',
    'MongoDB room model, TTL cleanup, and capped history design',
    'Universal player abstraction across multiple source types',
    'Dark streaming-style product UI and responsive room experience',
  ],
  technologyList: [
    'Next.js',
    'React 19',
    'TypeScript',
    'Node.js',
    'Express.js',
    'MongoDB',
    'Mongoose',
    'Socket.IO',
    'WebRTC',
    'SimplePeer',
    'ReactPlayer',
    'react-youtube',
    'HLS-compatible playback',
    'Link parsing and source validation',
    'Realtime chat and emoji reactions',
    'TTL room expiry',
  ],
};
