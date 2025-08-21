import { createContext, type ReactNode } from "react";
import useCars from "../hooks/useCars";
import type CarDescription from "../types/CarDescription";

interface CarContextData {
  cars: CarDescription[];
  loading: boolean;
  errorMessage: string | null;
}

interface Props {
  children: ReactNode;
}

const CarContext = createContext<CarContextData>({} as CarContextData);

const CarProvider = ({ children }: Props) => {
  const { cars, loading, errorMessage } = useCars();
  return (
    <CarContext.Provider value={{ cars, loading, errorMessage }}>
      {children}
    </CarContext.Provider>
  );
};

export { CarContext, CarProvider };
