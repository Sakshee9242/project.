const ProductReducer = (state, action) => {
  // if(action.type==="SET_LOADING"){
  //     return {
  //         ...state,
  //         isLoading: true
  //     }
  // }
  // if(action.type==="API_ERROR"){
  //     return {
  //         ...state,
  //         isLoading: false,
  //         isError: true
  //     }
  // }
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      };
   
    case "SET_DATA": const featureData = action.payload.filter((curELe)=>{
        return curELe.featured === true
    });
    return {
        ...state,
        isLoading : false,
        products : action.payload,
        featureProducts : featureData,
    }
        
    case "API_ERROR":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

      // for singlr products 

      case "SET_SINGLE_LOADING":
      return {
        ...state,
        isSingleLoading : true
      };

      case "SET_SINGLE_DATA" : 
      return {
        ...state,
        isSingleLoading : false,
        singleProduct : action.payload
    };
    case "SET_SINGLE__ERROR":
      return {
        ...state,
        isSingleLoading: false,
        isError: true,
      };
      
    default:
      return state;
  }
};
export default ProductReducer;
