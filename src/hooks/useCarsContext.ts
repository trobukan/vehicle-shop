import { useContext } from "react";
import { CarContext } from "../contexts/CarContext";

export const useCarsContext = () => {
  const context = useContext(CarContext);
  if (!context) {
    throw new Error("useCarsContext must be used within a CarProvider");
  }

  return context;
};
