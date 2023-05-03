const Header = () => {

return (
    <header className="py-3 px-5 md:px-7 lg:px-24 md:py-5">
        <div className="flex  justify-start gap-5 flex-row md:justify-between md:items-center">
          <div className="flex gap-5 items-start md:items-center">
            <img src="/API_symbol.svg" alt="" />
            <h1 className="font-bold  max-[600px]:text-xl">FACT WIZARD</h1>
          </div>
          <div className="flex gap-5 items-start md:items-center">
            <img src="/API_symbol.svg" alt="" />
           <a href="/apitos-project">
           <h1 className="font-bold max-[600px]:text-xl ">APIToS <span className="font-medium">Project</span></h1>
           </a>
          </div>
        </div>
      </header>
)

}
export default Header;