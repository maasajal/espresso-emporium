import bannerImg from "../assets/images/more/3.png";
const Banner = () => {
  return (
    <div
      className="hero flex items-center justify-between"
      style={{
        backgroundImage: `url(${bannerImg})`,
      }}
    >
      <div></div>
      <div className="hero-content text-white py-48 md:py-72">
        <div className="max-w-3xl mr-52">
          <h1 className="mb-5 text-4xl font-bold">
            Would you like a Cup of Delicious Coffee?
          </h1>
          <p className="mb-5 leading-8 py-5">
            It's coffee time - Sip & Savor - Relaxation in every sip! Get the
            nostalgia back!! Your companion of every moment!!! Enjoy the
            beautiful moments and make them memorable.
          </p>
          <button className="btn bg-[#E3B577]">Learn More</button>
        </div>
      </div>
    </div>
  );
};
export default Banner;
