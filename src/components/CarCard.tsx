import type CarDescription from "../types/CarDescription";

interface Props {
  car: CarDescription;
}

const CarCard = ({ car }: Props) => {
  const { image, model, make, price } = car;
  return (
    <div className="car-card">
      <img src={image} alt="" />
      <h3>
        {model} {make}
      </h3>
      <p>&#36;{price}</p>
    </div>
  );
};

export default CarCard;
