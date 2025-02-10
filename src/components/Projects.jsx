import React from "react";
import portafolioImage from "../assets/projects/portafolio.png";
import templateImage from "../assets/projects/template.jpg";

const projects = [
  {
    title: "Portafolio",
    description: "Un portafolio personal desarrollado con React y Tailwind CSS. Muestra mis habilidades como desarrollador web.",
    image: portafolioImage,
    technologies: ["React", "Tailwind"]
  },
  {
    title: "Template",
    description: "Plantilla de proyecto adaptable para diferentes necesidades, utilizando tecnologías modernas.",
    image: templateImage, 
    technologies: ["React", "Tailwind", "Node.js"]
  },
  {
    title: "Template2",
    description: "Plantilla de proyecto adaptable para diferentes necesidades, utilizando tecnologías modernas.",
    image: templateImage, 
    technologies: ["React", "Tailwind", "Node.js"]
  },
];

const Projects = () => {
  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center px-6 py-16 bg-gray-900 text-white">
      <h2 className="text-4xl font-bold mb-6">Proyectos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group relative p-4 bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 object-cover rounded-lg transition-all duration-500 group-hover:opacity-80"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black bg-opacity-50 transition-opacity duration-300">
              <h3 className="text-2xl font-bold text-white">{project.title}</h3>
            </div>
            <div className="mt-4">
              <p className="text-sm mb-4">{project.description}</p>
              <div className="flex gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="bg-blue-500 text-white py-1 px-3 rounded-lg text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

