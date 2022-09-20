import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function OpeningTimes() {
  return (
    <>
      <br />
      <br />
      <h1 style={{ display: 'flex', justifyContent: 'center', fontWeight: 'bold' }}>Opening Times</h1>
      <div className='openingTimesContainer'>
        <Card style={{ width: '15rem', margin: "10px" }} >

          <Card.Body>
            <Card.Title>Monday</Card.Title>
            <Card.Text>
              15:00 - 23:00
            </Card.Text>
            <Button variant="primary" href="/bookings">Booking</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '15rem', margin: "10px" }}>

          <Card.Body>
            <Card.Title>Tuesday</Card.Title>
            <Card.Text>
              15:00 - 23:00
            </Card.Text>
            <Button variant="primary" href="/bookings">Booking</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '15rem', margin: "10px" }}>

          <Card.Body>
            <Card.Title>Wednesday</Card.Title>
            <Card.Text>
              15:00 - 23:00
            </Card.Text>
            <Button variant="primary" href="/bookings">Booking</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '15rem', margin: "10px" }}>

          <Card.Body>
            <Card.Title>Thursday</Card.Title>
            <Card.Text>
              15:00 - 23:00
            </Card.Text>
            <Button variant="primary" href="/bookings">Booking</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '15rem', margin: "10px" }}>

          <Card.Body>
            <Card.Title>Friday</Card.Title>
            <Card.Text>
              15:00 - 00:00
            </Card.Text>
            <Button variant="primary" href="/bookings">Booking</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '15rem', margin: "10px" }}>

          <Card.Body>
            <Card.Title>Saturday</Card.Title>
            <Card.Text>
              15:00 - 00:00
            </Card.Text>
            <Button variant="primary" href="/bookings">Booking</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '15rem', margin: "10px" }}>

          <Card.Body>
            <Card.Title>Sunday</Card.Title>
            <Card.Text>
              15:00 - 23:00
            </Card.Text>
            <Button variant="primary" href="/bookings">Booking</Button>
          </Card.Body>
        </Card>
      </div>
    </>);
}
export default OpeningTimes;