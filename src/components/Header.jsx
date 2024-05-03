import headerBG from "../assets/images/more/15.jpg";
import logo from "../assets/images/more/logo1.png";
const Header = () => {
  return (
    <div
      className="max-h-28 flex items-center justify-center gap-4 py-5"
      style={{ backgroundImage: `url(${headerBG})` }}
    >
      <img className="w-20" src={logo} alt="Espresso Emporium" />
      <h1 className="text-6xl text-white font-extrabold">Espresso Emporium</h1>
    </div>
  );
};
export default Header;
