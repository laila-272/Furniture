import { IMG } from "./Images";

export const PRODUCTS = [
  {
    id: 1,
    name: "Syltherine",
    desc: "Stylish cafe chair",
    price: "Rp 2.500.000",
    oldPrice: "Rp 3.500.000",
    badge: "-30%",
    image: IMG.p("photo-1524758631624-e2822e304c36"),
  },
  {
    id: 2,
    name: "Leviosa",
    desc: "Stylish cafe chair",
    price: "Rp 2.500.000",
    oldPrice: "Rp 3.500.000",
    badge: null,
    forceHover: true,
    image: IMG.p("photo-1493663284031-b7e3aefcae8e"),
  },
  {
    id: 3,
    name: "Lolito",
    desc: "Luxury big sofa",
    price: "Rp 7.000.000",
    oldPrice: "Rp 14.000.000",
    badge: "-50%",
    image: IMG.p("photo-1555041469-a586c61ea9bc"),
  },
  {
    id: 4,
    name: "Respira",
    desc: "Outdoor bar table and stool",
    price: "Rp 500.000",
    oldPrice: null,
    badge: "New",
    image: IMG.p("photo-1618220179428-22790b461013"),
  },
  {
    id: 5,
    name: "Grifo",
    desc: "Night lamp",
    price: "Rp 1.500.000",
    oldPrice: null,
    badge: null,
    image: IMG.p("photo-1513506003901-1e6a229e2d15"),
  },
  {
    id: 6,
    name: "Muggo",
    desc: "Small mug",
    price: "Rp 150.000",
    oldPrice: null,
    badge: "New",
    image: IMG.p("photo-1586023492125-27b2c045efd7"),
  },
  {
    id: 7,
    name: "Pingky",
    desc: "Cute bed set",
    price: "Rp 7.000.000",
    oldPrice: "Rp 14.000.000",
    badge: "-50%",
    image: IMG.p("photo-1631679706909-1844bbd07221"),
  },
  {
    id: 8,
    name: "Potty",
    desc: "Minimalist flower pot",
    price: "Rp 500.000",
    oldPrice: null,
    badge: "New",
    image: IMG.p("photo-1540518614846-7eded433c457"),
  },
];

export const BEST_SELLERS = [
  {
    id: 1,
    name: "Verda",
    desc: "Retro green armchair",
    price: "Rp 3.200.000",
    image: IMG.greenChair,
  },
  {
    id: 2,
    name: "Cortez",
    desc: "Leather lounge seat",
    price: "Rp 8.900.000",
    image: IMG.p("photo-1493663284031-b7e3aefcae8e"),
  },
  {
    id: 3,
    name: "Azul",
    desc: "Wingback armchair",
    price: "Rp 3.990.000",
    image: IMG.p("photo-1567016432779-094069958ea5"),
  },
  {
    id: 4,
    name: "Nest",
    desc: "Rattan lounge chair",
    price: "Rp 4.100.000",
    image: IMG.p("photo-1524758631624-e2822e304c36"),
  },
];

export const CATEGORIES = [
  { name: "Dining", image: IMG.range[0] },
  { name: "Living", image: IMG.range[1] },
  { name: "Bedroom", image: IMG.range[2] },
];

export const BENEFITS = [
  {
    icon: "trophy",
    title: "High Quality",
    subtitle: "crafted from top materials",
  },
  { icon: "badge", title: "Warranty Protection", subtitle: "Over 2 years" },
  { icon: "package", title: "Free Shipping", subtitle: "Order over 150 $" },
  { icon: "support", title: "24 / 7 Support", subtitle: "Dedicated support" },
];

export const NAV_LINKS = ["Home", "Shop", "About", "Contact"];

export const FOOTER_COLUMNS = [
  { heading: "Links", items: ["Home", "Shop", "About", "Contact"] },
  { heading: "Help", items: ["privacy", "FAQ", "Help centre", "returns"] },
  { heading: "contact us", items: ["Email", "phone", "Address"] },
];

export const TESTIMONIAL = {
  name: "ABHSHEK VERMA",
  text: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."',
  image: IMG.client,
};
