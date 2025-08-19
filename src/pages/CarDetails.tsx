import { Link, useParams } from "react-router-dom";
import Nav from "../layout/Nav";

import "../styles/CarDetails.css";
import "../styles/ErroPage.css";
import CARS from "../api/data";

const CarDetails = () => {
  const { id } = useParams();
  const car = CARS.find((c) => c.id == id);

  if (!car) {
    return (
      <>
        <Nav />
        <div className="error-container">
          <h1 className="error-container__title">Car Not Found</h1>
          <p className="error-container__text">
            The car you're looking for doesn't exist or the page has been
            reloaded.
          </p>
          <Link to={"/"} className="link-button">
            Return to Home Page
          </Link>
        </div>
      </>
    );
  }
  const { model, make, price, image } = car;

  return (
    <>
      <Nav />
      <div className="car-details-container">
        <div className="car-details__card">
          <h2>
            {make} {model}
            <img
              className="car-details__image"
              src={image}
              alt={`${make} ${model}`}
            />
          </h2>
          <div className="car-details__info">
            <p>
              <strong>Price:</strong> ${price}
            </p>
            <p>
              <strong>Model:</strong> {model}
            </p>
            <p>
              <strong>Make:</strong> {make}
            </p>
          </div>
          <div className="car-details__button">
            <Link to={"/"} className="link-button">
              Return to Home Page
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarDetails;
