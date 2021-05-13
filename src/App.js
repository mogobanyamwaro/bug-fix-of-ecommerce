import React from 'react'
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Default from "./components/Default";
import Cart from "./components/Cart";
import Modal from "./components/Modal";

function App() {
    return (
       <React.Fragment>
           <Navbar/>
           <Switch>
               <Route exact path ='/'>
                    <ProductList/>
               </Route>
               <Route  path ='/details'>
                    <Details/>
               </Route>
               <Route  path ='/cart'>
                   <Cart/>
               </Route>
               <Route component ={Default}/>
                   
           </Switch>
           {/* <Modal/> */}
       </React.Fragment>
    )
}

export default App
