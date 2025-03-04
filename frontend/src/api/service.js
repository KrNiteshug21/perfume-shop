import { useEffect, useState } from "react";

export const uri = "http://localhost:5000/api";
const token = localStorage.getItem("token");

export const getProducts = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const options = {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        };
        const response = await fetch(`${uri}/products`, options);
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
        const options = {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        };
        const response = await fetch(`${uri}/products/${id}`, options);
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

export const addReview = async (review) => {
  try {
    const response = await fetch(`${uri}/reviews`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`, // Add token to the header
      },
      body: JSON.stringify(review),
    });

    const result = await response.json();
    return result;
  } catch (error) {
    return error;
  }
};

export const updateProduct = async (id, reviewId) => {
  try {
    const response = await fetch(`${uri}/products/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`, // Add token to the header
      },
      body: JSON.stringify({ id: reviewId }),
    });

    const result = await response.json();
    return result;
  } catch (error) {
    return error;
  }
};
