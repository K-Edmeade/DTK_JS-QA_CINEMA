import Images from './Images/Majestic1.jpg';
import MovieOne from './Images/Wolf.jpg';
import MovieTwo from './Images/Avatar.jpg';
import Carousel from 'react-bootstrap/Carousel';
export default function Home() {

  return (<>

    <h1 className="text-center"><b>QA Cinema</b></h1>

    <Carousel>
      <Carousel.Item>
        <img
          src={Images}
          alt="Cinema"
          style={{ width: "-webkit-fill-available" }}
        />
        <Carousel.Caption>
          <h3>QA Cinema</h3>
          <p>Welcome to QA Cinema! We bring the latest blockbusters to a screen near you.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={MovieOne}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={MovieTwo}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>


  </>)


}