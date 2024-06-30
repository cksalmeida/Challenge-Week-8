import CompassLogo from "../assets/compassuol_logo.svg";

const Footer: React.FC = () => {
  return (
    <footer
      style={{ backgroundColor: "#090b13" }}
      className="w-430px py-8 items-center md:w-1512px z-[1000] relative"
    >
      <div className="container mx-auto p-3 pb-0 flex flex-col items-center">
        <div>
          <img
            src={CompassLogo}
            alt="CompassUol"
            className="w-200 mx-auto mb-4"
          />
        </div>
        <div className="container flex p-3 m-1 mx-auto text-center justify-center text-white font-lato">
          <ul className="flex flex-row flex-wrap gap-2 justify-center text-xs md:flex md:flex-wrap md:gap-5 md:text-xs">
            <li>
              <a href="#">Política de privacidade</a>
            </li>
            <li>
              <a href="#">Acordo de inscrição</a>
            </li>
            <li>
              <a href="#">Ajuda</a>
            </li>
            <li>
              <a href="#">Dispositivos compatíveis</a>
            </li>
            <li>
              <a href="#">Publicidade personalizada</a>
            </li>
          </ul>
        </div>
        <div className="container flex mb-8 mx-auto justify-center text-center text-white text-xs font-lato md:mx-auto md:max-w-sm">
          <p>
            Compass Video é um serviço por inscrição paga, seu conteúdo está
            sujeito a disponibilidade. O serviço Compass Video é comercializado
            por Disney DTC Latam, Inc., 2400 W Alameda AVE., Burbank CA 91521.
          </p>
        </div>
        <div className="container mx-auto text-center text-white text-xs font-lato md:mx-auto">
          <p>© Compass Video. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
