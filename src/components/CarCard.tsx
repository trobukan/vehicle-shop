import type CarDescription from "../types/CarDescription";
import { Link } from "react-router-dom";

interface Props {
  car: CarDescription;
}

const CarCard = ({ car }: Props) => {
  const { image, model, make, price } = car;

  return (
    <Link
      to={`cars/${car.id}`}
      state={{ carData: car }}
      className="car-card shadow-border"
    >
      <img className="car-card__image" src={image} alt="" />
      <h3 className="car-card__title">
        {model} {make}
      </h3>
      <p className="car-card__text">&#36;{price}</p>
    </Link>
  );
};

export default CarCard;
