import { useState } from "react";
import { LuChartLine, LuClock, LuHouse, LuMenu, LuX } from "react-icons/lu";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
      isActive
        ? "bg-[#244D3F] text-[#F8FAFC]"
        : "text-[#64748B] hover:bg-[#F8FAFC] hover:text-[#244D3F]"
    }`;

  return (
    <nav className="bg-white border-b border-[#E9E9E9] sticky top-0 z-50">
      <div className="w-full px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/" className="flex items-center shrink-0">
          <span className="text-2xl font-bold">Keen</span>
          <span className="text-2xl font-bold text-[#244D3F]">Keeper</span>
        </NavLink>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-1 list-none m-0 p-0">
          <li>
            <NavLink to="/" end className={linkClass}>
              <LuHouse size={16} /> Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/timeline" className={linkClass}>
              <LuClock size={16} /> Timeline
            </NavLink>
          </li>
          <li>
            <NavLink to="/stats" className={linkClass}>
              <LuChartLine size={16} /> Stats
            </NavLink>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2 rounded-lg text-[#64748B] hover:bg-[#F8FAFC] transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <LuX size={22} /> : <LuMenu size={22} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-[#E9E9E9] px-4 pb-4">
          <ul className="flex flex-col gap-1 list-none m-0 p-0 pt-3">
            <li>
              <NavLink
                to="/"
                end
                className={linkClass}
                onClick={() => setIsOpen(false)}
              >
                <LuHouse size={16} /> Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/timeline"
                className={linkClass}
                onClick={() => setIsOpen(false)}
              >
                <LuClock size={16} /> Timeline
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/stats"
                className={linkClass}
                onClick={() => setIsOpen(false)}
              >
                <LuChartLine size={16} /> Stats
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
