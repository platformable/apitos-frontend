import Link from "next/link";

const Header = () => {
  return (
    <header className="py-3 px-5 md:px-7 lg:px-24 md:py-5">
      <div className="flex  justify-start gap-5 flex-row md:justify-between md:items-center">
        <div className="flex gap-5 items-start md:items-center">
          <img src="/API_symbol.svg" alt="" />
          <Link href="/wizard">
            <h1 className="font-bold  max-[600px]:text-xl">FACT WIZARD</h1>
          </Link>
        </div>
        <div className="flex gap-5 items-start md:items-center">
          <img src="/API_symbol.svg" alt="" />
          <Link href="/">
            <h1 className="font-bold max-[600px]:text-xl ">
              APIToS <span className="font-medium">Project</span>
            </h1>
          </Link>
        </div>
      </div>
    </header>
  );
};
export default Header;
