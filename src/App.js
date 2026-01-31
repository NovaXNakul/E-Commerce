import React from "react";
import ReactDOM from "react-dom/client";
import {Navbar} from "./components/NavbarComp";
import {Cart} from "./components/Cart"; 
// import {productData} from "./utils/ProductData";
// import Product from "./components/Product";


const root=ReactDOM.createRoot(document.getElementById("root"));

const Componenet=()=>{
    return (
       <div>
         <Navbar/>
         <Cart/>
       </div>       
    )
}
console.log("Navbar type:", typeof Navbar);
console.log("Cart type:", typeof Cart);


root.render(<Componenet/>);