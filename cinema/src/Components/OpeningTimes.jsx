import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function OpeningTimes() {
    return ( 
  <>
    <h1>Opening Times</h1>

      <Card style={{ width: '20rem' }} >
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Monday</Card.Title>
        <Card.Text>
          10:00 - 23:00
        </Card.Text>
        <Button variant="primary">Booking</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Tuesday</Card.Title>
        <Card.Text>
          10:00 - 23:00
        </Card.Text>
        <Button variant="primary">Booking</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Wednesday</Card.Title>
        <Card.Text>
          10:00 - 23:00
        </Card.Text>
        <Button variant="primary">Booking</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Thursday</Card.Title>
        <Card.Text>
          10:00 - 23:00
        </Card.Text>
        <Button variant="primary">Booking</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Friday</Card.Title>
        <Card.Text>
          10:00 - 00:00
        </Card.Text>
        <Button variant="primary">Booking</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Saturday</Card.Title>
        <Card.Text>
          10:00 - 00:00
        </Card.Text>
        <Button variant="primary">Booking</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Sunday</Card.Title>
        <Card.Text>
          10:00 - 23:00
        </Card.Text>
        <Button variant="primary">Booking</Button>
      </Card.Body>
    </Card>
  </>  );
  }
  export default OpeningTimes;