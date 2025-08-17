import CarGrid from "../components/CarGrid";

interface Props {
    className?: string;
}

const Section = ({className}:Props) => {
  return (
    <section className={className}>
        <CarGrid />
    </section>
  )
}

export default Section
