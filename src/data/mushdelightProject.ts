export const MUSHDELIGHT_LIVE_URL = 'https://mushdelight.vercel.app/';

export const mushdelightProjectCaseStudy = {
  title: 'Mushdelight',
  subtitle: 'Premium food commerce system with customer auth, order lifecycle, reviews, subscribers, and admin operations',
  shortDescription:
    'A polished food-commerce product built with Next.js, MongoDB, customer authentication, order lifecycle screens, review flows, subscriber communication, and admin-side product management.',
  longDescription:
    'Mushdelight is a premium food-commerce website designed as a complete customer and business system rather than only a storefront landing page. The project includes customer signup and login, OTP verification, forgot and reset password flows, product catalog browsing, cart and checkout screens, order placement, tracking, cancellation handling, product reviews, contact flows, subscriber capture, and admin-side product operations. Under the hood it uses Next.js, React 19, MongoDB, Mongoose data models, JWT-based auth patterns, Brevo-powered communication flows, and operational APIs for products, settings, reviews, contacts, and customer orders.',
  soloNarrative:
    'I built this as a commerce product with both customer-side polish and business-side usefulness in mind, covering auth, orders, reviews, subscriber communication, admin operations, and database-backed product flows end to end.',
  assets: {
    poster: '/project/Mushdelight.png',
  },
  heroMetrics: [
    { value: 'Customer auth stack', label: 'Signup, login, OTP verification, forgot password, and reset password flows are part of the product' },
    { value: 'Order lifecycle', label: 'Customers can place orders, track them, and interact with order state instead of seeing a static checkout only' },
    { value: 'Mongo-backed catalog', label: 'Products, reviews, carts, settings, contacts, subscribers, and orders are modeled in the backend' },
    { value: 'Brevo communication', label: 'Transactional and subscriber communication make the project more business-ready than a frontend-only demo' },
    { value: 'Admin operations', label: 'Product management, reorder handling, and settings flows add an operational surface behind the storefront' },
    { value: 'Brand-first commerce UX', label: 'The interface is designed to feel premium, conversion-focused, and commercially presentable' },
  ],
  homeProofBlocks: [
    {
      title: 'Commerce beyond a landing page',
      detail:
        'The project connects product discovery, cart, checkout, orders, tracking, cancellation, and reviews into a believable customer commerce loop instead of stopping at a hero section.',
    },
    {
      title: 'Customer account lifecycle',
      detail:
        'Login, signup, OTP verification, forgotten-password recovery, and profile-linked order visibility give the product a fuller account system than many demo storefronts.',
    },
    {
      title: 'Business communication layer',
      detail:
        'Contact submission, subscriber collection, and email-oriented workflows make the website useful for ongoing brand communication as well as order capture.',
    },
    {
      title: 'Operational backend thinking',
      detail:
        'Models and APIs for products, orders, reviews, settings, contacts, and subscribers show backend structure that supports day-to-day business operations.',
    },
  ],
  keySystems: [
    {
      title: 'Customer storefront flow',
      description:
        'The website supports product discovery, product detail exploration, cart building, checkout progression, and order completion as a connected purchase journey.',
    },
    {
      title: 'Authentication and recovery',
      description:
        'Signup, login, OTP verification, forgot password, and reset password screens turn the project into a fuller customer-account product instead of a guest-only demo.',
    },
    {
      title: 'Order management',
      description:
        'Customers can view their orders, inspect status, track progress, and cancel where the flow allows, which makes post-purchase behavior part of the system.',
    },
    {
      title: 'Review and reputation system',
      description:
        'Product reviews and rating-oriented data models add social proof and customer feedback loops to the commerce experience.',
    },
    {
      title: 'Subscriber and contact flows',
      description:
        'Subscriber capture, contact messaging, and email delivery infrastructure make the product more realistic for a brand that wants retention and communication, not only one-time orders.',
    },
    {
      title: 'Admin-side control surface',
      description:
        'Admin APIs for product management, reorder behavior, settings, and protected access prove there is an operations layer behind the public storefront.',
    },
  ],
  technicalArchitecture: [
    {
      title: 'Frontend commerce layer',
      summary:
        'The customer-facing site is built with modern Next.js and React, with route-level flows for auth, cart, checkout, orders, reviews, and profile-connected shopping behavior.',
      items: ['Next.js 15', 'React 19', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'app router'],
    },
    {
      title: 'Backend data and API layer',
      summary:
        'MongoDB-backed APIs support products, orders, carts, reviews, subscribers, contacts, settings, and authenticated customer interactions.',
      items: ['MongoDB', 'Mongoose', 'API routes', 'product model', 'order model', 'review model'],
    },
    {
      title: 'Auth and account flows',
      summary:
        'The product uses JWT-style auth patterns plus OTP and reset-password support so customer access behaves more like a production commerce app.',
      items: ['JWT patterns', 'OTP verification', 'forgot password', 'reset password', 'profile-linked orders'],
    },
    {
      title: 'Communication systems',
      summary:
        'Brand and customer communication is handled through subscriber flows, contact handling, and email infrastructure rather than being left out entirely.',
      items: ['Brevo', 'Nodemailer', 'subscriber APIs', 'contact flow', 'email dispatch'],
    },
  ],
  soloOwnership: [
    'Commerce information architecture for catalog, cart, checkout, and post-purchase experience',
    'MongoDB and Mongoose data modeling for products, orders, reviews, contacts, subscribers, carts, and settings',
    'Authentication, OTP verification, password recovery, and customer-order account flows',
    'Admin-side operational APIs for product control, reorder handling, and settings management',
    'Subscriber and email communication wiring through Brevo and mail-oriented workflows',
    'Premium customer-facing UI direction for a polished food-commerce brand presentation',
  ],
  technologyList: [
    'Next.js 15',
    'React 19',
    'TypeScript',
    'MongoDB',
    'Mongoose',
    'JWT auth patterns',
    'Brevo',
    'Nodemailer',
    'Tailwind CSS',
    'Framer Motion',
    'Order lifecycle UX',
    'Review system',
    'Subscriber workflows',
    'Admin product controls',
  ],
};
