import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

let ApiData = createContext();

const ContextApi = ({ children }) => {
  let [info, setInfo] = useState([]);

  let getData = () => {
    axios.get("/db.json").then((response) => {
        setInfo(response.data.products);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <ApiData.Provider value={{ products: info }}>{children}</ApiData.Provider>
  );
};

export { ContextApi, ApiData };
