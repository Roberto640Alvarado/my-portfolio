import { useState } from "react";
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope, FaPhone } from "react-icons/fa";
import emailjs from "emailjs-com";
import toast, { Toaster } from 'react-hot-toast'; 

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();


    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
    };

    emailjs
      .send(
        "service_zbknk5j", 
        "template_nzlz5we",
        templateParams,
        "-D47iknbQxlfV6BOs"
      )
      .then(
        (response) => {
          toast.success("¡Mensaje enviado exitosamente!");
          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          toast.error("Hubo un error al enviar el mensaje. Intenta de nuevo.");
        }
      );
  };

  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center px-6 py-16 bg-gray-900 text-white">
      <h2 className="text-4xl font-bold mb-10">Contacto</h2>
      <Toaster /> 

      <div className="flex flex-col md:flex-row gap-10 items-center w-full max-w-5xl">
        {/* Formulario */}
        <form onSubmit={handleSubmit} className="w-full max-w-lg bg-gray-800 p-6 rounded-lg shadow-lg">
          <input
            type="text"
            placeholder="Tu nombre"
            className="w-full p-3 rounded mb-4 bg-gray-700 text-white"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Tu correo"
            className="w-full p-3 rounded mb-4 bg-gray-700 text-white"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            placeholder="Tu mensaje"
            className="w-full p-3 rounded mb-4 bg-gray-700 text-white"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <button type="submit" className="w-full bg-blue-600 p-3 rounded text-white hover:bg-blue-700">
            Enviar
          </button>
        </form>

        <div className="w-full max-w-md bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col gap-4">
          <h3 className="text-2xl font-bold text-blue-400">Conéctate conmigo</h3>
          <div className="flex items-center gap-3">
            <FaLinkedin className="text-blue-500 text-2xl" />
            <a
              href="https://www.linkedin.com/in/roberto-alvarado-dev-react/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white"
            >
              LinkedIn
            </a>
          </div>

          <div className="flex items-center gap-3">
            <FaEnvelope className="text-red-500 text-2xl" />
            <a
              href="mailto:ralvaradobeltran5@gmail.com"
              className="text-gray-300 hover:text-white"
            >
              ralvaradobeltran5@gmail.com
            </a>
          </div>

          <div className="flex items-center gap-3">
            <FaPhone className="text-green-500 text-2xl" />
            <span className="text-gray-300">70248234 - 68529109</span>
          </div>

          <div className="flex items-center gap-3">
            <FaGithub className="text-gray-300 text-2xl" />
            <a
              href="https://github.com/Roberto640Alvarado"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white"
            >
              GitHub
            </a>
          </div>

          <div className="flex items-center gap-3">
            <FaInstagram className="text-pink-500 text-2xl" />
            <a
              href="https://www.instagram.com/roberto640alvarado/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

