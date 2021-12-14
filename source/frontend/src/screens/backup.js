import "./HomeScreen.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Slide } from 'react-slideshow-image';

// Components
import Product from "../components/Product";

//Actions
import { getProducts as listProducts } from "../redux/actions/productActions";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const getProducts = useSelector((state) => state.getProducts);
  const { products, loading, error } = getProducts;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

//here

const slideImages = [
  {
    url: 'images/slide_2.jpg',
    caption: 'Slide 1'
  },
  {
    url: 'images/slide_3.jpg',
    caption: 'Slide 2'
  },
  {
    url: 'images/slide_4.jpg',
    caption: 'Slide 3'
  },
];

const Slideshow = () => {
    return (
      <div className="homescreen">
         <div className="homescreen__title">
         <b>Celebrate the joy of giving this Christmas by using offer code : <u> MERRYCHEEZUS20 </u>and save upto 20% on your next order. Terms and Conditions apply.</b>
      </div>   
      <div className="slide-container">
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div className="each-slide" key={index}>
              <div style={{'backgroundImage': `url(${slideImage.url})`}}>
                <span>{slideImage.caption}</span>
              </div>
            </div>
          ))} 
        </Slide>
      </div>
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
    )
}
//here

  return (Slideshow());
  
};

export default HomeScreen;
