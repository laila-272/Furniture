import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ChevronRight,
  Trophy,
  BadgeCheck,
  PackageCheck,
  Headphones,
} from "lucide-react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

/* ------------------------------------------------------------------ */
/* Helper Functions & Images                                           */
/* ------------------------------------------------------------------ */
const u = (id, w = 800) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

const IMG = {
  hero: [
    u("photo-1567538096630-e0c55bd6374c"),
    u("photo-1618220179428-22790b461013"),
    u("photo-1493663284031-b7e3aefcae8e"),
    u("photo-1524758631624-e2822e304c36"),
  ],
  promo: u("photo-1555041469-a586c61ea9bc", 1000),
  range: [
    u("photo-1505693416388-ac5ce068fe85"),
    u("photo-1586023492125-27b2c045efd7"),
    u("photo-1616486338812-3dadae4b4ace"),
  ],
  rooms: [
    {
      title: "Inner Peace",
      subtitle: "Bed Room",
      img: u("photo-1618220179428-22790b461013", 600),
    },
    {
      title: "Modern Minimalist",
      subtitle: "Living Room",
      img: u("photo-1600210492486-724fe5c67fb0", 600),
    },
    {
      title: "Cozy Corner",
      subtitle: "Dining Area",
      img: u("photo-1538688525198-9b88f6f53126", 600),
    },
  ],
  greenChair: u("photo-1592078615290-033ee584e267", 500),
  lamp: u("photo-1507473885765-e6ed057f782c", 400),
  about: u("photo-1567538096630-e0c55bd6374c", 600),
  client: u("photo-1500648767791-00dcc994a43e", 600),
};

const p500 = (id) => u(id, 500);

/* ------------------------------------------------------------------ */
/* Mock Data                                                          */
/* ------------------------------------------------------------------ */
const CATEGORIES = [
  { name: "Dining", image: IMG.range[0] },
  { name: "Living", image: IMG.range[1] },
  { name: "Bedroom", image: IMG.range[2] },
];

const PRODUCTS = [
  {
    name: "Syltherine",
    desc: "Stylish cafe chair",
    price: "Rp 2.500.000",
    oldPrice: "Rp 3.500.000",
    badge: "-30%",
    image: p500("photo-1524758631624-e2822e304c36"),
  },
  {
    name: "Leviosa",
    desc: "Stylish cafe chair",
    price: "Rp 2.500.000",
    oldPrice: null,
    badge: null,
    forceHover: true,
    image: p500("photo-1493663284031-b7e3aefcae8e"),
  },
  {
    name: "Lolito",
    desc: "Luxury big sofa",
    price: "Rp 7.000.000",
    oldPrice: "Rp 14.000.000",
    badge: "-50%",
    image: p500("photo-1555041469-a586c61ea9bc"),
  },
  {
    name: "Respira",
    desc: "Outdoor bar table and stool",
    price: "Rp 500.000",
    oldPrice: null,
    badge: "New",
    image: p500("photo-1618220179428-22790b461013"),
  },
  {
    name: "Grifo",
    desc: "Night lamp",
    price: "Rp 1.500.000",
    oldPrice: null,
    badge: null,
    image: p500("photo-1513506003901-1e6a229e2d15"),
  },
  {
    name: "Muggo",
    desc: "Small mug",
    price: "Rp 150.000",
    oldPrice: null,
    badge: "New",
    image: p500("photo-1586023492125-27b2c045efd7"),
  },
  {
    name: "Pingky",
    desc: "Cute bed set",
    price: "Rp 7.000.000",
    oldPrice: "Rp 14.000.000",
    badge: "-50%",
    image: p500("photo-1631679706909-1844bbd07221"),
  },
  {
    name: "Potty",
    desc: "Minimalist flower pot",
    price: "Rp 500.000",
    oldPrice: null,
    badge: "New",
    image: p500("photo-1540518614846-7eded433c457"),
  },
];

const BEST_SELLERS = [
  {
    name: "Verda",
    desc: "Retro green armchair",
    price: "Rp 3.200.000",
    image: IMG.greenChair,
  },
  {
    name: "Cortez",
    desc: "Leather lounge seat",
    price: "Rp 8.900.000",
    image: p500("photo-1493663284031-b7e3aefcae8e"),
  },
  {
    name: "Azul",
    desc: "Wingback armchair",
    price: "Rp 3.990.000",
    image: p500("photo-1567016432779-094069958ea5"),
  },
  {
    name: "Nest",
    desc: "Rattan lounge chair",
    price: "Rp 4.100.000",
    image: p500("photo-1524758631624-e2822e304c36"),
  },
];

const COUNTDOWN = [
  ["02", "Days"],
  ["14", "Hrs"],
  ["36", "Min"],
  ["12", "Sec"],
];

const BENEFITS = [
  {
    Icon: Trophy,
    title: "High Quality",
    subtitle: "crafted from top materials",
  },
  { Icon: BadgeCheck, title: "Warranty Protection", subtitle: "Over 2 years" },
  { Icon: PackageCheck, title: "Free Shipping", subtitle: "Order over 150 $" },
  { Icon: Headphones, title: "24 / 7 Support", subtitle: "Dedicated support" },
];

/* ------------------------------------------------------------------ */
/* Reusable Components                                                */
/* ------------------------------------------------------------------ */
const Container = ({ className = "", children }) => (
  <div className={`mx-auto w-full max-w-[1240px] px-4 sm:px-6 ${className}`}>
    {children}
  </div>
);

const Heading = ({ children }) => (
  <h2 className="text-2xl sm:text-[32px] font-bold text-[#235240] tracking-tight">
    {children}
  </h2>
);

const SOLID = "bg-[#235240] text-white hover:bg-[#1b4133] transition-colors";
const OUTLINE =
  "border border-[#235240] text-[#235240] bg-transparent hover:bg-[#235240] hover:text-white transition-colors";

function ProductCard({
  name,
  desc,
  price,
  oldPrice,
  badge,
  forceHover,
  image,
}) {
  return (
    <div className="group bg-[#f4f1ea] relative">
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={name}
          className="block w-full aspect-square object-cover"
        />
        {badge && (
          <span
            className={`absolute top-3 right-3 w-9 h-9 rounded-full text-white text-[10px] font-semibold flex items-center justify-center ${
              badge === "New" ? "bg-[#2ec4a0]" : "bg-[#e97777]"
            }`}
          >
            {badge}
          </span>
        )}
        <div
          className={`absolute inset-0 bg-black/50 flex flex-col items-center justify-center gap-3 text-white text-xs transition-opacity ${
            forceHover ? "flex" : "hidden group-hover:flex"
          }`}
        >
          <button className="bg-white text-[#b88e2f] px-7 py-2 font-semibold text-xs shadow">
            Add to cart
          </button>
          <div className="flex gap-3 text-[11px] font-medium mt-1">
            <span className="cursor-pointer hover:underline">Share</span>
            <span className="cursor-pointer hover:underline">Compare</span>
            <span className="cursor-pointer hover:underline">Like</span>
          </div>
        </div>
      </div>
      <div className="p-4 bg-[#f4f1ea]">
        <h3 className="text-sm sm:text-base font-bold text-[#3a3a3a]">
          {name}
        </h3>
        <p className="text-xs text-[#898989] mt-0.5">{desc}</p>
        <p className="text-xs sm:text-sm font-semibold mt-2 text-[#3a3a3a] flex items-center gap-2">
          {price}
          {oldPrice && (
            <s className="text-[11px] text-[#b0b0b0] font-normal line-through">
              {oldPrice}
            </s>
          )}
        </p>
      </div>
    </div>
  );
}

function BestSellerCard({ name, desc, price, image }) {
  return (
    <div className="bg-[#f4f1ea]">
      <div className="relative">
        <img
          src={image}
          alt={name}
          className="block w-full aspect-square object-cover"
        />
        <span className="absolute top-3 left-3 bg-[#235240] text-white text-[9px] px-2 py-0.5 rounded font-medium">
          #1 Best Seller
        </span>
      </div>
      <div className="p-4">
        <h3 className="text-sm sm:text-base font-bold text-[#235240]">
          {name}
        </h3>
        <p className="text-xs text-[#888] mt-0.5">{desc}</p>
        <p className="text-xs sm:text-sm font-semibold mt-2 text-[#3a3a3a]">
          {price}
        </p>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Page Main Component                                                */
/* ------------------------------------------------------------------ */
export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <>
      <Navbar />

      <main className="bg-[#faf6ee] text-[#3a3a3a] font-sans">
        {/* Hero Section */}
        <section className="text-center pt-8 pb-10 px-4">
          <h1 className="mx-auto font-serif max-w-[760px] font-semibold text-[#235240] text-3xl sm:text-5xl lg:text-[56px] leading-tight">
            Furnish Your Home with Sustainable Style
          </h1>
          <p className="text-xs sm:text-sm leading-relaxed text-[#555] max-w-[460px] mx-auto mt-4">
            Discover furniture that is both beautiful and environmentally
            responsible. Our pieces are crafted from sustainable materials,
            reducing waste and preserving the planet for future generations.
          </p>
          <button
            className={`${SOLID} mt-6 text-xs font-medium rounded-full px-7 h-9`}
          >
            View Shop
          </button>
        </section>

        {/* Hero Curved Image Gallery Strip */}
        <section className="overflow-hidden py-4">
          <div className="flex gap-4 h-[260px] sm:h-[340px] items-stretch -mx-8 px-8">
            {IMG.hero.map((src, i) => (
              <img
                key={i}
                src={src}
                alt=""
                className="h-full flex-1 min-w-0 object-cover rounded-xl"
              />
            ))}
          </div>
        </section>

        {/* Limited Time Promo Banner */}
        <Container className="mt-16 sm:mt-20">
          <div className="relative rounded-2xl bg-[#235240] text-white overflow-hidden min-h-[260px] sm:min-h-[280px] flex items-center">
            <div className="relative z-10 p-6 sm:p-10 w-full md:w-1/2">
              <span className="inline-block text-[9px] font-semibold bg-[#e8e0cf] text-[#235240] rounded px-2.5 py-1 uppercase tracking-wider">
                Limited Time · Winter Sale
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold mt-3">
                Up to 50% Off
              </h2>
              <p className="text-xs text-white/80 mt-1">
                Refresh your space with sustainable pieces at special prices.
              </p>

              {/* Countdown Timer */}
              <div className="flex gap-2.5 mt-4">
                {COUNTDOWN.map(([num, label]) => (
                  <div
                    key={label}
                    className="w-11 h-11 rounded bg-white/10 backdrop-blur-sm flex flex-col items-center justify-center border border-white/10"
                  >
                    <b className="text-xs sm:text-sm leading-none">{num}</b>
                    <span className="text-[8px] opacity-75 mt-0.5">
                      {label}
                    </span>
                  </div>
                ))}
              </div>

              <button className="bg-white text-[#235240] font-semibold mt-5 text-xs rounded-full px-5 h-8">
                Shop the Offers
              </button>
            </div>

            {/* Banner Image with Arc Cut */}
            <div className="absolute right-0 top-0 h-full w-[55%] hidden md:block">
              <img
                src={IMG.promo}
                alt="Promo"
                className="h-full w-full object-cover rounded-l-full"
              />
              <div className="absolute left-[-35px] top-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-[#e53935] text-white flex flex-col items-center justify-center z-10 shadow-lg">
                <b className="text-sm leading-none">50%</b>
                <span className="text-[9px] font-bold">OFF</span>
              </div>
            </div>
          </div>
        </Container>

        {/* Browse The Range Section */}
        <Container className="mt-20 text-center">
          <Heading>Browse The Range</Heading>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
            {CATEGORIES.map(({ name, image }) => (
              <div key={name} className="group cursor-pointer">
                <img
                  src={image}
                  alt={name}
                  className="w-full object-cover rounded-lg h-[320px] sm:h-[380px] shadow-sm transition-transform duration-300 group-hover:scale-[1.02]"
                />
                <p className="text-base font-semibold mt-3 text-[#3a3a3a]">
                  {name}
                </p>
              </div>
            ))}
          </div>
          <p className="text-xs text-[#777] mt-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </Container>

        {/* Our Products Grid */}
        <Container className="mt-16 text-center">
          <Heading>Our Products</Heading>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-8 text-left">
            {PRODUCTS.map((p) => (
              <ProductCard key={p.name} {...p} />
            ))}
          </div>
          <button
            className={`${OUTLINE} mt-8 text-xs font-semibold px-10 h-9 border-[#235240]`}
          >
            Show More
          </button>
        </Container>

        {/* Best Sellers */}
        <Container className="mt-20 text-center">
          <Heading>Best Sellers</Heading>
          <p className="text-xs text-[#666] mt-1">
            Our most-loved pieces, picked by thousands of happy customers
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-6 text-left">
            {BEST_SELLERS.map((p) => (
              <BestSellerCard key={p.name} {...p} />
            ))}
          </div>
          <button
            className={`${OUTLINE} mt-8 text-xs font-semibold px-12 h-9 border-[#235240]`}
          >
            View all
          </button>
        </Container>

        {/* Rooms Inspiration Slider */}
        <Container className="mt-20">
          <div className="bg-[#f1ece0] rounded-xl overflow-hidden grid grid-cols-1 md:grid-cols-[1fr_1.8fr] gap-8 p-6 sm:p-10 items-center min-h-[420px]">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#235240] leading-snug">
                50+ Beautiful rooms inspiration
              </h2>
              <p className="text-xs text-[#666] mt-3 leading-relaxed">
                Our designer already made a lot of beautiful prototype of rooms
                that inspire you
              </p>
              <button
                className={`${SOLID} mt-5 text-xs font-semibold px-6 h-9 rounded-sm`}
              >
                Explore More
              </button>
            </div>

            <div className="relative flex gap-4 items-center overflow-hidden">
              {/* Active Main Room Image with floating detail card */}
              <div className="relative w-[240px] sm:w-[280px] h-[340px] sm:h-[380px] shrink-0 rounded-lg overflow-hidden shadow-md">
                <img
                  src={IMG.rooms[activeSlide]?.img}
                  alt={IMG.rooms[activeSlide]?.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute left-6 bottom-6 bg-white/90 backdrop-blur-sm p-4 rounded-sm min-w-[140px]">
                  <p className="text-[10px] text-[#616161]">
                    0{activeSlide + 1} — {IMG.rooms[activeSlide]?.subtitle}
                  </p>
                  <h4 className="text-sm font-bold text-[#3a3a3a] mt-0.5">
                    {IMG.rooms[activeSlide]?.title}
                  </h4>
                  <button
                    onClick={() =>
                      setActiveSlide((prev) => (prev + 1) % IMG.rooms.length)
                    }
                    className="absolute right-[-40px] bottom-0 bg-[#235240] text-white w-10 h-10 flex items-center justify-center shadow"
                  >
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>

              {/* Next Slide Preview */}
              <div className="w-[180px] sm:w-[220px] h-[280px] sm:h-[320px] shrink-0 rounded-lg overflow-hidden opacity-80">
                <img
                  src={IMG.rooms[(activeSlide + 1) % IMG.rooms.length]?.img}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Slider Dots */}
              <div className="absolute bottom-3 left-4 flex gap-2">
                {IMG.rooms.map((_, idx) => (
                  <span
                    key={idx}
                    onClick={() => setActiveSlide(idx)}
                    className={`cursor-pointer inline-block w-2.5 h-2.5 rounded-full transition-all ${
                      idx === activeSlide ? "bg-[#235240] w-6" : "bg-[#c9c9c9]"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </Container>

        {/* Why We Are Best in Town */}
        <Container className="mt-16">
          <div className="bg-white rounded-lg shadow-sm grid grid-cols-1 md:grid-cols-[1.3fr_1fr_0.8fr_0.8fr] items-center">
            <div className="p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-bold text-[#235240]">
                Why We Are Best in Town
              </h2>
              <p className="text-[10px] leading-relaxed text-[#777] mt-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim
                ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                ut aliquip ex ea commodo consequat.
              </p>
              <button
                className={`${SOLID} mt-4 w-8 h-8 rounded-full flex items-center justify-center`}
              >
                <ArrowRight size={14} />
              </button>
            </div>

            <div className="bg-[#f7f5f0] h-full flex flex-col items-center justify-center p-4 text-center">
              <img
                src={IMG.greenChair}
                alt=""
                className="w-28 h-28 object-contain"
              />
              <p className="text-xs font-semibold text-[#3a3a3a] mt-2">
                Green chair with wood
              </p>
              <p className="text-xs font-bold text-[#235240] mt-1">Rs 8000/-</p>
            </div>

            {[1, 2].map((k) => (
              <div
                key={k}
                className="flex flex-col items-center justify-center p-4 text-center border-l border-gray-100"
              >
                <img
                  src={IMG.lamp}
                  alt=""
                  className="w-24 h-28 object-contain"
                />
                <p className="text-xs font-semibold text-[#3a3a3a] mt-2">
                  Green Lamp
                </p>
                <p className="text-xs font-bold text-[#235240] mt-1">
                  Rs 4000/-
                </p>
              </div>
            ))}
          </div>
        </Container>

        {/* About Us Section */}
        <Container className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="relative h-[340px] sm:h-[380px]">
            <img
              src={IMG.about}
              alt=""
              className="absolute left-0 top-12 w-[160px] sm:w-[190px] h-[220px] object-cover rounded shadow-md"
            />
            <img
              src={IMG.about}
              alt=""
              className="absolute left-[175px] sm:left-[210px] top-16 w-[160px] sm:w-[190px] h-[250px] object-cover rounded shadow-md"
            />

            {/* Floating Ratings & Stats */}
            <div className="absolute left-[175px] sm:left-[210px] top-0 bg-white rounded-md shadow p-3 border border-gray-100 text-[10px]">
              <b className="text-xs text-[#235240] block">30,000+</b>
              <span className="text-[8px] text-[#777]">
                Adults say they love it
              </span>
            </div>

            <div className="absolute left-6 bottom-4 bg-white rounded shadow px-3 py-2 text-[9px] border border-gray-100">
              Rapid ratings ★★★★★
            </div>
          </div>

          <div className="md:pl-4">
            <span className="text-[10px] font-bold tracking-widest text-[#999] uppercase">
              LOGO
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-wider text-[#4a3b2a] mt-1">
              ABOUT US
            </h2>
            <p className="text-xs leading-relaxed text-[#666] mt-3">
              Furn they they pine negative of Rich he. They age and draw mix
              the. Improving and decrease may instantly was household applauded
              incommode. Why kept very ever home mrs.
            </p>
            <button
              className={`${SOLID} mt-5 text-[10px] font-bold tracking-widest px-6 h-8 uppercase`}
            >
              Explore More
            </button>
          </div>
        </Container>

        {/* Testimonials */}
        <section className="py-16 sm:py-20">
          <Container>
            <div className="relative bg-white rounded-xl p-6 sm:p-10 shadow-sm border border-gray-100">
              <h2 className="text-xl sm:text-2xl font-extrabold text-[#235240] text-center uppercase tracking-wide">
                What our happy client says?
              </h2>

              <div className="mt-8 flex flex-col md:flex-row items-center gap-6 sm:gap-10 max-w-3xl mx-auto">
                <img
                  src={IMG.client}
                  alt="Abhishek Verma"
                  className="w-48 sm:w-60 h-48 sm:h-60 object-cover rounded shadow"
                />

                <div>
                  <h3 className="text-sm sm:text-base font-bold text-black tracking-wide">
                    ABHSHEK VERMA
                  </h3>
                  <p className="text-xs sm:text-sm text-[#555] leading-relaxed mt-2 italic">
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat."
                  </p>
                </div>
              </div>

              {/* Slider Arrows */}
              <div className="flex justify-center md:justify-end gap-3 mt-6">
                <button
                  aria-label="Previous"
                  className="w-8 h-8 rounded-full border border-[#235240] text-[#235240] flex items-center justify-center hover:bg-[#235240] hover:text-white transition"
                >
                  <ArrowLeft size={14} />
                </button>
                <button
                  aria-label="Next"
                  className="w-8 h-8 rounded-full bg-[#235240] text-white flex items-center justify-center hover:bg-[#1b4133] transition"
                >
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </Container>
        </section>

        {/* Service Benefits */}
        <section className="bg-[#f5f1e8] border-t border-b border-gray-200/60">
          <div className="max-w-[1240px] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6 px-6 py-8">
            {BENEFITS.map(({ Icon, title, subtitle }) => (
              <div key={title} className="flex items-center gap-3">
                <Icon size={32} strokeWidth={1.3} className="text-[#3a3a3a]" />
                <div>
                  <p className="text-xs sm:text-sm font-bold text-[#3a3a3a] leading-tight">
                    {title}
                  </p>
                  <p className="text-[10px] sm:text-xs text-[#777] mt-0.5">
                    {subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
