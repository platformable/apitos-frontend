const Footer = ({footerText}) => {
  return (
    <section role="footer" className="bg-black py-7 text-white px-5 md:px-7 lg:px-24">
      <div className="flex gap-28  items-center">
        <div className="flex gap-3 ">
          <img src="/API_symbol-white.svg" alt="Fact icon" width={40}/>
          <h3 className="font-bold">APIToS</h3>
        </div>

        {/* <ul className="text-xl">
          <li>
            <a href="#">Legal information</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
        </ul> */}
        <div className="flex flex-col pt-4 gap-5">
          <small className="">
            {footerText}
          </small>
        </div>
      </div>
    </section>
  );
};
export default Footer;
