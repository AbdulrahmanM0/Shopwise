import Carousel from 'react-bootstrap/Carousel';
import banner1 from '../../assets/banner7.jpg';
import banner2 from '../../assets/banner8.jpg';
import banner3 from '../../assets/banner9.jpg';
import "./Mainsection.css";


function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item >
        <img
          className="d-block w-100"
          src={banner1}
          alt="First slide"
        />
        <Carousel.Caption>
          <p>Get up to 50% off Today Only!</p>
          <h3  className='caption'>Wooden Chair <br/>Collection</h3>
          <button className='shop_now'>SHOP NOW</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3 className='caption'>Sofa Collection</h3>
          <p>Lorem ipsum dolor sit amet, consectetur<br/> adipiscing elit. Phasellus blandit massa enim. <br/>Nullam id varius nunc id varius nunc.</p>
          <button className='shop_now'>SHOP NOW</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <p>Taking your Viewing Experience to Next Level</p>
          <h3 className='caption'>Living Room <br/> Collection</h3>
          <button className='shop_now'>SHOP NOW</button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;