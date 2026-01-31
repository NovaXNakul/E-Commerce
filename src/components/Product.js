const Product = ({ product }) => {
  const { title, price, image, rating } = product;

  return (
    <div className="product">
      <img src={image} alt={title} />
      <h4>{title}</h4>
      <p>{price}</p>
      <p>⭐ {rating.rate} ({rating.count})</p>
    </div>
  );
};

export default Product;
