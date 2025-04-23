import logo from "../../assets/logo.svg";
const bgPath = "/bg.svg";

export function Header() {
  return (
    <header
      style={{ backgroundImage: `url(${bgPath})` }}
      className={`text-blue bg-cover bg-center bg-no-repeat pt-18 pb-30 flex gap-4 flex-col items-center justify-center`}
    >
      <img src={logo} alt="" />
      <h1 className="text-size-2xl">GITHUB BLOG</h1>
    </header>
  );
}
