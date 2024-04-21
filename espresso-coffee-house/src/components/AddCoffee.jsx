import Navbar from "./Navbar";

const AddCoffee = () => {
  return (
    <div className="text-center my-8 mx-auto max-w-6xl">
      <div>
        <h1 className="text-5xl font-extrabold">Espresso Emporium</h1>
        <Navbar />
      </div>
      <h2 className="text-3xl font-bold">Add a Coffee</h2>
    </div>
  );
};
export default AddCoffee;
