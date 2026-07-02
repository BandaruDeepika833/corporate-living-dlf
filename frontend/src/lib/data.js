// Curated placeholder imagery. Client to replace with own property photos.
// All hosted images (Pexels / Unsplash) – no local assets.

export const IMAGES = {
  heroBuilding:
    "/main.png",
  category: {
    private:
      "https://images.pexels.com/photos/34574606/pexels-photo-34574606.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=1200",
    twin:
      "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=1200",
    common:
      "https://images.unsplash.com/photo-1724582586529-62622e50c0b3?crop=entropy&cs=srgb&fm=jpg&q=85&w=1400",
    dining:
      "https://images.pexels.com/photos/2079246/pexels-photo-2079246.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=1200",
  },
  lifestyle: {
    gym: "https://images.pexels.com/photos/29224211/pexels-photo-29224211.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=1400",
    gaming:
      "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=1400&q=80",
    dining:
      "https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=1400",
    lounge:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1400&q=80",
    laundry:
      "https://images.unsplash.com/photo-1545173168-9f1947eebb7f?auto=format&fit=crop&w=1400&q=80",
    parking:
      "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&w=1400&q=80",
    exterior:
      "https://images.pexels.com/photos/18153132/pexels-photo-18153132.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=1400",
  },
  rooms: {
    private: [
      "https://images.pexels.com/photos/34574606/pexels-photo-34574606.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=1400",
      "https://images.pexels.com/photos/6585598/pexels-photo-6585598.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=1400",
      "https://images.pexels.com/photos/6585757/pexels-photo-6585757.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=1400",
    ],
    twin: [
      "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=1400",
      "https://images.pexels.com/photos/279805/pexels-photo-279805.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=1400",
      "https://images.pexels.com/photos/97083/pexels-photo-97083.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=1400",
    ],
    frontPrivate: [
      "https://images.pexels.com/photos/6585601/pexels-photo-6585601.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=1400",
      "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=1400",
      "https://images.pexels.com/photos/6444/pencil-typography-black-design.jpg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=1400",
    ],
  },
  gallery: [
    { src: "https://images.pexels.com/photos/34574606/pexels-photo-34574606.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=1200", cat: "Private Rooms" },
    { src: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=1200", cat: "Twin Sharing" },
    { src: "https://images.pexels.com/photos/6585598/pexels-photo-6585598.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=1200", cat: "Private Rooms" },
    { src: "https://images.pexels.com/photos/3935350/pexels-photo-3935350.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=1200", cat: "Bathrooms" },
    { src: "https://images.pexels.com/photos/2079246/pexels-photo-2079246.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=1200", cat: "Dining" },
    { src: "https://images.pexels.com/photos/29224211/pexels-photo-29224211.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=1200", cat: "Gym" },
    { src: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=1200&q=80", cat: "Gaming Area" },
    { src: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80", cat: "Common Area" },
    { src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80", cat: "Reception" },
    { src: "https://images.pexels.com/photos/18153132/pexels-photo-18153132.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=1200", cat: "Exterior" },
    { src: "https://images.pexels.com/photos/279805/pexels-photo-279805.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=1200", cat: "Twin Sharing" },
    { src: "https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=1200", cat: "Dining" },
  ],
};

export const PRICING = [
  {
    key: "twin",
    name: "Twin Sharing",
    headline: "Shared comfort, big savings",
    plans: [
      { label: "Without Meals", price: 15000 },
      { label: "2 Meals", price: 19500 },
      { label: "2 Meals + Weekend 3 Meals", price: 20000, featured: true },
      { label: "3 Meals", price: 20500 },
    ],
  },
  {
    key: "private",
    name: "Private Room",
    headline: "Your personal sanctuary",
    plans: [
      { label: "Without Meals", price: 29000 },
      { label: "2 Meals", price: 33500 },
      { label: "2 Meals + Weekend Meals", price: 34000, featured: true },
      { label: "3 Meals", price: 34500 },
    ],
  },
  {
    key: "front",
    name: "Front Side Private",
    headline: "Premium with the best view",
    plans: [
      { label: "Without Meals", price: 30000 },
      { label: "2 Meals", price: 34500 },
      { label: "2 Meals + Weekend Meals", price: 35000, featured: true },
      { label: "3 Meals", price: 35500 },
    ],
  },
];

export const MEAL_PRICING = [
  { meal: "Breakfast", price: 110 },
  { meal: "Lunch", price: 150 },
  { meal: "Dinner", price: 150 },
];

export const WHY_CHOOSE = [
  { icon: "Wifi", title: "High-Speed WiFi" },
  { icon: "Sparkles", title: "Daily Housekeeping" },
  { icon: "Shirt", title: "Laundry" },
  { icon: "ArrowUpDown", title: "Lift" },
  { icon: "ParkingSquare", title: "Parking" },
  { icon: "Zap", title: "Power Backup" },
  { icon: "Dumbbell", title: "Modern Gym" },
  { icon: "Gamepad2", title: "Gaming Zone" },
  { icon: "Droplets", title: "RO Drinking Water" },
  { icon: "Wind", title: "Excellent Ventilation" },
  { icon: "PanelTop", title: "Wide Openable Windows" },
  { icon: "UtensilsCrossed", title: "Home-style Meals" },
  { icon: "ShieldCheck", title: "24x7 Security & CCTV" },
];

export const AMENITIES = [
  { icon: "Dumbbell", title: "Gym" },
  { icon: "Gamepad2", title: "Game Zone" },
  { icon: "Circle", title: "Snooker" },
  { icon: "TableProperties", title: "Table Tennis" },
  { icon: "Trophy", title: "Badminton" },
  { icon: "Goal", title: "Cricket Area" },
  { icon: "Shirt", title: "Laundry" },
  { icon: "ParkingSquare", title: "Parking" },
  { icon: "ArrowUpDown", title: "Lift" },
  { icon: "Wifi", title: "WiFi" },
  { icon: "Zap", title: "Power Backup" },
  { icon: "Sparkles", title: "Daily Housekeeping" },
  { icon: "Droplets", title: "RO Water" },
  { icon: "Wind", title: "Ventilation" },
  { icon: "PanelTop", title: "Wide Windows" },
  { icon: "UtensilsCrossed", title: "Home-style Meals" },
];

export const ROOMS = [
  {
    key: "private",
    name: "Private Room",
    tag: "Most Popular",
    description:
      "A fully furnished single-occupancy room designed for focus and comfort. Wide openable windows, premium bedding and ample storage.",
    features: [
      "Single occupancy",
      "Attached or shared washroom",
      "Study desk & ergonomic chair",
      "Spacious wardrobe & storage",
      "AC + wide openable windows",
      "Daily housekeeping",
    ],
    starting: 29000,
  },
  {
    key: "twin",
    name: "Twin Sharing",
    tag: "Best Value",
    description:
      "Spacious twin-sharing room with separate beds, storage and study area – ideal for students and young professionals who enjoy company.",
    features: [
      "Two single beds",
      "Individual wardrobes & desks",
      "Attached / shared washroom",
      "AC + ventilation",
      "Free WiFi & power backup",
      "Daily housekeeping",
    ],
    starting: 15000,
  },
  {
    key: "front",
    name: "Front Side Private",
    tag: "Premium",
    description:
      "Our front-facing private rooms offer the brightest natural light and the best street view in the building, with upgraded interiors.",
    features: [
      "Front-facing windows",
      "Upgraded interiors",
      "Attached washroom",
      "Premium mattress & linen",
      "AC + RO water access",
      "Priority housekeeping",
    ],
    starting: 30000,
  },
];

export const FAQS = [
  {
    q: "What meal options are available?",
    a: "You can choose from Without Meals, 2 Meals, 2 Meals + Weekend 3 Meals, or 3 Meals per day. À la carte items are also available – Breakfast ₹110, Lunch ₹150, Dinner ₹150.",
  },
  { q: "How much is the security deposit?", a: "A refundable security deposit equivalent to one month's rent is required at the time of booking." },
  { q: "Is electricity included in the rent?", a: "Electricity is charged separately as per actual sub-meter consumption, billed monthly at standard rates." },
  { q: "What is the notice period?", a: "A standard 30-day written notice period is required before vacating the room." },
  { q: "Is there a lock-in period?", a: "We follow a minimum 3-month lock-in for new residents to maintain a stable community." },
  { q: "Are visitors allowed?", a: "Yes, family and friends are welcome in the common areas during visiting hours, with prior intimation to reception for security purposes." },
  { q: "Is parking available?", a: "Yes, secure two-wheeler parking is available within the premises. Four-wheeler parking is subject to availability." },
  { q: "How is laundry handled?", a: "We offer in-house laundry service. Washing machines are available on common floors and pickup laundry can be arranged on request." },
  { q: "How frequent is housekeeping?", a: "Daily housekeeping for common areas and rooms (Mon–Sat). Bathrooms are sanitised every day." },
  { q: "How far is the metro & Cyber City?", a: "We are just a short walk from DLF Phase 3 Rapid Metro and a 5–10 minute drive from Cyber City and Udyog Vihar." },
];

export const REVIEWS = [
  { name: "Aarav Sharma", role: "Software Engineer, MNC", text: "Easily the cleanest, most professionally run PG I've stayed in. Rooms feel like a hotel and the staff are super responsive." },
  { name: "Priya Verma", role: "Consultant", text: "Love the location – I walk to the metro and reach Cyber City in 10 minutes. Home-style meals are a huge plus." },
  { name: "Rohit Mehta", role: "Product Designer", text: "The gym and gaming zone make weekends genuinely enjoyable. Wide windows and natural light in every room." },
  { name: "Sneha Iyer", role: "Analyst", text: "Safety, hygiene and on-time maintenance – this is what I was looking for. Highly recommend Nestro to working women." },
];
