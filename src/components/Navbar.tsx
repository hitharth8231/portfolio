import { useState } from "react";

const Navbar = () => {
  const [dark, setDark] = useState<boolean>(
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
    setDark(!dark);
  };

  return (
    <nav className="fixed w-full backdrop-blur bg-white/70 dark:bg-gray-900/70 shadow-sm z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#" className="font-bold text-lg">
          HJ
        </a>
        <div className="space-x-4 hidden sm:block">
          <a href="#about" className="hover:underline">
            About
          </a>
          <a href="#projects" className="hover:underline">
            Projects
          </a>
          <a href="#skills" className="hover:underline">
            Skills
          </a>
          <a href="#contact" className="hover:underline">
            Contact
          </a>
        </div>
        <button
          onClick={toggleTheme}
          aria-label="Toggle Dark Mode"
          className="p-2 rounded-full border"
        >
          {dark ? "🌞" : "🌙"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
