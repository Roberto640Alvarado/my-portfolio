import perfil from "../assets/perfil.jpg";

// Logo de Empresa
import serfinsaLogo from "../assets/laboral/serfinsa.png";
import guatemalaDigitalLogo from "../assets/laboral/guatemaladigital.png";

const experiences = [
  {
    company: "GuatemalaDigital / ElSalvadorYa",
    position: "Analista Desarrollador React",
    period: "Diciembre 2023 – Abril 2025",
    logo: guatemalaDigitalLogo,
    description:
      "Formé parte del equipo de desarrollo web, dando soporte y creando nuevas funcionalidades para sistemas internos, principalmente del área de contabilidad. Trabajé en el desarrollo frontend con React, optimizando la experiencia de usuario y procesos internos. Posteriormente participé en el mantenimiento y evolución de APIs backend con Java Spring Boot y C# .NET, así como en la gestión de bases de datos SQL Server y MongoDB, incluyendo procedimientos almacenados y lógica de negocio.",
  },
  {
    company: "Empresa Financiera Serfinsa",
    position: "Desarrollador Operativo",
    period: "Abril 2025 – Actualidad",
    logo: serfinsaLogo,
    description:
      "Participé en el desarrollo y mantenimiento de sistemas empresariales orientados a la automatización de procesos financieros. He trabajado en la creación de APIs RESTful con Java y Spring Boot, integrando seguridad mediante JWT y LDAP, así como en el diseño de soluciones para el análisis de transacciones. Además, desarrollé procedimientos almacenados en SQL Server y colaboré en tareas frontend utilizando Angular y Next.js, trabajando bajo metodología ágil Scrum.",
  },
];

const About = () => {
  const currentYear = new Date().getFullYear();

  return (
    <section className="w-full min-h-fit flex flex-col items-center justify-center px-6 py-16 bg-gray-900">
      {/* Sección Acerca de mí */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 mb-16 max-w-6xl">
        <img
          src={perfil}
          alt="Foto de perfil"
          className="w-40 h-40 md:w-60 md:h-60 rounded-full shadow-lg"
        />
        <div className="text-center md:text-left max-w-3xl">
          <h2 className="text-4xl font-bold mb-4 text-white">Acerca de mí</h2>
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
      </div>

      {/* Sección Experiencia Laboral */}
      <div className="w-full max-w-5xl">
        <h2 className="text-4xl font-bold mb-12 text-white text-center">Experiencia Laboral</h2>
        
        <div className="relative">
          <div className="absolute left-0 md:left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 via-blue-500 to-blue-600"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-12 md:pl-20">
                <div className="absolute left-0 md:left-6 top-2 w-3 h-3 bg-blue-500 rounded-full border-4 border-gray-900 transform -translate-x-1"></div>
                
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-2xl border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:shadow-blue-500/20 overflow-hidden">
                  
                  {/* Header con logo y empresa */}
                  <div className="bg-gray-800/50 p-6 border-b border-gray-700">
                    <div className="flex items-center gap-4 mb-3">
                      <img 
                        src={exp.logo} 
                        alt={exp.company} 
                        className="w-14 h-14 md:w-16 md:h-16 rounded-full object-contain bg-white p-2 shadow-lg"
                      />
                      <div className="flex-1">
                        <h3 className="text-xl md:text-2xl font-bold text-blue-400 mb-1">
                          {exp.company}
                        </h3>
                        <p className="text-base md:text-lg font-semibold text-white">
                          {exp.position}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 text-gray-400">
                      <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm md:text-base">{exp.period}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-300 leading-relaxed text-justify">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            <div className="relative pl-12 md:pl-20">
              <div className="absolute left-0 md:left-6 top-2 w-4 h-4 bg-blue-400 rounded-full border-4 border-gray-900 transform -translate-x-1.5 animate-pulse"></div>
              <div className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full font-semibold shadow-lg">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                <span>{currentYear}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;