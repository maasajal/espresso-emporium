import { Link } from "react-router-dom";
import error404 from "../assets/images/404/404.gif";
import { FaArrowLeft } from "react-icons/fa";

const ErrorPage = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="py-8">
        <Link className="flex items-center gap-4 justify-center" to="/">
          <FaArrowLeft /> <span>Back to home</span>
        </Link>
      </div>
      <img className="mx-auto" src={error404} alt="404 - Page not found!!!" />
    </div>
  );
};
export default ErrorPage;
