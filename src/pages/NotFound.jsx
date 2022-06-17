import { FaExclamationTriangle } from "react-icons/fa";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center mt-5">
      <FaExclamationTriangle size="5em" className="text-danger" />
      <h1>Oops!</h1>
      <p className="lead">Page not found.</p>
      <Link className="btn btn-primary" to="/">
        Go Back
      </Link>
    </div>
  );
};

export default NotFound;
