import "./App.css";
import Header from "./components/layout/Header";
import Section from "./components/layout/Section";
import Footer from "./components/layout/Footer";
import Main from "./components/layout/Main";

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
