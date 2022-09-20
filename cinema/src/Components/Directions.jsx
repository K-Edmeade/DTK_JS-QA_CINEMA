import Parking from './Images/Parking.jpg';
import GoogleMap from './GoogleMap';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Directions() {
    return (
        <>
            <br />
            <br />
            <h1 style={{ display: 'flex', justifyContent: 'center', fontWeight: 'bold' }}>Directions</h1>

            <div className='directionsContainer'>

                <div className="directionsAddressContainer">
                    <h3>Public Transport</h3>
                    <p>We are within walking distance of Tower Hill Underground, London Bridge Underground and Tower Gateway DLR station.
                        Use our interactive map to search for directions as necessary.
                    </p>
                    <h3>Address</h3>
                    <p>3rd Floor
                        <br />
                        International House
                        <br />
                        1 St Katherine's Way
                        <br />
                        London
                        <br />
                        E1W 1UN</p>
                </div>

                <div className='directionsMapContainer'>
                    <GoogleMap />
                </div>
            </div>

            <h3 style={{ display: 'flex', justifyContent: 'center', fontWeight: 'bold' }}>Parking</h3>

            <div className='directionsParkingContainer'>
                <img
                    className="d-block w-100"
                    src={Parking}
                    alt="Parking" />

            </div>
            <br/>


        </>);
}
export default Directions;