import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useEffect, useState } from 'react';
import axios from 'axios';
import ListGroup from 'react-bootstrap/ListGroup';





function DiscussionBoard() {
    const [items, setItems] = useState([]);
    const [itemMovies, setItemMovies] = useState([]);

    const [username, setUsername] = useState();
    const [movie, setMovie] = useState();
    const [rating, setRating] = useState(1);
    const [comment, setComment] = useState();



    useEffect(() => {
        axios.get("http://localhost:5015/discussion/getAll")
            .then((res) => {
                setItems(res.data);
            }).catch((err) => {
                console.log(err.message);
            })

        axios.get("http://localhost:5015/movie/getAllCurrent")
            .then((res) => {
                setItemMovies(res.data);
                setMovie(res.data[0].title);
            }).catch((err) => {
                console.log(err.message);
            })

    }, [])

    const handleSubmit = (e) => {

        const discussionInfo = {
            name: username,
            comment: comment,
            movie: movie,
            rating: rating
        }

        axios.post("http://localhost:5015/discussion/create", discussionInfo)
            .then((res) => {
                console.log(res.data)
            }).catch((err) => {
                console.log(err.message)
            });
    };


    return (
        <>

            <div className='discussionContainer'>
                <div className='discussionFormContrainer'>
                    <Form onSubmit={handleSubmit}>
                        <h3>Discussion Board</h3>


                        <Form.Label>Username</Form.Label>
                        <Form.Control onChange={(e) => { setUsername(e.target.value) }} required />
                        <br />
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridText">
                                <Form.Label>Movie</Form.Label>
                                <Form.Select onChange={(e) => { setMovie(e.target.value) }} required>
                                    {(itemMovies == null) ? (<option>Choose a movie</option>) :
                                        (itemMovies.map((item) => (
                                            <option key={item._id} id={item._id}>{item.title}</option>)
                                        ))}
                                </Form.Select>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridText">
                                <Form.Label>Rating</Form.Label>
                                <Form.Select onChange={(e) => { setRating(e.target.value) }} required>
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

                        <Form.Label>Message</Form.Label>
                        <Form.Control as="textarea" placeholder="Enter your message" onChange={(e) => { setComment(e.target.value) }} required />
                        <br />
                        <Button variant="primary" type="submit" >
                            Submit
                        </Button>
                    </Form>
                </div>

                <div className='disscussionListContainer'>
                    {items.slice(0).reverse().map((item) =>
                    (<ListGroup key={item._id} >
                        <ListGroup.Item>{item.name}</ListGroup.Item>
                        <ListGroup.Item>Movie: {item.movie}</ListGroup.Item>
                        <ListGroup.Item>Rating: {item.rating}</ListGroup.Item>
                        <ListGroup.Item>{item.comment}</ListGroup.Item>
                    </ListGroup>))}
                </div>
            </div>


        </>



    );
}

export default DiscussionBoard;






