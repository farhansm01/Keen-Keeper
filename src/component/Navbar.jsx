import { LuChartLine, LuClock, LuHouse } from "react-icons/lu";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-[#E9E9E9] sticky top-0 z-50">
      <div className="max-w-8xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/" className="flex items-center">
          <span className="text-2xl font-bold ">Keen</span>
          <span className="text-2xl font-bold text-[#244D3F]">Keeper</span>
        </NavLink>

        {/* Links */}
        <ul className="flex items-center gap-1 list-none m-0 p-0">
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${isActive ? "bg-[#244D3F] text-[#F8FAFC]" : "text-[#64748B] hover:bg-[#F8FAFC] hover:text-[#244D3F]"}`
              }
            >
              <LuHouse size={16} /> Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/timeline"
              className={({ isActive }) =>
                `flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${isActive ? "bg-[#244D3F] text-[#F8FAFC]" : "text-[#64748B] hover:bg-[#F8FAFC] hover:text-[#244D3F]"}`
              }
            >
              <LuClock size={16} /> Timeline
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/stats"
              className={({ isActive }) =>
                `flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${isActive ? "bg-[#244D3F] text-[#F8FAFC]" : "text-[#64748B] hover:bg-[#F8FAFC] hover:text-[#244D3F]"}`
              }
            >
              <LuChartLine size={16} /> Stats
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
