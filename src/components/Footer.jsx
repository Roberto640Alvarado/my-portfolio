const Footer = () => {
  return (
    <footer className="w-full bg-black text-white py-6 mt-12 shadow-md">
      <div className="max-w-6xl mx-auto text-center">
        <p>
          &copy; {new Date().getFullYear()} Roberto Alvarado - Todos los
          derechos reservados
        </p>
      </div>
    </footer>
  );
};

export default Footer;
