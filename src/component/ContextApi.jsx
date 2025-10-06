import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'

let ApiData = createContext()

const ContextApi = ({children}) => {
  let [info,setInfo] = useState([])

  let getData = ()=>{
    axios.get("http://localhost:3001/products").then((response)=>{
    setInfo(response.data);
    
    })
  }

  useEffect(()=>{
    getData()
  },[])


  return (
    <ApiData.Provider value={info}>{children}</ApiData.Provider>
  )
}

export {ContextApi, ApiData}