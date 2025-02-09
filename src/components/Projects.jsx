const Projects = () => {
  return (
    <>
      <section className="w-full min-h-screen flex flex-col items-center justify-center px-6 py-16">
        <h2 className="text-4xl font-bold mb-6">Proyectos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
          <div className="p-4 bg-gray-900 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">Proyecto 1</h3>
            <p className="text-sm mt-2">Descripción breve del proyecto.</p>
          </div>
          <div className="p-4 bg-gray-900 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">Proyecto 2</h3>
            <p className="text-sm mt-2">Descripción breve del proyecto.</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
