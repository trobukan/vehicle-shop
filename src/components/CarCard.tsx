interface CarDescription {
    model: string;
    make: string;
    price: string;
    image: string;
}

interface Props {
    car: CarDescription
}

const CarCard = ({car}: Props) => {
  return (
    <div>
      <img src={car.image} alt="" />
      <h3>{car.model} {car.make}</h3>
      <p>&dollar; {car.price}</p>
    </div>
  )
}

export default CarCard
