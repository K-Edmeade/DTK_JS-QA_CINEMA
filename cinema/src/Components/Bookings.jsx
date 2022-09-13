import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



const Bookings = () => {

  let navigate = useNavigate();


  const [show, setShow] = useState(false);
  const [items, setItems] = useState([]);
  const [showingDays, setShowingDays] = useState();
  const [showingTimes, setShowingTimes] = useState();

  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [adultTickets, setAdultTickets] = useState(0);
  const [childrenTickets, setChildrenTickets] = useState(0);
  const [concession, setConcession] = useState(0);
  const [movie, setMovie] = useState();
  const [day, setDay] = useState();
  const [time, setTime] = useState();
  const [cardNumber, setCardNumber] = useState();
  const [expiringDate, setExpiringDate] = useState();
  const [cvv, setCvv] = useState();

  const handleSubmit = (e) => {

    e.preventDefault();

    let price = (adultTickets * 5 + childrenTickets * 2 + concession * 3)

    const bookingInfo = {
      firstName: firstName,
      lastName: lastName,
      adultTickets: adultTickets,
      childrenTickets: childrenTickets,
      concession: concession,
      price: price,
      movieBooking: [{
        movie: movie,
        day: day,
        time: time
      }],
      payment: [{
        cardNumber: cardNumber,
        expiringDate: expiringDate,
        cvv: cvv
      }]
    }

    axios.post("http://localhost:5015/booking/create", bookingInfo)
      .then((res) => {
        console.log(res.data._id + " created")
        navigate("/bookingConfirmation", { state: res.data });
      }).catch((err) => {
        console.log(err.message)
      })


  };


  const handleClose = (e) => {
    e.preventDefault()
    setShow(false)
  };
  const handleShow = (e) => {
    e.preventDefault()
    setShow(true)
  }

  useEffect(() => {
    axios.get("http://localhost:5015/movie/getAllCurrent")
      .then((res) => {
        setItems(res.data);
        setMovie(res.data[0].title)
        setShowingDays(res.data[0].showtime[0].days)
        setShowingTimes(res.data[0].showtime[0].times)
        setDay(res.data[0].showtime[0].days[0])
        setTime(res.data[0].showtime[0].times[0])
      }).catch((err) => {
        console.log(err.message);
      })
  }, [])

  const changeHandler = (e) => {

    e.preventDefault()

    axios.get(`http://localhost:5015/movie/get/${e.target[e.target.selectedIndex].id}`)
      .then((res) => {
        res.data.showtime.map((schedule) => (setShowingTimes(schedule.times), setShowingDays(schedule.days), setTime(schedule.times[0], setDay(schedule.days[0]))));
        setMovie(res.data.title);
      }).catch((err) => {
        console.log(err.message);
      })

  }


  return (
    <div id="bookingContainer">
      <Modal show={show}>
        <Modal.Header closeButton>
          <Modal.Title>Payment</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit}>
          <Modal.Body>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridText">
                <Form.Label>Name on card</Form.Label>
                <Form.Control type="text" name="NameOnCard" placeholder="Cardholder Name" required />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridText">
                <Form.Label>Card Number</Form.Label>
                <Form.Control type="Number" placeholder="Card Number" pattern="/^(?:4[0-9]\d{12}(?:[0-9]{3})?)$/" onChange={(e) => { setCardNumber(e.target.value) }} required minLength={12} maxLength={12}/>
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formGridDate">
              <Form.Label>Expiry</Form.Label>
              <Form.Control type="Number" placeholder="MM/YY" pattern="/^(0[1-9]|1[0-2])\/?([0-9]{2})$/"
                onChange={(e) => { setExpiringDate(e.target.value) }} required />
            </Form.Group>




            <Form.Group className="mb-3" controlId="formGridNumber">
              <Form.Label>CVV</Form.Label>
              <Form.Control type="number" name="cvv" placeholder="CVV" onChange={(e) => { setCvv(e.target.value) }} pattern="/^[0-9]{3,4}$/" required />
            </Form.Group>

          </Modal.Body>
          <Modal.Footer>
            Your total is £{adultTickets * 5 + childrenTickets * 2 + concession * 3}
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>



      <Form onSubmit={handleShow}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridText">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" placeholder="First Name" onChange={(e) => { setFirstName(e.target.value) }} required />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridText">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" placeholder="Last Name" onChange={(e) => { setLastName(e.target.value) }} required />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridState">
          <Form.Label>Film</Form.Label>
          <Form.Select defaultValue="Choose..." onChange={changeHandler} required>
            {(items == null) ? (<option>Choose a movie</option>) :
              (items.map((item) =>
                <option key={item._id} id={item._id}>{item.title}</option>
              ))}
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridTime">
          <Form.Label>Time</Form.Label>
          <Form.Select defaultValue="Choose..." onChange={(e) => { setDay(e.target.value) }} required>
            {(showingDays == null) ? (<option>Choose a day</option>) :
              (showingDays.map((days, i) =>
                <option key={i}>{days}</option>)
              )}
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridTime">
          <Form.Label>Time</Form.Label>
          <Form.Select defaultValue="Choose..." onChange={(e) => { setTime(e.target.value) }} required>
            {(showingTimes == null) ? (<option>Choose a time</option>) :
              (showingTimes.map((times, i) =>
                <option key={i}>{times}</option>)
              )}
          </Form.Select>
        </Form.Group>

        <Row className="mb-3">


          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Adult</Form.Label>
            <Form.Select defaultValue="Choose..." onChange={(e) => { setAdultTickets(e.target.value) }} required>
              <option>0</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10</option>
            </Form.Select>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Child</Form.Label>
            <Form.Select defaultValue="Choose..." onChange={(e) => { setChildrenTickets(e.target.value) }} required>
              <option>0</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10</option>
            </Form.Select>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Concession</Form.Label>
            <Form.Select defaultValue="Choose..." onChange={(e) => { setConcession(e.target.value) }} required>
              <option>0</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10</option>
            </Form.Select>
          </Form.Group>


        </Row>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div >

  );
}

export default Bookings;


