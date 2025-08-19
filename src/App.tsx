import Home from "./pages/Home"
import CarDetailsPage from "./pages/CarDetails"
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="cars/:id" element={<CarDetailsPage/>}/>
    </Routes>
    </>
  );
}

export default App;
