import { Link, useLoaderData } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const ViewCoffee = () => {
  const coffeeDetails = useLoaderData();
  const { name, chef, price, taste, category, details, photo } = coffeeDetails;
  return (
    <div className=" my-8 mx-auto max-w-6xl px-3">
      <div className="py-8">
        <Link className="flex items-center gap-4" to="/">
          {" "}
          <FaArrowLeft /> <span>Back to home</span>
        </Link>
      </div>
      <div className="md:py-12 md:px-28 bg-[#F4F3F0] flex items-center justify-between gap-8">
        <div className="w-1/2">
          <img src={photo} alt="" />
        </div>
        <div className="flex-grow space-y-3">
          <h2 className="text-2xl font-bold py-5">Niceties</h2>
          <p>
            <span>name: </span> {name}
          </p>
          <p>
            <span>Chef: </span> {chef}
          </p>
          <p>
            <span>Price: </span> {price}
          </p>
          <p>
            <span>Taste: </span> {taste}
          </p>
          <p>
            <span>Category: </span> {category}
          </p>
          <p>
            <span>Details: </span> {details}
          </p>
        </div>
      </div>
    </div>
  );
};
export default ViewCoffee;
