import CarCard from "./CarCard";
import type CarDescription from "../types/CarDescription";
import { v4 as uuidv4 } from "uuid";

const CARS: CarDescription[] = [
  {
    id: uuidv4(),
    make: "Toyota",
    price: "30K",
    model: "Camry",
    image: "https://placehold.co/400x200/orange/white",
  },
  {
    id: uuidv4(),
    make: "Honda",
    price: "32K",
    model: "Civic",
    image: "https://placehold.co/400x200/red/white",
  },
  {
    id: uuidv4(),
    make: "Ford",
    price: "45K",
    model: "Mustang",
    image: "https://placehold.co/400x200/blue/white",
  },
   {
    id: uuidv4(),
    make: "Ford",
    price: "45K",
    model: "Mustang",
    image: "https://placehold.co/400x200/blue/white",
  },
   {
    id: uuidv4(),
    make: "Ford",
    price: "45K",
    model: "Mustang",
    image: "https://placehold.co/400x200/blue/white",
  },
   {
    id: uuidv4(),
    make: "Ford",
    price: "45K",
    model: "Mustang",
    image: "https://placehold.co/400x200/blue/white",
  },

   {
    id: uuidv4(),
    make: "Ford",
    price: "45K",
    model: "Mustang",
    image: "https://placehold.co/400x200/blue/white",
  },
   {
    id: uuidv4(),
    make: "Ford",
    price: "45K",
    model: "Mustang",
    image: "https://placehold.co/400x200/blue/white",
  },
  
];
const CarGrid = () => {
  return (
    <div className="car-container">
        {CARS.map((car) => (
            <CarCard car={car} key={car.id}/>
        ))}
    </div>
  );
};

export default CarGrid;
