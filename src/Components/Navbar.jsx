import { User, Search, Heart, ShoppingCart } from "lucide-react";
import AnnouncementBar from "./AnnouncementBar";
import { NAV_LINKS } from "../Data/Products.js";

const ICONS = [User, Search, Heart, ShoppingCart];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50">
      <AnnouncementBar />
      <nav className="h-[70px] flex items-center justify-between px-6 lg:px-[110px] bg-[#fff]">
        <div className="inter font-extrabold text-[22px] tracking-tight">
          LOGO
        </div>
        <ul className="hidden md:flex gap-[72px] text-[12px] font-medium">
          {NAV_LINKS.map((l) => (
            <li key={l}>
              <a href="#">{l}</a>
            </li>
          ))}
        </ul>
        <div className="flex gap-5">
          {ICONS.map((Icon, i) => (
            <Icon key={i} size={16} strokeWidth={1.5} />
          ))}
        </div>
      </nav>
    </header>
  );
}
