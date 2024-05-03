import bannerImg from "../assets/images/more/3.png";
import img1 from "../assets/images/icons/1.png";
import img2 from "../assets/images/icons/2.png";
import img3 from "../assets/images/icons/3.png";
import img4 from "../assets/images/icons/4.png";
const Banner = () => {
  return (
    <div>
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
      <div className="bg-[#ECEAE3] py-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="space-y-5">
            <div>
              <img src={img1} alt="" />
            </div>
            <div className="space-y-5">
              <h2 className="card-title">Awesome Aroma</h2>
              <p className="leading-8">
                You will definitely be a fan of the design & aroma of your
                coffee
              </p>
            </div>
          </div>
          <div className="space-y-5">
            <div>
              <img src={img2} alt="" />
            </div>
            <div className="space-y-5">
              <h2 className="card-title">High Quality</h2>
              <p className="leading-8">
                We served the coffee to you maintaining the best quality
              </p>
            </div>
          </div>
          <div className="space-y-5">
            <div>
              <img src={img3} alt="" />
            </div>
            <div className="space-y-5">
              <h2 className="card-title">Pure Grades</h2>
              <p className="leading-8">
                The coffee is made of the green coffee beans which you will love
              </p>
            </div>
          </div>
          <div className="space-y-5">
            <div>
              <img src={img4} alt="" />
            </div>
            <div className="space-y-5">
              <h2 className="card-title">Proper Roasting</h2>
              <p className="leading-8">
                Your coffee is brewed by first roasting the green coffee beans
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Banner;
