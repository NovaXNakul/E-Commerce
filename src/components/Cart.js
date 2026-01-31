import Product from "./Product";
import { productData } from "../utils/ProductData";

export const Cart = () => {
  return (
    <div className="Pcard">
      <div><button onClick={()=>{
        alert("Button Clicked")
      }}  style={{ color: 'black', border: 'none', padding: '10px 10px', borderRadius: '5px' }}>Top Rated</button></div>
      <div className="heading">
        
      </div>

      {/* ✅ Product grid container */}
      <div className="product-list">
        {productData.map((item) => (
          <Product key={item.id} product={item} />
        ))}
      </div>

    </div>
    
  );
};
