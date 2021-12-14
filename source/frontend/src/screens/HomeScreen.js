import "./HomeScreen.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// Components
import Product from "../components/Product";
import SlideShow from "../screens/SlideShow";

//Actions
import { getProducts as listProducts } from "../redux/actions/productActions";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const getProducts = useSelector((state) => state.getProducts);
  const { products, loading, error } = getProducts;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);



  return (
  <div className="homescreen">
    
      <div className="homescreen__title">
         <b>Celebrate the joy of giving this Christmas by using offer code : <a href="https://consumerist.com/consumermediallc.files.wordpress.com/2013/12/burger-king-spain-cheesemas.jpg"><u> MERRYCHEEZUS20 </u></a>and save upto 20% on your next order. Terms and Conditions apply.</b>
      </div>
      <div className = "homescreen__slides">
            <SlideShow/>
            <br/>
            <hr/>
      </div>

      <h2 align="center"><b>OUR PRODUCTS</b></h2>

      <div className="homescreen__products">
        {loading ? (
          <h2>Loading...</h2>
        ) : error ? (
          <h2>{error}</h2>
        ) : (
          products.map((product) => (
            <Product
              key={product._id}
              name={product.name}
              description={product.description}
              price={product.price}
              milk={product.milk}
              longdescription={product.longdescription}
              imageUrl={product.imageUrl}
              productId={product._id}
            />
          ))
        )}
  
      </div>
</div>
  );
};

export default HomeScreen;
