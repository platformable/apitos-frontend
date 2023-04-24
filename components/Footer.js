const Footer = ({footerText}) => {
  return (
    <section role="footer" className="bg-black py-10 text-white px-5 md:px-7 lg:px-24">
      <div className="grid md:grid-cols-3 items-start">
        <div className="flex gap-5 items-center">
          <img src="/API_symbol-white.svg" alt="Fact icon" width={40}/>
          <h4 className="font-bold">APIToS</h4>
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
          {/* <div>
            <img src="" alt="" />
            <img src="" alt="" />
          </div> */}
          <small className="">
            {footerText}
          </small>
        </div>
      </div>
    </section>
  );
};
export default Footer;
