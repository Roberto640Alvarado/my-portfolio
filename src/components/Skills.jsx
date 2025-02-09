const Skills = () => {
  return (
    <>
      <section className="w-full min-h-screen flex flex-col items-center justify-center px-6 py-16 bg-gray-800 text-white">
        <h2 className="text-4xl font-bold mb-6">Habilidades</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl">
          <div className="p-4 bg-gray-900 rounded-lg shadow-md text-center">
            JavaScript
          </div>
          <div className="p-4 bg-gray-900 rounded-lg shadow-md text-center">
            React.js
          </div>
          <div className="p-4 bg-gray-900 rounded-lg shadow-md text-center">
            Node.js
          </div>
          <div className="p-4 bg-gray-900 rounded-lg shadow-md text-center">
            Tailwind CSS
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
