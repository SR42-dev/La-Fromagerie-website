import "./Product.css";
import { Link } from "react-router-dom";

const host = "http://localhost:5000"
const Product = ({ imageUrl, description, price, name, productId,milk }) => {
  return (
    <div className="product">
      <img src={imageUrl} alt={name}/>

      <div className="product__info">
        <p className="info__name"><b>{name}</b></p>
        <p className="info__description">Country of Origin : {description}</p>
        <p className ="info__description">Type of milk : {milk}</p>
        <p className="info__price">Rs {price}.00</p>
        <Link to={`/product/${productId}`} className="info__button"> View</Link>
      </div>
    </div>
  );
};

export default Product;
