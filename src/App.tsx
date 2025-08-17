import "./App.css";
import Header from "./layout/Header";
import Section from "./layout/Section";
import Footer from "./layout/Footer";
import Main from "./layout/Main";

function App() {
  return (
    <>
      <Header />
      <Main className={"main-content-wrapper"}>
        <Section />
      </Main>
      <Footer />
    </>
  );
}

export default App;
