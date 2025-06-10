import Carousel from 'react-bootstrap/Carousel';
import gambartu from "../assets/img/slider/gambartu.png";
import gambarwan from "../assets/img/slider/gambarwan.png";
import gambartri from "../assets/img/slider/gambarti.png";


function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img src={gambartu} className='d-block w-100' text="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={gambartri} className='d-block w-100' text="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={gambarwan} className='d-block w-100' text="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;