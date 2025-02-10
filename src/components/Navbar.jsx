import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (event, id) => {
    event.preventDefault(); 
    setMenuOpen(false);
    const section = document.getElementById(id); 
    if (section) {
      section.scrollIntoView({ behavior: "smooth" }); 
    }
  };

  const links = [
    { name: "Inicio", id: "hero" },
    { name: "Acerca de mí", id: "about" },
    { name: "Habilidades", id: "skills" },
    { name: "Proyectos", id: "projects" },
    { name: "Contacto", id: "contact" },
  ];

  return (
    <nav className="w-full fixed top-0 bg-black text-white shadow-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-2xl font-bold">Roberto Alvarado</h1>

        <ul className="hidden md:flex space-x-6">
          {links.map((link) => (
            <li key={link.id} className="group relative">
              <a
                href={`#${link.id}`}
                onClick={(e) => handleNavClick(e, link.id)}
                className="cursor-pointer text-gray-300 hover:text-white transition"
              >
                {link.name}
              </a>
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✖" : "☰"}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-transparent text-white">
          <ul className="flex flex-col items-center py-4 space-y-4">
            {links.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={(e) => handleNavClick(e, link.id)}
                  className="text-gray-300 hover:text-white transition"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

