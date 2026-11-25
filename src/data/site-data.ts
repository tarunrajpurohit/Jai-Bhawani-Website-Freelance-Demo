export interface NavLinkItem {
  label: string;
  href: string;
  external?: boolean;
}

export const NAV_LINKS: NavLinkItem[] = [
  { label: "Menu", href: "#menu" },
  { label: "USA Locations", href: "#store-locator" },
  { label: "Our Story", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Catering", href: "#catering" },
  { label: "Franchise USA", href: "#franchise" },
  { label: "Contact", href: "#contact" },
];

export interface HeroFoodItem {
  id: string;
  name: string;
  tag: string;
  description: string;
  image: string;
  video?: string;
}

export interface HeroShowcaseSlide {
  id: string;
  tabLabel: string;
  mediaType: "video" | "image";
  videoSrc?: string;
  posterSrc: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  ctaLabel: string;
  ctaHref: string;
  foods: HeroFoodItem[];
}

export const HERO_SHOWCASE_SLIDES: HeroShowcaseSlide[] = [
  {
    id: "street-classics",
    tabLabel: "01. Street Classics (Video)",
    mediaType: "video",
    videoSrc: "/assets/videos/food-1.mp4",
    posterSrc: "/assets/img/jaybhavani-main-banner-1.jpg",
    eyebrow: "AUTHENTIC INDIAN STREET FOOD • USA",
    title: "VADAPAV BOLE TO JAY BHAVANI",
    subtitle:
      "Freshly fried batata vada, signature garlic & tamarind chutneys, and toasted pav — crafted live across our U.S. kitchens.",
    ctaLabel: "Explore Menu",
    ctaHref: "#menu",
    foods: [
      {
        id: "vadapav",
        name: "Classic & Cheese Vadapav",
        tag: "USA #1 Best Seller",
        description:
          "Crispy spiced potato patty tucked into butter-toasted pav with fiery red garlic chutney.",
        image: "/assets/img/food-menu/vadapav.png",
        video: "/assets/videos/food-1.mp4",
      },
      {
        id: "dabeli",
        name: "Kutchi Butter Dabeli",
        tag: "Sweet & Spicy",
        description:
          "Roasted peanuts, pomegranate pearls, sev, and authentic Kutchi masala grilled in butter.",
        image: "/assets/img/food-menu/dabeli.png",
        video: "/assets/videos/food-2.mp4",
      },
      {
        id: "puff",
        name: "Chinese & Paneer Puff",
        tag: "Baked Fresh",
        description:
          "Flaky golden puff pastry stuffed with smoky Indo-Chinese veggies or spiced paneer.",
        image: "/assets/img/food-menu/puff.png",
        video: "/assets/videos/food-3.mp4",
      },
    ],
  },
  {
    id: "tawa-specials",
    tabLabel: "02. Tawa & Sandwiches (Photo)",
    mediaType: "image",
    posterSrc: "/assets/img/jaybhavani-main-banner-2.jpg",
    eyebrow: "SIZZLING TAWA SPECIALTIES • USA",
    title: "BOMBAY GRILLS & BHAJI PAV",
    subtitle:
      "Loaded triple-layer club sandwiches, buttery Bhaji Pav, and soft Amul Maska Buns served piping hot.",
    ctaLabel: "Find USA Store",
    ctaHref: "#store-locator",
    foods: [
      {
        id: "bhaji-pav",
        name: "Amul Butter Bhaji Pav",
        tag: "Chef's Signature",
        description:
          "Rich, slow-simmered vegetable bhaji topped with melting butter and pillowy toasted pav.",
        image: "/assets/img/food-menu/bhaji-pav.png",
      },
      {
        id: "sandwich",
        name: "Bombay Grilled Sandwich",
        tag: "3-Layer Crunch",
        description:
          "Mint chutney, spiced potato, crisp veggies, and melted cheese grilled to golden perfection.",
        image: "/assets/img/food-menu/sandwich.png",
      },
      {
        id: "maskabun",
        name: "Classic Maska Bun",
        tag: "Chai Partner",
        description:
          "Soft sweet bun generously slathered with whipped butter and house spice blend.",
        image: "/assets/img/food-menu/maskabun.png",
      },
    ],
  },
  {
    id: "global-feast",
    tabLabel: "03. Dosas & Shakes (Video)",
    mediaType: "video",
    videoSrc: "/assets/videos/food-2.mp4",
    posterSrc: "/assets/img/jaybhavani-main-banner-3.jpg",
    eyebrow: "ALL-DAY CRAVINGS • USA",
    title: "DOSAS, PULAV & SHAKES",
    subtitle:
      "From crispy South Indian dosas and wok-tossed Indo-Chinese to thick mango & chocolate shakes.",
    ctaLabel: "Explore Menu",
    ctaHref: "#menu",
    foods: [
      {
        id: "south-indian",
        name: "Crispy Masala Dosa",
        tag: "Made to Order",
        description:
          "Paper-thin fermented crepe served with aromatic sambar and fresh coconut chutney.",
        image: "/assets/img/food-menu/south-indian.png",
        video: "/assets/videos/food-2.mp4",
      },
      {
        id: "pulav",
        name: "Tawa Paneer Pulav",
        tag: "Street Style",
        description:
          "Fragrant basmati rice tossed on a hot tawa with roasted spices, peas, and paneer.",
        image: "/assets/img/food-menu/pulav.png",
        video: "/assets/videos/food-3.mp4",
      },
      {
        id: "milkshake",
        name: "Thick Mango & Choco Shakes",
        tag: "Cool & Creamy",
        description:
          "Rich, decadent milkshakes and fresh-pressed juices to pair with your spicy favorites.",
        image: "/assets/img/food-menu/milkshake.png",
        video: "/assets/videos/food-1.mp4",
      },
    ],
  },
];

export const MENU_CATEGORIES = [
  {
    title: "Vadapav",
    badge: "Iconic #1",
    description:
      "Our signature spiced potato vada fried crisp and tucked into butter-toasted pav with fiery garlic & tamarind chutneys.",
    href: "#store-locator",
    image: "/assets/img/food-menu/vadapav.png",
  },
  {
    title: "Dabeli",
    badge: "Fan Favorite",
    description:
      "Sweet, tangy, and spicy Kutchi potato mash layered with roasted peanuts, pomegranate pearls, and crispy sev.",
    href: "#store-locator",
    image: "/assets/img/food-menu/dabeli.png",
  },
  {
    title: "Chinese and paneer puff",
    badge: "Fresh Baked",
    description:
      "Flaky, golden-baked puff pastry generously stuffed with smoky Indo-Chinese veggies or spiced paneer.",
    href: "#store-locator",
    image: "/assets/img/food-menu/puff.png",
  },
  {
    title: "Sandwich",
    badge: "Grilled",
    description:
      "Triple-layer Bombay-style grilled sandwiches loaded with mint chutney, crisp veggies, and melted cheese.",
    href: "#store-locator",
    image: "/assets/img/food-menu/sandwich.png",
  },
  {
    title: "Maska Bun",
    badge: "Classic",
    description:
      "Soft, pillowy sweet bun generously slathered with whipped butter and house masala — the ultimate chai partner.",
    href: "#store-locator",
    image: "/assets/img/food-menu/maskabun.png",
  },
  {
    title: "South Indian",
    badge: "Crispy Dosa",
    description:
      "Paper-thin, golden fermented dosas and uttapams served piping hot with aromatic sambar and coconut chutney.",
    href: "#store-locator",
    image: "/assets/img/food-menu/south-indian.png",
  },
  {
    title: "Bhaji Pav",
    badge: "Amul Butter",
    description:
      "Slow-simmered spiced vegetable bhaji finished with melting Amul butter, served alongside toasted pav.",
    href: "#store-locator",
    image: "/assets/img/food-menu/bhaji-pav.png",
  },
  {
    title: "Pulav",
    badge: "Tawa Special",
    description:
      "Fragrant basmati rice tossed live on a sizzling iron tawa with roasted spices, crisp veggies, and paneer.",
    href: "#store-locator",
    image: "/assets/img/food-menu/pulav.png",
  },
  {
    title: "Chinese",
    badge: "Wok Tossed",
    description:
      "Bold, fiery street-style Indo-Chinese Manchurian, Hakka noodles, and Schezwan favorites.",
    href: "#store-locator",
    image: "/assets/img/food-menu/chinese.png",
  },
  {
    title: "French Fries",
    badge: "Masala",
    description:
      "Golden, extra-crispy fries dusted with our signature tangy Indian street masala.",
    href: "#store-locator",
    image: "/assets/img/food-menu/french-fries.png",
  },
  {
    title: "Milkshakes",
    badge: "Thick & Cold",
    description:
      "Rich, creamy Alphonso mango, Belgian chocolate, and classic shakes blended thick to order.",
    href: "#store-locator",
    image: "/assets/img/food-menu/milkshake.png",
  },
  {
    title: "Fresh Juice",
    badge: "Natural",
    description:
      "Refreshing, freshly pressed fruit juices and coolers crafted to balance every spicy bite.",
    href: "#store-locator",
    image: "/assets/img/food-menu/fruit-juice.png",
  },
];

export interface UsaStoreLocation {
  city: string;
  state: string;
  region: "East" | "South" | "Midwest & West";
  status: string;
  orderUrl?: string;
}

export const USA_LOCATIONS: UsaStoreLocation[] = [
  {
    city: "Suwanee",
    state: "Georgia (GA)",
    region: "South",
    status: "Online Ordering Live",
    orderUrl:
      "https://order.toasttab.com/online/jay-bhavani-suwanee-indian-street-food-3230-caliber-st-a-104",
  },
  {
    city: "Decatur",
    state: "Georgia (GA)",
    region: "South",
    status: "Dine-In & Takeout",
  },
  {
    city: "Tampa",
    state: "Florida (FL)",
    region: "South",
    status: "Dine-In & Takeout",
  },
  {
    city: "Houston",
    state: "Texas (TX)",
    region: "South",
    status: "Dine-In & Takeout",
  },
  {
    city: "Edison",
    state: "New Jersey (NJ)",
    region: "East",
    status: "Dine-In & Takeout",
  },
  {
    city: "Hoffman Estates",
    state: "Illinois (IL)",
    region: "Midwest & West",
    status: "Dine-In & Takeout",
  },
  {
    city: "Bakersfield",
    state: "California (CA)",
    region: "Midwest & West",
    status: "Dine-In & Takeout",
  },
];

export const COMMUNITY_PHOTOS = [
  {
    id: 1,
    src: "/assets/img/jbv-1.png",
    alt: "Signature Vadapav Platter",
    caption: "Crispy Batata Vadapav",
    gridClass: "md:col-start-1 md:col-end-4 md:row-start-1 md:row-end-4",
  },
  {
    id: 2,
    src: "/assets/img/jbv-2.png",
    alt: "Butter Kutchi Dabeli",
    caption: "Kutchi Butter Dabeli",
    gridClass: "md:col-start-4 md:col-end-6 md:row-start-1 md:row-end-4 md:pt-6",
  },
  {
    id: 3,
    src: "/assets/img/jbv-3.png",
    alt: "Street Food Feast",
    caption: "Mumbai Street Favorites",
    gridClass:
      "md:col-start-6 md:col-end-9 md:row-start-1 md:row-end-5 md:pt-14",
  },
  {
    id: 4,
    src: "/assets/img/jbv-4.png",
    alt: "Grilled Bombay Sandwich",
    caption: "Grilled Club Sandwich",
    gridClass: "md:col-start-9 md:col-end-11 md:row-start-1 md:row-end-4",
  },
  {
    id: 5,
    src: "/assets/img/jbv-5.png",
    alt: "Hot Bhaji Pav",
    caption: "Amul Butter Bhaji Pav",
    gridClass: "md:col-start-1 md:col-end-3 md:row-start-4 md:row-end-6 md:pl-12",
  },
  {
    id: 6,
    src: "/assets/img/jbv-6.png",
    alt: "Crispy Masala Dosa",
    caption: "South Indian Dosa",
    gridClass: "md:col-start-3 md:col-end-6 md:row-start-4 md:row-end-7",
  },
  {
    id: 7,
    src: "/assets/img/jbv-7.png",
    alt: "Indo-Chinese Street Bowl",
    caption: "Wok-Tossed Chinese",
    gridClass: "md:col-start-6 md:col-end-9 md:row-start-5 md:row-end-7 md:pb-10",
  },
  {
    id: 8,
    src: "/assets/img/jbv-8.png",
    alt: "Thick Shakes and Coolers",
    caption: "Signature Shakes",
    gridClass:
      "md:col-start-9 md:col-end-11 md:row-start-4 md:row-end-7 md:pr-10 md:pb-5",
  },
];

export const USP_ITEMS = [
  {
    title: "Irresistible Taste",
    description:
      "Blending spices and flavors that keep you coming back for more and more",
    icon: "/assets/img/jb-icon/1.png",
  },
  {
    title: "Crispy, Hot, and Fresh",
    description:
      "Everything we serve is made fresh, crispy on the outside, and hot to perfection inside",
    icon: "/assets/img/jb-icon/2.png",
  },
  {
    title: "Spicy Surprises",
    description:
      "Our signature chutneys add an extra zing, making every bite a burst of flavor",
    icon: "/assets/img/jb-icon/3.png",
  },
  {
    title: "A Feast for All Tastes",
    description:
      "From vada pav to dosa, sandwiches to chocolate shakes, we’ve got something to satisfy every craving!",
    icon: "/assets/img/jb-icon/4.png",
  },
];

export interface OnlineOrderCountry {
  id: string;
  country: string;
  flag: string;
  cities: { name: string; href: string }[];
}

export const ONLINE_ORDER_COUNTRIES: OnlineOrderCountry[] = [
  {
    id: "usa",
    country: "USA",
    flag: "/assets/img/united-states-flag.png",
    cities: [
      {
        name: "Suwanee, GA",
        href: "https://order.toasttab.com/online/jay-bhavani-suwanee-indian-street-food-3230-caliber-st-a-104",
      },
      { name: "Edison, NJ", href: "#store-locator" },
      { name: "Decatur, GA", href: "#store-locator" },
      { name: "Hoffman Estates, IL", href: "#store-locator" },
      { name: "Houston, TX", href: "#store-locator" },
      { name: "Bakersfield, CA", href: "#store-locator" },
      { name: "Tampa, FL", href: "#store-locator" },
    ],
  },
  {
    id: "canada",
    country: "Canada",
    flag: "/assets/img/canada-flag.png",
    cities: [
      { name: "Scarborough", href: "#store-locator" },
      { name: "London", href: "#store-locator" },
      { name: "Etobicoke", href: "#store-locator" },
      { name: "Kitchener", href: "#store-locator" },
      { name: "Oshawa", href: "#store-locator" },
      { name: "Windsor", href: "#store-locator" },
      { name: "Montreal", href: "#store-locator" },
      { name: "Hamilton", href: "#store-locator" },
    ],
  },
  {
    id: "australia",
    country: "Australia",
    flag: "/assets/img/austalia_flag.png",
    cities: [
      { name: "Gungahlin", href: "https://jaybhavani.com.au/gungahlin/" },
      { name: "Clayton", href: "https://jaybhavani.com.au/clayton/" },
      { name: "Brisbane", href: "https://jaybhavani.com.au/brisbane/" },
      { name: "Adelaide", href: "https://jaybhavani.com.au/adelaide/" },
      { name: "Sydney", href: "https://jaybhavani.com.au/riverstone/" },
    ],
  },
];

export const FOOTER_QUICK_LINKS = [
  { label: "Menu", href: "#menu" },
  { label: "USA Locations", href: "#store-locator" },
  { label: "Our Story", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Catering", href: "#catering" },
  { label: "Franchise USA", href: "#franchise" },
];
