import { FaEdit, FaEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffeeCollection, setCoffee }) => {
  const { _id, name, chef, taste, photo } = coffee;

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "Are you sure that you want to delete it?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      try {
        const response = await fetch(`http://localhost:3333/coffee/${id}`, {
          method: "DELETE",
        });
        const data = await response.json();
        console.log(data);

        if (data.deletedCount > 0) {
          const remainingCoffee = await coffeeCollection.filter(
            (cof) => cof._id !== id
          );
          setCoffee(remainingCoffee);
          Swal.fire({
            title: "Good Lick !!!",
            text: "Coffee deleted successfully!",
            icon: "success",
            confirmButtonText: "OK",
          });
        }
      } catch (error) {
        console.error("Error", error);
        Swal.fire({
          title: "Error!",
          text: "An error occurred while deleting the coffee. Please try again later.",
          icon: "error",
          confirmButtonText: "Okay",
        });
      }
    }
  };
  return (
    <>
      <div className="card card-side bg-base-100 shadow-xl">
        <figure className="w-1/4 p-2">
          <img src={photo} alt={name} />
        </figure>
        <div className="card-body w-full">
          <div className="flex justify-between items-center">
            <div className="space-y-4">
              <p>
                <strong>Name: </strong>
                {name}
              </p>
              <p>
                <strong>Chef: </strong>
                {chef}
              </p>
              <p>
                <strong>Taste: </strong>
                {taste}
              </p>
            </div>
            <div className="card-actions justify-end">
              <div className="join join-vertical space-y-4">
                <Link to={`/coffee/${_id}`}>
                  <button className="btn bg-[#D2B48C]">
                    <FaEye className="text-white text-2xl" />
                  </button>
                </Link>
                <Link to={`/updateCoffee/${_id}`}>
                  <button className="btn bg-[#3C393B]">
                    <FaEdit className="text-white text-2xl" />
                  </button>
                </Link>
                <button
                  onClick={() => handleDelete(_id)}
                  className="btn bg-[#EA4744]"
                >
                  <MdDelete className="text-white text-2xl" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CoffeeCard;
