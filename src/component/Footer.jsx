import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#244D3F" }} className="w-full">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-6 pt-14 pb-8">
        {/* Brand + tagline */}
        <div className="flex flex-col items-center text-center mb-10">
          <h2 className="text-white text-4xl sm:text-5xl font-medium tracking-tight mb-3">
            <span className="font-bold">Keen</span>Keeper
          </h2>
          <p
            style={{ color: "#D9D9D9" }}
            className="text-sm sm:text-base max-w-md leading-relaxed"
          >
            Your personal shelf of meaningful connections. Browse, tend, and
            nurture the relationships that matter most.
          </p>
        </div>

        {/* Social links */}
        <div className="flex flex-col items-center gap-4 mb-10">
          <p className="text-white font-semibold text-base tracking-wide">
            Social Links
          </p>
          <div className="flex items-center gap-4">
            {/* YouTube */}
            <a
              href="#"
              aria-label="YouTube"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-white text-black hover:opacity-80 transition-opacity duration-200"
            >
              <RiInstagramFill size={18} />
            </a>
            {/* Facebook */}
            <a
              href="#"
              aria-label="Facebook"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-white text-black hover:opacity-80 transition-opacity duration-200"
            >
              <FaFacebookF size={18} />
            </a>
            {/* X / Twitter */}
            <a
              href="#"
              aria-label="X (Twitter)"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-white text-black hover:opacity-80 transition-opacity duration-200"
            >
              <FaXTwitter size={18} />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div
          style={{ backgroundColor: "#E9E9E9", opacity: 0.15 }}
          className="h-px w-full mb-6"
        />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
          <p
            style={{ color: "#D9D9D9" }}
            className="opacity-70 text-center sm:text-left"
          >
            © 2026 KeenKeeper. All rights reserved.
          </p>
          <nav className="flex items-center gap-6 flex-wrap justify-center">
            {["Privacy Policy", "Terms of Service", "Cookies"].map((item) => (
              <a
                key={item}
                href="#"
                style={{ color: "#D9D9D9" }}
                className="opacity-70 hover:opacity-100 transition-opacity duration-200 whitespace-nowrap"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
