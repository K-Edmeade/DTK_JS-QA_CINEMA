import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';
import Keys from "./hideemail.json";
import{FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import{faTwitter, faInstagram} from "@fortawesome/free-brands-svg-icons";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(Keys.service_id, Keys.template_id, form.current, Keys.API_key)
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset()
  };

  return (
    <>
      <br />
      <br />
      <h1 style={{ display: 'flex', justifyContent: 'center', fontWeight: 'bold' }}>Contact Us</h1>


      <div className='contactContainer'>
        <div className='contactAddressContainer'>
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
            <br/>

          <h3>Contacts</h3>
          <p>
            Tel: 020 9999 9999
            <br />
            Email: qa_cinemas@gmail.com
            <br />
            Website: qacinemas.co.uk
            <br />
            <FontAwesomeIcon icon={faTwitter} />
            <br />
            <FontAwesomeIcon icon={faInstagram} />
          </p>
        </div>



        <div className='contactEmailContainer'>
          <Form ref={form} onSubmit={sendEmail}>
            <h3 style={{ display: 'flex', justifyContent: 'center', fontWeight: 'bold' }}>Email Us</h3>
            <Row classNAme="mb-3">
              <Form.Group as={Col} controlId="formGridText">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" name="first_name" placeholder="John" required />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridText">
                <Form.Label>Last Name</Form.Label>
                <Form.Control name="last_name" placeholder="Smith" required />
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control name="email" type="email" placeholder="name@example.com" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Subject</Form.Label>
              <Form.Control type="text" placeholder="Enter the subject of your email" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Message</Form.Label>
              <Form.Control name="message" as="textarea" rows={3} placeholder="Enter your message" required />
            </Form.Group>

            <Button variant="primary" type="submit" >
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
}

export default Contact;