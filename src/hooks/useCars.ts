import { useEffect, useState } from "react";

const useCars = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setErrorMessage("");
      try {
        const response = await fetch(import.meta.env.VITE_API_BASE);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        setCars(result);
      } catch (err) {
        setErrorMessage("Failed to fetch data");
        console.error("Error fetching data ", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { cars, loading, errorMessage};
};

export default useCars;
