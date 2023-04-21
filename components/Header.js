const Header = () => {

return (
    <header className=" py-7">
        <div className="container mx-auto flex flex-col justify-start gap-5 md:flex-row md:justify-between md:items-center">
          <div className="flex gap-5">
            <img src="/API_symbol.svg" alt="" />
            <h1 className="text-6xl font-bold">FACT</h1>
          </div>
          <div className="flex gap-5">
            <img src="/API_symbol.svg" alt="" />
            <h1 className="text-6xl font-bold">APIToS</h1>
          </div>
        </div>
      </header>
)

}
export default Header;