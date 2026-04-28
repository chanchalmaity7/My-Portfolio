export const aaspasSmartBoxCaseStudy = {
  title: 'AasPas Smart Box',
  subtitle: 'IoT smart switch platform with ESP32 firmware, cloud backend, mobile app, and web dashboard',
  shortDescription:
    'A connected smart-switch system that links ESP32 hardware, a cloud backend, a web dashboard, and a mobile app for realtime relay control, scheduling, timer automation, energy tracking, and device recovery.',
  longDescription:
    'AasPas Smart Box is a full-stack IoT control platform built around real household automation. It combines ESP32 firmware, a Node.js backend, MongoDB persistence, Socket.IO realtime state, a Next.js web dashboard, and an Expo-based mobile app. The system supports device claiming, relay control, per-relay timers, daily and one-time schedules, energy tracking, device presence monitoring, power-loss recovery, and fallback behavior when realtime transport drops.',
  soloNarrative:
    'This platform was built end to end by me across firmware-facing API design, device authentication, backend automation, web dashboard UX, mobile control flows, energy logic, and power-recovery behavior.',
  assets: {
    icon: '/smart-box/icon.png',
    splash: '/smart-box/splash.png',
    phonePreview: '/smart-box/showcase/dashboard.jpeg',
    heroPreview: '/smart-box/showcase/device-control.jpeg',
  },
  showcaseGallery: [
    {
      title: 'Device dashboard',
      src: '/smart-box/showcase/dashboard.jpeg',
      caption:
        'The dashboard gives the user a quick operational view of device count, online status, relay summary, and the connected Smart Box overview.',
    },
    {
      title: 'Smart-device onboarding',
      src: '/smart-box/showcase/add-device.jpeg',
      caption:
        'Device claiming is designed as a real onboarding flow where users link a Smart Box by device ID and follow setup instructions instead of dealing with raw hardware steps alone.',
    },
    {
      title: 'Relay control surface',
      src: '/smart-box/showcase/device-control.jpeg',
      caption:
        'The control screen shows independent relay state, on and off actions, live status, relay-level runtime and cost indicators, and direct access to timers and schedules.',
    },
    {
      title: 'Schedule automation modal',
      src: '/smart-box/showcase/schedule-modal.jpeg',
      caption:
        'Daily and one-time automation are exposed through a clean mobile scheduling UI so household automation feels practical rather than hidden behind backend-only logic.',
    },
    {
      title: 'Energy usage analytics',
      src: '/smart-box/showcase/energy-details.jpeg',
      caption:
        'Relay-level runtime, units, and rupee cost are surfaced across today, yesterday, month, and lifetime views to make the product useful for monitoring as well as control.',
    },
  ],
  heroMetrics: [
    { value: 'ESP32 + cloud', label: 'Connected hardware platform with software control surfaces' },
    { value: '3-channel control', label: 'Independent relay automation for real household use cases' },
    { value: 'Mobile + web', label: 'Expo mobile app and Next.js dashboard for multi-surface control' },
    { value: 'Realtime + fallback', label: 'Socket.IO live updates with HTTP fallback and heartbeat logic' },
    { value: 'Energy aware', label: 'Per-relay watt, unit, cost, and monthly overview calculations' },
    { value: 'Recovery built in', label: 'Power-loss pause/resume logic and outage-aware state restoration' },
  ],
  homeProofBlocks: [
    {
      title: 'Hardware-to-cloud control path',
      detail:
        'The system is not just UI. ESP32 devices, cloud APIs, realtime sockets, MongoDB state, and user-facing apps all stay connected through one control pipeline.',
    },
    {
      title: 'Automation engine per relay',
      detail:
        'Each relay supports its own timer, daily schedule, one-time schedule, and independent control state instead of a single device-wide toggle.',
    },
    {
      title: 'Energy and cost intelligence',
      detail:
        'The product tracks wattage, runtime, units, cost, monthly summaries, and relay-level energy history so the switch behaves like an analytical home-automation product.',
    },
    {
      title: 'Resilience under real conditions',
      detail:
        'Heartbeat monitoring, offline detection, power-loss pause/resume, HTTP fallback, and outage history make it much more robust than a hobby-only IoT demo.',
    },
  ],
  keySystems: [
    {
      title: 'Device ownership and control',
      description:
        'Users sign up, claim devices by ID, manage multiple Smart Boxes, and control only the hardware they own through authenticated APIs and device-aware realtime subscriptions.',
    },
    {
      title: 'Relay automation',
      description:
        'Three separate relays can be controlled independently with immediate toggle, timer automation, daily schedules, and one-time schedules for household devices like lights, fans, and pumps.',
    },
    {
      title: 'Realtime device presence',
      description:
        'Device and user clients maintain Socket.IO connections with heartbeat acknowledgements, room-based updates, and online/offline state transitions backed by server-side presence handling.',
    },
    {
      title: 'Energy intelligence',
      description:
        'Per-relay energy configuration tracks watts, runtime, unit consumption, cost, daily history, monthly usage, and all-time overview with user-facing analytics.',
    },
    {
      title: 'Power-loss recovery',
      description:
        'When household power fails, timers pause, energy tracking stops, outage history is recorded, and the system resumes intelligently when the device reconnects.',
    },
    {
      title: 'Cross-surface product delivery',
      description:
        'The platform includes firmware-compatible APIs, a Next.js dashboard, an Expo mobile app, and backend automation logic, making it a real multi-surface IoT product.',
    },
  ],
  platformSurfaces: [
    {
      title: 'ESP32 device layer',
      tone: 'Embedded device identity and control',
      summary:
        'The hardware surface is designed around real device identity, network uncertainty, and relay-by-relay control rather than a basic serial demo.',
      points: [
        'Unique device IDs derived from hardware identity',
        'Three independent relay states for light, fan, and water-pump style use cases',
        'Captive-portal style WiFi setup for first-time configuration',
        'Socket.IO realtime connection with heartbeat signalling',
        'HTTP polling fallback if realtime transport drops',
        'Registration and cloud synchronization through backend endpoints',
      ],
    },
    {
      title: 'Mobile app',
      tone: 'Control on the go',
      summary:
        'The mobile product gives users a polished handheld control surface for automation, device status, and energy visibility.',
      points: [
        'Login, registration, and secure device ownership flows',
        'Multi-device overview with online, offline, and relay activity status',
        'Detailed device-control screen with animated relay cards',
        'Timer, schedule, energy setup, and energy details modals',
        'Monthly energy overview and per-relay breakdown screens',
        'Power-loss warning and device-offline feedback for real-world reliability',
      ],
    },
    {
      title: 'Web dashboard',
      tone: 'Desktop monitoring and administration',
      summary:
        'The Next.js dashboard provides another surface for login, device claiming, status monitoring, and relay automation from desktop browsers.',
      points: [
        'Authentication and account entry flow',
        'Device list with online state and relay activity overview',
        'Add-device modal for claiming a Smart Box by device ID',
        'Device-control page with timer and schedule modals',
        'Realtime status syncing through Socket.IO',
        'Responsive layout for practical web-based device management',
      ],
    },
    {
      title: 'Backend and automation cloud',
      tone: 'State, security, and recovery engine',
      summary:
        'The backend is where the system becomes production-like: ownership validation, device routing, timers, schedules, heartbeats, and energy correctness all live here.',
      points: [
        'JWT auth and user-based device ownership enforcement',
        'Socket authentication for users and ESP32 devices',
        'Timer creation, pause, resume, and expiry handling',
        'Daily and one-time schedule execution per relay',
        'Device-presence tracking, outage history, and last-seen state',
        'MongoDB-backed persistence for control, energy, and recovery data',
      ],
    },
  ],
  technicalArchitecture: [
    {
      title: 'Hardware and firmware interface',
      summary:
        'The embedded side is shaped around device identity, WiFi setup, cloud communication, and relay-oriented control, not just local switching.',
      items: ['ESP32 firmware', 'device ID generation', 'captured WiFi setup flow', 'relay control mapping', 'HTTP fallback'],
    },
    {
      title: 'Cloud backend',
      summary:
        'Backend services handle auth, device ownership, relay commands, timer and schedule automation, presence management, and persistence.',
      items: ['Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'JWT auth', 'automation routes'],
    },
    {
      title: 'Realtime layer',
      summary:
        'Socket.IO synchronizes device and user clients while heartbeat acknowledgements help the platform understand connectivity and offline transitions.',
      items: ['Socket.IO', 'device subscriptions', 'user rooms', 'heartbeat ack', 'presence tracking'],
    },
    {
      title: 'Web dashboard',
      summary:
        'The browser dashboard provides desktop-friendly device management and automation setup with a clean operational surface.',
      items: ['Next.js', 'React', 'Tailwind CSS', 'socket.io-client', 'responsive dashboard'],
    },
    {
      title: 'Mobile control app',
      summary:
        'The mobile app brings the same control and monitoring flow into a handheld format with richer device cards and energy-specific views.',
      items: ['Expo', 'React Native', 'React Navigation', 'AsyncStorage', 'reanimated UX'],
    },
    {
      title: 'Energy and recovery logic',
      summary:
        'Device analytics and resilience behavior make the product significantly deeper than a basic on-off switch.',
      items: ['runtime tracking', 'cost calculation', 'monthly history', 'power-loss pause/resume', 'outage logs'],
    },
  ],
  automationSystems: [
    'Per-relay timer automation instead of device-wide only timers',
    'Daily schedules and one-time schedules for each relay independently',
    'Automatic ON/OFF execution driven by backend automation logic',
    'Timer pause and resume behavior when relay state changes or power fails',
    'Schedule persistence in MongoDB so automation survives reconnects and app restarts',
    'Realtime status emission so apps see automation changes immediately',
  ],
  energySystems: [
    'Wattage and unit-rate configuration per relay',
    'Today, yesterday, monthly, and all-time runtime calculations',
    'Unit and rupee cost estimation for each configured relay',
    'Monthly overview screen aggregating multiple relays into one device-level summary',
    'Relay-level energy details with breakdown and reset support',
    'Energy tracking pause and resume logic tied to actual device availability',
  ],
  resilienceSystems: [
    'Device heartbeat monitoring with offline timeout handling',
    'Socket disconnect and reconnect awareness for both users and ESP32 hardware',
    'HTTP polling fallback when direct realtime transport is unavailable',
    'Power-loss detection that pauses timers and energy computation instead of producing false data',
    'Power restoration logic that resumes timer and energy state correctly',
    'Outage history storage for reliability insight and retrospective visibility',
  ],
  securitySystems: [
    'JWT-authenticated user access for device control routes',
    'Device ownership validation so only the claimed user can control a Smart Box',
    'Socket authentication for both user and device clients',
    'Device registration and identity checks tied to device IDs and MAC-aware matching',
    'Protected API routes for toggles, timers, schedules, and energy setup',
    'Separation between device-facing endpoints and user-facing control flows',
  ],
  soloOwnership: [
    'Backend API and data-model design for device state, timers, schedules, and energy tracking',
    'Realtime Socket.IO architecture for user clients and ESP32 devices',
    'JWT auth, user-device ownership, and secure control routes',
    'Next.js dashboard experience for device management and automation setup',
    'Expo mobile app flows for device control, energy analytics, and offline feedback',
    'Reliability logic for power-loss handling, offline detection, and recovery behavior',
  ],
  technologyList: [
    'ESP32',
    'Arduino-style firmware',
    'Node.js',
    'Express.js',
    'MongoDB',
    'Mongoose',
    'Socket.IO',
    'JWT authentication',
    'Next.js',
    'React',
    'Tailwind CSS',
    'Expo',
    'React Native',
    'AsyncStorage',
    'React Navigation',
    'Render deployment',
    'HTTP polling fallback',
    'Energy analytics',
    'Timer and schedule automation',
    'Power-loss recovery logic',
  ],
};
