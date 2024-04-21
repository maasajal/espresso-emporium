import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navLinks = [
    <>
      <li key="home">
        <NavLink to="/">Home</NavLink>{" "}
      </li>
      <li key="addCoffee">
        <NavLink to="/addCoffee">Add Coffee</NavLink>{" "}
      </li>
      <li key="updateCoffee">
        <NavLink to="/updateCoffee">Update Coffee</NavLink>{" "}
      </li>
    </>,
  ];
  return (
    <div>
      <nav className="p-8">
        <ul className="flex gap-8 items-center justify-center">{navLinks}</ul>
      </nav>
    </div>
  );
};
export default Navbar;
