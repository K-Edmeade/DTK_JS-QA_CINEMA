import Deluxeplan from './Images/Deluxeplan.jpg';
import Standardplan from './Images/Standardplan.jpg';
import Standard from './Images/Standard.png';
import Deluxe from './Images/Deluxe.jpg';
import Carousel from 'react-bootstrap/Carousel';
export default function Screens() {
  return (<>
    <br />
    <h1 style={{ display: 'flex', justifyContent: 'center', fontWeight: 'bold' }} >Screens</h1>

    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Standard}
          alt="Standard"
        />
        <Carousel.Caption>
          <div style={{ backgroundColor: "rgb(29 7 42)" }}>
            <h3>Standard Seating</h3>
            <p>Standard is our comfortable classic seating. Get the Immersive Cinema Experience</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Standardplan}
          alt="Standardplan" />
        <Carousel.Caption>
          <div style={{ backgroundColor: "rgb(29 7 42)" }}>
            <h3>Standard Seating Plan</h3>
            <p>Lower Level Seating plan</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Deluxe}
          alt="Deluxe"
        />
        <Carousel.Caption>
          <div style={{ backgroundColor: "rgb(29 7 42)" }}>
            <h3>Deluxe Seating</h3>
            <p>Lean back in the luxury of our fully-reclining seats that have three times the standard legroom and more personal space.
              Unfold the built-in table to enjoy a sumptuous feast from our Deuxe menu</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Deluxeplan}
          alt="Deluxeplan"
        />
        <Carousel.Caption>
          <div style={{ backgroundColor: "rgb(29 7 42)" }}>
            <h3>Deluxe Seating Plan</h3>
            <p>Upper Level "Directors Box" Seating Plan</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    <br />
    <br />
    <br />


  </>);
}