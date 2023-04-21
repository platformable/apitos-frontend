const Footer = ({footerText}) => {
  return (
    <section role="footer" className="bg-black py-10 text-white">
      <div className="grid md:grid-cols-3 container mx-auto items-start">
        <div className="flex gap-5 items-center">
          <img src="/API_symbol-white.svg" alt="Fact icon" width={40}/>
          <h2 className="font-bold">APIToS</h2>
        </div>

        <ul className="text-xl">
          <li>
            <a href="#">Legal information</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
        </ul>
        <div className="flex flex-col gap-5">
          <div>
            <img src="" alt="" />
            <img src="" alt="" />
          </div>
          <p className="text-base">
            {footerText}
          </p>
        </div>
      </div>
    </section>
  );
};
export default Footer;
