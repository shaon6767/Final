// import axios from 'axios'
// import React, { createContext, useEffect, useState } from 'react'

// let ApiData = createContext()

// const ContextApi = ({children}) => {
//   let [info,setInfo] = useState([])

//   let getData = ()=>{
//     axios.get("https://my-furniture-4lvu.onrender.com/products").then((response)=>{
//     setInfo(response.data);
    
//     })
//   }

//   useEffect(()=>{
//     getData()
//   },[])


//   return (
//     <ApiData.Provider value={{products: info }}>{children}</ApiData.Provider>
//   )
// }

// export {ContextApi, ApiData}
import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

let ApiData = createContext();

const ContextApi = ({ children }) => {
  let [info, setInfo] = useState([]);

  let getData = () => {
    axios
      .get("/db.json") // 👈 fetches directly from your public folder
      .then((response) => {
        // assuming your db.json looks like { "products": [...] }
        setInfo(response.data.products || []);
      })
      .catch((error) => {
        console.error("Error loading db.json:", error);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <ApiData.Provider value={{ products: info }}>
      {children}
    </ApiData.Provider>
  );
};

export { ContextApi, ApiData };
