const Header = () => {

return (
    <header className="py-3 px-5 md:px-7 lg:px-24">
        <div className="flex flex-col justify-start gap-5 md:flex-row md:justify-between md:items-center">
          <div className="flex gap-5">
            <img src="/API_symbol.svg" alt="" />
            <h1 className="font-bold">FACT</h1>
          </div>
          <div className="flex gap-5">
            <img src="/API_symbol.svg" alt="" />
            <h1 className="font-bold">APIToS</h1>
          </div>
        </div>
      </header>
)

}
export default Header;