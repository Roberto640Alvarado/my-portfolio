const Contact = () => {
  return (
    <>
      <section className="w-full min-h-screen flex flex-col items-center justify-center px-6 py-16 bg-gray-800 text-white">
        <h2 className="text-4xl font-bold mb-6">Contacto</h2>
        <form className="w-full max-w-lg bg-gray-900 p-6 rounded-lg shadow-lg">
          <input
            type="text"
            placeholder="Tu nombre"
            className="w-full p-3 rounded mb-4 bg-gray-700 text-white"
          />
          <input
            type="email"
            placeholder="Tu correo"
            className="w-full p-3 rounded mb-4 bg-gray-700 text-white"
          />
          <textarea
            placeholder="Tu mensaje"
            className="w-full p-3 rounded mb-4 bg-gray-700 text-white"
          ></textarea>
          <button className="w-full bg-blue-600 p-3 rounded text-white hover:bg-blue-700">
            Enviar
          </button>
        </form>
      </section>
    </>
  );
};

export default Contact;
