import Tower from './Images/Tower.jpg';
import Slug from './Images/slug-lettuce.jpg';
import Kilikya from './Images/Kilikya.jpg';
import Carousel from 'react-bootstrap/Carousel';
export default function PlacesToGo() {

  return (<>
    
    <br />
    <br />
    <h1 style={{ display: 'flex', justifyContent: 'center', fontWeight: 'bold' }}>Places To Go</h1>

    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Tower}
          alt="Tower"
        />
        <Carousel.Caption>
          <div style={{ backgroundColor: "#050A30" }}>
            <h3>Tower of London</h3>
            <p>Centuries of bloody history around a medieval castle, home to Crown Jewels</p>
            <p>OFFER: 10% off booking online using code: CINE</p>
            <a href="https://www.hrp.org.uk/tower-of-london/" target="_blank" rel="noreferrer"><p>https://www.hrp.org.uk/tower-of-london/</p></a>
          </div>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Slug}
          alt="Slug"
        />
        <Carousel.Caption>
          <div style={{ backgroundColor: "#050A30" }}>
            <h3>Slug And Lettuce Tower Bridge</h3>
            <p>Smart bar chain with a cocktail list, a menu of global classics, and contemporary decor.</p>
            <p>OFFER: 10% off booking online using code: CINE</p>
            <a href="https://www.slugandlettuce.co.uk/towerbridge/" target="_blank" rel="noreferrer"><p>https://www.slugandlettuce.co.uk/towerbridge/</p></a>
          </div>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Kilikya}
          alt="Kilikya"
        />
        <Carousel.Caption>
          <div style={{ backgroundColor: "#050A30" }}>
            <h3>Kilikya's Gastro, Cocktails, Lounge</h3>
            <p>Modern cafe/restaurant with a deli-style display counter and a menu of Turkish classics and more.</p>
            <p>OFFER: 10% off booking online using code: CINE</p>
            <a href="https://www.kilikyasgastro.co.uk/" target="_blank" rel="noreferrer"><p>https://www.kilikyasgastro.co.uk/</p></a>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <br/>
    <br/>
    <br/>


  </>);
}