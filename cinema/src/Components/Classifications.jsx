import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import UClassification from './Images/U-Classification.jpg'
import PGClassification from './Images/PGClassification.jpg'
import TwelveClassification from './Images/12Classification.jpg'
import FifteenClassification from './Images/15Classification.jpg'
import EighteenClassification from './Images/18Classification.jpg'
import Row from 'react-bootstrap/esm/Row';



export default function Classifications() {

  
    return(
    <>
    <h1>Classifications</h1>
      <Row><Card style={{ width: '18rem' }} className="classification-top-row"><Card.Img variant="top" src={UClassification} />
      <Card.Body>
        <Card.Title>U Classification</Card.Title>
        <Card.Text>
        A U film should be suitable for audiences aged four years and over, 
        although it is impossible to predict what might upset any particular child.
        </Card.Text>
        <a href ="https://www.bbfc.co.uk/rating/u" target="_blank" rel="noreferrer"> <Button variant="success" className='Buttons' >Read More</Button></a>
       
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }} className="classification-top-row">
      <Card.Img variant="top" src={PGClassification} />
      <Card.Body>
        <Card.Title>PG Classification</Card.Title>
        <Card.Text>
        General viewing, but some scenes may be unsuitable for young children. 
        A PG film should not unsettle a child aged around eight or older. 
       
        </Card.Text>
        <a href ="https://www.bbfc.co.uk/rating/pg" target="_blank" rel="noreferrer"><Button variant="warning" className='Buttons'>Read More</Button></a>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }} className="classification-top-row">
      <Card.Img variant="top" src={TwelveClassification} />
      <Card.Body>
        <Card.Title>12 Classification</Card.Title>
        <Card.Text>
        Films classified 12A and video works classified 12 contain material 
        that is not generally suitable for children aged under 12.
        </Card.Text>
        <a href ="https://www.bbfc.co.uk/rating/12" target="_blank" rel="noreferrer"><Button variant="warning">Read More</Button></a>
    
      </Card.Body>
    </Card>
      
    
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={FifteenClassification} />
      <Card.Body>
        <Card.Title>15 Classification</Card.Title>
        <Card.Text>
        No one younger than 15 may see a 15 film in a cinema. 
        No one younger than 15 may rent or buy a 15 rated video work.
        </Card.Text>
        <a href ="https://www.bbfc.co.uk/rating/15" target="_blank" rel="noreferrer"><Button variant="danger">Read More</Button></a>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={EighteenClassification} />
      <Card.Body>
        <Card.Title>18 Classification</Card.Title>
        <Card.Text>
        No one younger than 18 may see an 18 film in a cinema. 
        No one younger than 18 may rent or buy an 18 rated video work. 
        
        </Card.Text>
        <a href ="https://www.bbfc.co.uk/rating/18" target="_blank" rel="noreferrer"><Button variant="danger">Read More</Button></a>
      </Card.Body>
    </Card></Row>
       
    </>) 
  }