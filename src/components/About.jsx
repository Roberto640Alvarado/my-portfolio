import perfil from "../assets/perfil.jpg";

const About = () => {
  return (
    <section className="w-full min-h-fit flex flex-col md:flex-row items-center justify-center px-6 py-16 gap-10 bg-gray-900">
      <img
        src={perfil}
        alt="Foto de perfil"
        className="w-40 h-40 md:w-60 md:h-60 rounded-full shadow-lg"
      />
      <div className="text-center md:text-left max-w-3xl">
        <h2 className="text-4xl font-bold mb-4 text-blue-500">Acerca de mí</h2>
        <p className="text-lg text-gray-300">
          Soy <strong>Ingeniero Informático</strong> y desarrollador <strong>Full Stack</strong>,
          con experiencia en el desarrollo de aplicaciones web completas, desde la creación de
          <strong> APIs REST</strong> y lógica de negocio en el <strong>back-end</strong>, hasta la
          implementación de interfaces funcionales y responsivas en el <strong>front-end</strong>.
          <br/><br/>
          Trabajo aplicando buenas prácticas de desarrollo, principios <strong>SOLID</strong> y
          metodologías <strong>ágiles (Scrum)</strong>, enfocado en construir soluciones
          <strong> escalables, seguras y mantenibles</strong>.
        </p>

      </div>
    </section>
  );
};

export default About;

