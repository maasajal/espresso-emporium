import { Link, useLoaderData } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import CoffeeCard from "./components/CoffeeCard";
import { useState } from "react";
import { BsCupHotFill } from "react-icons/bs";

function App() {
  const coffees = useLoaderData();
  const [coffeeCollection, setCoffee] = useState(coffees);
  const reversedCoffee = [...coffeeCollection].reverse();

  return (
    <div className="mx-auto max-w-6xl">
      <div className="text-center my-8">
        <h1 className="text-5xl font-extrabold">Espresso Emporium</h1>
        <Navbar />
      </div>
      <div className="">
        <div className="text-center my-5">
          <p>--- Sip & Savor ---</p>
          <h2 className="text-6xl text-[#331A15] my-8">Our Popular Products</h2>
          <Link to="/addCoffee">
            <button className="btn bg-[#E3B577] border-2 border-black text-white text-lg">Add Coffee <BsCupHotFill className="text-black" /> </button>
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
    </div>
  );
}

export default App;
