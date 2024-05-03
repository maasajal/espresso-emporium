import footerBottomImg from "../assets/images/more/24.jpg";
import footerTopImg from "../assets/images/more/13.jpg";
import logo from "../assets/images/more/logo1.png";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdCall, MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="mt-28">
      <footer
        className="pt-28 pb-10 text-[#1B1A1A] px-5"
        style={{ backgroundImage: `url(${footerTopImg})` }}
      >
        <div className="footer max-w-7xl mx-auto">
          <aside>
            <img className="w-20" src={logo} alt="Espresso Emporium" />
            <h1 className="text-4xl font-extrabold">Espresso Emporium</h1>
            <p className="leading-8 max-w-xl">
              Always ready to be your friend. Come & Contact with us to share
              your memorable moments, to share with your best companion.
            </p>
            <div className="grid grid-flow-col gap-4 text-xl py-4">
              <a>
                <FaFacebook />
              </a>
              <a>
                <FaTwitter />
              </a>
              <a>
                <FaInstagram />
              </a>
              <a>
                <FaLinkedin />
              </a>
            </div>
            <div className="footer">
              <nav>
                <h6 className="footer-title">Get in Touch</h6>
                <a className="link link-hover flex items-center gap-2">
                  <MdCall /> +88 01533 333 333
                </a>
                <a className="link link-hover flex items-center gap-2">
                  <MdEmail /> info@gmail.com
                </a>
                <a className="link link-hover flex items-center gap-2">
                  <FaLocationDot /> King Street, Tampere, Finland
                </a>
              </nav>
            </div>
          </aside>
          <div className="w-full">
            <h2 className="text-3xl font-bold mb-5">Connect with Us</h2>
            <form className="space-y-6 w-full">
              <div className="form-control">
                <input
                  type="text"
                  placeholder="Name"
                  className="input"
                  required
                />
              </div>
              <div className="form-control">
                <input
                  type="email"
                  placeholder="Email"
                  className="input"
                  required
                />
              </div>
              <div className="form-control">
                <textarea
                  type="email"
                  placeholder="Message"
                  className="textarea"
                  required
                />
              </div>
              <div className="mt-6">
                <button className="btn btn-outline rounded-full">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </footer>
      <footer
        className="footer footer-center p-4 text-white"
        style={{ backgroundImage: `url(${footerBottomImg})` }}
      >
        <aside className="bgCenter">
          <p>Copyright Espresso Emporium ! All Rights Reserved</p>
        </aside>
      </footer>
    </div>
  );
};
export default Footer;
