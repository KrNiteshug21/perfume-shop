import { useEffect, useState } from "react";

const uri = "http://localhost:5000/api";

export const getProducts = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isError, setIsError] = useState(false);

  console.log("data", data);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${uri}/products`);
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error);
        setIsError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error, isError };
};

export const getProductById = (id) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${uri}/products/${id}`);
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error);
        setIsError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  return { data, loading, error, isError };
};
