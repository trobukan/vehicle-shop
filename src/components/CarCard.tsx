interface CarDescription {
    model: string;
    make: string;
    price: string;
}

interface Props {
    imageSource: string;
    car: CarDescription
}

const CarCard = ({car, imageSource}: Props) => {
  return (
    <div>
      <img src={imageSource} alt="" />
      <h3>{car.model} {car.make}</h3>
      <p>&dollar; {car.price}</p>
    </div>
  )
}

export default CarCard
