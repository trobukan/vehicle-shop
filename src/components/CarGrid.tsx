import CarCard from "./CarCard";
import type CarDescription from "../types/CarDescription";

interface Props {
  cars: CarDescription[]
}

const CarGrid = ({cars}: Props) => {
  return (
    <div className="car-grid">
      {cars.map((car) => (
        <CarCard car={car} key={car.id} />
      ))}
    </div>
  );
};

export default CarGrid;
