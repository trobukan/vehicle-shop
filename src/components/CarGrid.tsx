import CarCard from "./CarCard";
import { useCarsContext } from "../hooks/useCarsContext";

const CarGrid = () => {
  const { cars } = useCarsContext();

  if (cars.length === 0) {
    return <div>No cars found</div>;
  }
  return (
    <>
      <div className="car-grid">
        {cars.map((car) => (
          <CarCard car={car} key={car.id} />
        ))}
      </div>
    </>
  );
};

export default CarGrid;
