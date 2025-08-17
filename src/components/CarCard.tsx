interface CarDescription {
    title: string;
    model: string;
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
      <h3>{car.title}</h3>
      <p>Model: {car.model} Price: {car.price}</p>
    </div>
  )
}

export default CarCard
