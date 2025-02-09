import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full fixed top-0 bg-gray-900 text-white shadow-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-2xl font-bold">Roberto Alvarado</h1>
        <ul className="hidden md:flex space-x-6">
          <li>
            <a href="#hero" className="hover:text-gray-400 cursor-pointer">
              Inicio
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-gray-400 cursor-pointer">
              Acerca de
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:text-gray-400 cursor-pointer">
              Habilidades
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-gray-400 cursor-pointer">
              Proyectos
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-gray-400 cursor-pointer">
              Contacto
            </a>
          </li>
        </ul>

        <button className="md:hidden text-2xl">☰</button>
      </div>
    </nav>
  );
};

export default Navbar;
