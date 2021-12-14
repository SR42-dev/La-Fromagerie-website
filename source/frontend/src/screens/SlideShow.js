import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const slideImages = [
  "https://i.guim.co.uk/img/media/165ef59178bc6b5cc0d30fb40291e81db17816b8/0_0_1080_648/master/1080.jpg?width=700&quality=85&auto=format&fit=max&s=6b3e585bd0a74ba01cf08eb9fccf7b4f",
  "https://images.unsplash.com/photo-1452195100486-9cc805987862?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80",
  "https://images.unsplash.com/photo-1551790629-9d5c2d781d8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fGNoZWVzZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  "https://www.seriouseats.com/thmb/VJipLV8zrG-EB9PAeeOHEKf7LPM=/1088x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__images__2011__08__20110812-murrays-cheese-taleggio-01-238109aed72e474db3052129d752c114.jpg",
  "https://images.unsplash.com/photo-1517999586990-2126f2b0c97d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  "https://www.seriouseats.com/thmb/e1wWPzQbw2kEiaB45PrPiR5To54=/1088x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__images__20110812-murrays-cheese-manchego-02-1899d1bafd1f4d09b518b9e71336f11d.jpg",
];

const SlideShow = () => {
    return (
      <div>
        <Slide easing="ease">
          <img src= {slideImages[0]} height="600vw"/>
          <img src= {slideImages[1]} height="600vw"/>
          <img src= {slideImages[2]} height="600vw"/>
          <img src= {slideImages[3]} height="600vw"/>
          <img src= {slideImages[4]} height="600vw"/>
          <img src= {slideImages[5]} height="600vw"/>
          
        </Slide>
      </div>
    )
};

export default SlideShow;

