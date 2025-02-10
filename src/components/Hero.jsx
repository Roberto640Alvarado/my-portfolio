import React, { useEffect } from "react";
import Typed from "typed.js";
import perfil from "../assets/perfil.jpg";

const Hero = () => {
  useEffect(() => {
    const options = {
      strings: [
        '<i className="engineer">Frontend</i>',
        '<i className="engineer">Backend</i>',
      ],
      typeSpeed: 75, // Velocidad de escritura
      startDelay: 300, // Retraso al inicio
      backSpeed: 75, // Velocidad para borrar
      shuffle: false, // No cambiar el orden
      backDelay: 1500, // Tiempo de espera después de borrar
      loop: true, // Repetir infinitamente
      showCursor: true, // Mostrar el cursor
      cursorChar: "|", // Caracter del cursor
      contentType: "html", // Permitir etiquetas HTML
    };

    const typed = new Typed(".typed", options);

    return () => {
      typed.destroy();
    };
  }, []);

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "https://drive.google.com/uc?export=download&id=1ohkzHjCedrAgGmEmHRhyFw1sZ9fcY6R5"; 
    link.download = "CV_Roberto_Alvarado.pdf"; 
    link.click();
  };

  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center text-center bg-gray-900 text-white px-6 py-16">
      <img
              src={perfil} 
              alt="Foto de perfil"
              className="w-40 h-40 md:w-60 md:h-60 rounded-full shadow-lg"
            />
      <h1 className="text-5xl md:text-6xl font-bold">¡Hola! Soy Roberto Alvarado</h1>
      <p className="text-3xl md:text-4xl mt-4 max-w-2xl">
        Desarrollador <span className="typed"></span>
      </p>
      <div className="mt-6 flex gap-4">
        <a
          href="#projects"
          className="px-6 py-3 bg-blue-600 rounded-lg text-white hover:bg-blue-700 transition"
        >
          Ver proyectos
        </a>
        <button
          onClick={handleDownloadCV}
          className="px-6 py-3 bg-green-600 rounded-lg text-white hover:bg-green-700 transition"
        >
          Descargar CV
        </button>
      </div>
    </section>
  );
};

export default Hero;


