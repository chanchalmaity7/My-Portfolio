export const LIZZ_SHOP_LIVE_URL = 'https://lizz-shop.vercel.app/';

export const lizzShopProjectCaseStudy = {
  title: 'Lizz-Shop',
  subtitle: 'Full-stack retail commerce platform with JWT sessions, cart and wishlist persistence, merchandising bands, and variant-aware browsing',
  shortDescription:
    'A modern commerce site that combines a Next.js storefront with backend APIs, cookie-based sessions, MongoDB user state, variant-aware product browsing, and persistent shopping behavior.',
  longDescription:
    'Lizz-Shop is a full-stack e-commerce platform built with a dedicated web frontend and backend service architecture. The storefront covers product discovery, category browsing, search, detailed product pages, size and color variants, wishlists, carts, and user account behavior. The backend uses Node.js, Express, MongoDB, Mongoose, JWT-based auth, and cookies to maintain user-specific cart and wishlist state. On top of core shopping behavior, the project includes merchandising sections such as new arrivals, trending products, and BOGO-oriented presentation, which makes it feel closer to a real retail storefront than a catalog demo.',
  soloNarrative:
    'I built Lizz-Shop as a practical commerce system focused on shopping-state correctness, user-specific persistence, variant-aware product behavior, and a storefront experience that feels more real than a static template.',
  assets: {
    poster: '/project/Lizz-Shop.png',
  },
  heroMetrics: [
    { value: 'Split frontend and backend', label: 'Next.js storefront and Express-backed APIs show full-stack separation instead of a frontend-only build' },
    { value: 'JWT plus cookies', label: 'Authenticated user sessions are persisted through protected flows instead of local-only temporary state' },
    { value: 'Cart and wishlist persistence', label: 'Shopping intent is stored per user in MongoDB-backed models rather than lost on refresh' },
    { value: 'Variant-aware products', label: 'Size and color options are part of the product detail flow, which adds realism to the shopping experience' },
    { value: 'Merchandising sections', label: 'New arrivals, trending, and BOGO APIs make the storefront feel curated and commercially structured' },
    { value: 'Search and category browsing', label: 'Discovery behavior is broader than a single landing page with fixed products' },
  ],
  homeProofBlocks: [
    {
      title: 'Shopping-state depth',
      detail:
        'Wishlists, carts, cookie-authenticated sessions, and MongoDB user state make the product stronger than a purely visual store mockup.',
    },
    {
      title: 'Variant-aware browsing',
      detail:
        'Product detail pages handle size and color selections so the purchase flow feels closer to real retail behavior.',
    },
    {
      title: 'Merchandising logic',
      detail:
        'New arrivals, trending sections, and BOGO-oriented APIs show that the project includes merchandising thinking, not only CRUD data rendering.',
    },
    {
      title: 'Full-stack separation',
      detail:
        'A dedicated backend service with JWT and cookies proves this is structured more like an actual application stack than a frontend-only prototype.',
    },
  ],
  keySystems: [
    {
      title: 'Product discovery',
      description:
        'Customers can browse categories, search for products, inspect collections, and move through merchandising-led storefront sections instead of only a single static catalog page.',
    },
    {
      title: 'Variant and detail handling',
      description:
        'Product pages support variant-style choices such as size and color, helping the store behave more like an actual fashion or retail shopping experience.',
    },
    {
      title: 'Authenticated shopping state',
      description:
        'JWT-backed sessions and cookies connect the frontend to user-specific cart and wishlist data, which gives continuity across visits and refreshes.',
    },
    {
      title: 'Wishlist and cart persistence',
      description:
        'User intent is stored in backend models so saved products and cart contents are not limited to local browser state alone.',
    },
    {
      title: 'Merchandising API surface',
      description:
        'Dedicated flows for trending items, new arrivals, and BOGO-style content help the storefront feel curated and commercially planned.',
    },
    {
      title: 'Retail-ready interface quality',
      description:
        'Responsive catalog layout, search, product detail presentation, and multi-step browsing flow make the site feel usable as a real customer-facing storefront.',
    },
  ],
  technicalArchitecture: [
    {
      title: 'Storefront frontend',
      summary:
        'The customer-facing experience is built with Next.js and TypeScript, covering category routes, product pages, search, auth screens, and shopping-state views.',
      items: ['Next.js 15', 'TypeScript', 'React', 'Tailwind CSS', 'search UI', 'category routing'],
    },
    {
      title: 'Backend service layer',
      summary:
        'A separate Node.js and Express layer handles auth, user data, cart updates, wishlist operations, and health checks.',
      items: ['Node.js', 'Express.js', 'JWT', 'cookies', 'Axios', 'REST APIs'],
    },
    {
      title: 'Persistence and models',
      summary:
        'MongoDB and Mongoose store products, user accounts, carts, and wishlists so shopping state has a real database-backed source of truth.',
      items: ['MongoDB Atlas', 'Mongoose', 'product model', 'user model', 'cart persistence', 'wishlist persistence'],
    },
    {
      title: 'Retail experience systems',
      summary:
        'The app includes merchandising sections, variant selections, and browsing structure that make it feel more like a living store than a plain data grid.',
      items: ['new arrivals', 'trending', 'BOGO', 'size options', 'color options', 'responsive product layout'],
    },
  ],
  soloOwnership: [
    'Frontend storefront architecture for search, categories, product detail, cart, wishlist, and auth flows',
    'Backend API design with Express, JWT auth, cookies, and user-specific data operations',
    'MongoDB and Mongoose modeling for products, users, carts, and wishlists',
    'Retail-oriented product detail behavior including size and color variant selection',
    'Merchandising-led presentation for new arrivals, trending items, and BOGO sections',
    'Responsive UI and state management for a realistic multi-step shopping experience',
  ],
  technologyList: [
    'Next.js 15',
    'TypeScript',
    'React',
    'Node.js',
    'Express.js',
    'MongoDB Atlas',
    'Mongoose',
    'JWT',
    'cookies-next',
    'Axios',
    'Tailwind CSS',
    'wishlist persistence',
    'cart persistence',
    'variant-aware product pages',
  ],
};
