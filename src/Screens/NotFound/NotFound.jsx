import { Link } from "react-router-dom";
import NotFoundImage from "../../assets/Images/Notfound.png";

const NotFound = () => {
  return (
    <section>
      <div className="container">
        <div className="app">
          <h1 className="notFoundError">
            <img
              className="notFoundImage"
              src={NotFoundImage}
              alt="notfoundimg"
            />
            Page Not Found!
            <Link to="/">Go back to Home</Link>
          </h1>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
