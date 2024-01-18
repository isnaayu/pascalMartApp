/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3001/items")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Fetch error"));
  }, [url]);

  return [data];
};

export default useFetch;
