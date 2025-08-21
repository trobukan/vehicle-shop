import Header from "../layouts/Header";
import Section from "../layouts/Section";
import Footer from "../layouts/Footer";
import Main from "../layouts/Main";
import Nav from "../layouts/Nav";
import CarGrid from "../components/CarGrid";

import "../styles/Home.css";
function Home() {
  return (
    <>
      <Header />
      <Nav />
      <Main className={"main-content-wrapper"}>
        <Section id="models">
          <h2> Featured Cars</h2>
          <CarGrid />
        </Section>
      </Main>
      <Footer />
    </>
  );
}

export default Home;
