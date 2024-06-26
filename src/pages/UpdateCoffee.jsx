import { Link, useLoaderData } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const editCoffee = useLoaderData();
  console.log(editCoffee);
  const { name, chef, price, taste, category, details, photo } = editCoffee;

  const handleUpdateCoffee = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const chef = form.chef.value;
    const price = form.price.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const updateCoffee = { name, chef, price, taste, category, details, photo };
    console.log(updateCoffee);

    try {
      const response = await fetch(
        `http://localhost:3333/coffee/${editCoffee._id}`,
        {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(updateCoffee),
        }
      );
      const data = await response.json();
      //   console.log(data);
      if (data.modifiedCount > 0) {
        Swal.fire({
          title: "Success!",
          text: "Update coffee successfully!",
          icon: "success",
          confirmButtonText: "Cool",
        });
      }
    } catch (error) {
      console.error("Error", error);
      Swal.fire({
        title: "Error!",
        text: "An error occurred while updating the coffee. Please try again later.",
        icon: "error",
        confirmButtonText: "Okay",
      });
    }
  };

  return (
    <div className="text-center my-8 mx-auto max-w-6xl px-3">
      <div className="py-8">
        <Link className="flex items-center gap-4" to="/">
          <FaArrowLeft /> <span>Back to home</span>
        </Link>
      </div>
      <div className=" mx-auto p-12 md:py-12 md:px-28 bg-[#F4F3F0]">
        <h2 className="text-3xl font-bold capitalize my-8">
          Update Existing Coffee Details
        </h2>
        <p className="px-16">
          It is a long established fact that a reader will be distraceted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here.
        </p>
        <form onSubmit={handleUpdateCoffee} className="mt-10">
          {/* Form first row */}
          <div className="flex gap-5 mb-5 flex-col md:flex-row">
            <div className="form-control w-full">
              <label className="label">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter coffee name..."
                defaultValue={name}
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control w-full">
              <label className="label">Chef</label>
              <input
                type="text"
                id="chef"
                name="chef"
                placeholder="Enter coffee chef..."
                defaultValue={chef}
                className="input input-bordered"
                required
              />
            </div>
          </div>
          {/* Form second row */}
          <div className="flex gap-5 mb-5 flex-col md:flex-row">
            <div className="form-control w-full">
              <label className="label">Price</label>
              <input
                type="text"
                id="price"
                name="price"
                placeholder="Enter coffee price..."
                defaultValue={price}
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control w-full">
              <label className="label">Taste</label>
              <input
                type="text"
                id="taste"
                name="taste"
                placeholder="Enter coffee taste..."
                defaultValue={taste}
                className="input input-bordered"
                required
              />
            </div>
          </div>
          {/* Form third row */}
          <div className="flex gap-5 mb-5 flex-col md:flex-row">
            <div className="form-control w-full">
              <label className="label">Category</label>
              <input
                type="text"
                id="category"
                name="category"
                placeholder="Enter coffee category..."
                defaultValue={category}
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control w-full">
              <label className="label">Details</label>
              <input
                type="text"
                id="details"
                name="details"
                placeholder="Enter coffee details..."
                defaultValue={details}
                className="input input-bordered"
                required
              />
            </div>
          </div>
          {/* Form forth row */}
          <div className="form-control mb-5">
            <label className="label">Photo</label>
            <input
              type="text"
              id="photo"
              name="photo"
              placeholder="Enter photo url..."
              defaultValue={photo}
              className="input input-bordered"
              required
            />
          </div>
          {/* form submit button */}
          <div className="form-control mt-6">
            <button className="btn bg-[#D2B48C] text-black hover:text-white">
              Update Coffee
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default UpdateCoffee;
