// import React, { useState, useContext, useReducer, useEffect } from 'react'

// import  {storeProducts, detailProduct} from './data'
// import reducer from './reducer'
// const AppContext = React.createContext()

// // const initialState ={
// //     detailProduct:detailProduct,
// //     cart:[],
// //     modalProduct:detailProduct
// // }
// const AppProvider=({children}) =>{
//     const [products,setProducts] = useState(storeProducts)
//     // const [modalOpen,setModalOpen] = useState(false)
//     // const [state,dispatch] = useReducer(reducer,initialState)

//     const handleDetail  = (id)=>{
//         console.log('the detail is being handled'+id)
//     }

//     const addToCart = (id)=>{
//         console.log('added to cart' +id)
//     }

//     return (
//         <AppContext.Provider value ={{
//             // ...state,
//             // handleDetail,
//             // addToCart,
//             products
//         }}>
//                 {children}
//         </AppContext.Provider>
//     )
// }
// export const useGlobalContext =()=>{
//     return useContext(AppContext)
// }

// export { AppContext, AppProvider }



import React, { useState, useContext, useReducer, useEffect } from 'react'
import  {storeProducts, detailProduct} from './data'

import reducer from './reducer'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN

const AppContext = React.createContext()


export  function AppProvider({ children }){
//   const [state, dispatch] = useReducer(reducer, initialState)
    const [products,setProducts] = useState(storeProducts)



  return (
    <AppContext.Provider
      value={{
       
        products,
      }}
    >
      {children}
    </AppContext.Provider>
  )
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export  { AppContext }

