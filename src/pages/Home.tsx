import Header from "../layout/Header";
import Section from "../layout/Section";
import Footer from "../layout/Footer";
import Main from "../layout/Main";
import Nav from "../layout/Nav";
import CarGrid from "../components/CarGrid";

import CARS from "../api/data";
import "../styles/Home.css";

function Home() {
  return (
    <>
      <Header />
      <Nav />
      <Main className={"main-content-wrapper"}>
        <Section id="models">
          <h2> Featured Cars</h2>
          <CarGrid cars={CARS} />
        </Section>
      </Main>
      <Footer />
    </>
  );
}

export default Home;
