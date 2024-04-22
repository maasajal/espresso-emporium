import { FaEdit, FaEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const CoffeeCard = ({ coffee }) => {
  const { _id, name, chef, taste, photo } = coffee;

  return (
    <>
      <div className="card card-side bg-base-100 shadow-xl">
        <figure className="w-1/4 p-2">
          <img src={photo} alt={name} />
        </figure>
        <div className="card-body w-full">
          <div className="flex justify-between items-center">
            <div className="space-y-4">
              <p><strong>Name: </strong>{name}</p>
              <p><strong>Chef: </strong>{chef}</p>
              <p><strong>Taste: </strong>{taste}</p>
            </div>
            <div className="card-actions justify-end">
              <div className="join join-vertical space-y-4">
                <button className="btn  bg-[#D2B48C]">
                  <FaEye className="text-white text-2xl" />
                </button>
                <button className="btn bg-[#3C393B]">
                  <FaEdit className="text-white text-2xl" />
                </button>
                <button className="btn bg-[#EA4744]">
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
