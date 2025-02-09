import perfil from "../assets/perfil.jpg"; // Si la imagen está en src/assets, usa esto.

const About = () => {
  return (
    <section className="w-full min-h-screen flex flex-col md:flex-row items-center justify-center px-6 py-16 gap-10">
      <img
        src={perfil} // Si está en src/assets
        alt="Foto de perfil"
        className="w-40 h-40 md:w-60 md:h-60 rounded-full shadow-lg"
      />
      <div className="text-center md:text-left max-w-3xl">
        <h2 className="text-4xl font-bold mb-4 text-blue-500">Acerca de mí</h2>
        <p className="text-lg text-gray-300">
          Soy <strong>egresado de Ingenieria Informática</strong>, con experiencia en el <strong>desarrollo web</strong> tanto en 
          <strong> back-end</strong> como en <strong> front-end</strong>. Me considero una persona 
          autodidacta, proactiva y responsable, con habilidades de trabajo en equipo y 
          capacidad para colaborar y apoyar a otros de la mejor manera posible.
        </p>
      </div>
    </section>
  );
};

export default About;

