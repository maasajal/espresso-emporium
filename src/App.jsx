import { Link, useLoaderData } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import CoffeeCard from "./components/CoffeeCard";
import { useState } from "react";
import { BsCupHotFill } from "react-icons/bs";
import Banner from "./components/Banner";
import cup1 from "./assets/images/cups/Rectangle 9.png";
import cup2 from "./assets/images/cups/Rectangle 10.png";
import cup3 from "./assets/images/cups/Rectangle 11.png";
import cup4 from "./assets/images/cups/Rectangle 12.png";
import cup5 from "./assets/images/cups/Rectangle 13.png";
import cup6 from "./assets/images/cups/Rectangle 14.png";
import cup7 from "./assets/images/cups/Rectangle 15.png";
import cup8 from "./assets/images/cups/Rectangle 16.png";

function App() {
  const coffees = useLoaderData();
  const [coffeeCollection, setCoffee] = useState(coffees);
  const reversedCoffee = [...coffeeCollection].reverse();

  return (
    <div>
      <Banner />
      <div className="mx-auto max-w-6xl px-3">
        <div className="py-16">
          <div className="text-center my-5">
            <p>--- Sip & Savor ---</p>
            <h2 className="text-6xl text-[#331A15] my-8">
              Our Popular Products
            </h2>
            <Link to="/addCoffee">
              <button className="btn bg-[#E3B577] border-2 border-black text-white text-lg">
                Add Coffee <BsCupHotFill className="text-black" />{" "}
              </button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {reversedCoffee.map((coffee) => (
              <CoffeeCard
                key={coffee._id}
                coffee={coffee}
                setCoffee={setCoffee}
                coffeeCollection={coffeeCollection}
              />
            ))}
          </div>
        </div>
        <div className="py-16">
          <div className="text-center my-5">
            <p>Follow Us Now</p>
            <h2 className="text-6xl text-[#331A15] my-8">
              Follow on Instagram
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-auto">
            <img src={cup1} alt="Coffee cup" />
            <img src={cup2} alt="Coffee cup" />
            <img src={cup3} alt="Coffee cup" />
            <img src={cup4} alt="Coffee cup" />
            <img src={cup5} alt="Coffee cup" />
            <img src={cup6} alt="Coffee cup" />
            <img src={cup7} alt="Coffee cup" />
            <img src={cup8} alt="Coffee cup" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
