import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../Reducer/ProductReducer";
import axios from "axios";

// first step 
const AppContext = createContext()

// 4th step is fetch api 

const api = "http://localhost:3000/products"

const inintialState = {
    isLoading : false,
    isError : false,
    products : [],
    featureProducts : [],
    isSingleLoading : false,
    singleProduct : {}
}

// 2nd step 

const AppProvider = ({children})=>{

    const [state,dispath] = useReducer(reducer, inintialState)

    const getProduct = async (url)=>{
      dispath({type:"SET_LOADING"})

      try{
        const res = await axios.get(url)
        const products = await res.data;
        dispath({type: "SET_DATA", payload: products})
      } catch(error){
        dispath({type:"API_ERROR"})
      }
    }

    useEffect(()=>{
    getProduct(api)},[])

  // for single product 
  const getSingleProduct = async (url)=>{
    dispath({type: "SET_SINGLE_LOADING"})
    try {
      const res = await axios.get(url)
      const singleProduct = await res.data;
      dispath({type: "SET_SINGLE_DATA" , payload : singleProduct})      
    } catch (error) {
      dispath({type:"SET_SINGLE__ERROR"})
    }
  }

 return (<AppContext.Provider value={{...state, getSingleProduct}}>{children}</AppContext.Provider>)
}

// 3rd step 

const useProductContext = ()=>{
    return useContext(AppContext)
}
export {AppProvider, useProductContext};