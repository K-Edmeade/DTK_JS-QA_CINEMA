import React from "react";
import { useLocation } from "react-router-dom";
import Table from "react-bootstrap/Table";

const BookingConfirmation = () => {

    const { state } = useLocation();
    const {
        _id,
        adultTickets,
        childrenTickets,
        concession,
        date,
        firstName,
        lastName,
        movieBooking,
        price
    } = state;


    if (state == null) {
        return (
            <>
                <div>
                    <h1><b>404</b></h1>
                    <br></br>
                    <h4>The requested URL /bookingconfirmation was not found.</h4>
                </div>
            </>
        )
    }
    else {
        return (
            <>
                <div className="confirmationContainer">
                    <h2>Your movie booking has been confirmed! See you soon!</h2>
                    Booking ID: {_id}
                    <div className="confirmationSubContainer">

                        <h4><b>{movieBooking[0].movie}</b> on <b>{movieBooking[0].day}</b> at <b>{movieBooking[0].time}</b></h4>

                        <Table>
                            <tbody>
                                <tr>
                                    <td>First Name</td>
                                    <td>{firstName}</td>
                                </tr>
                                <tr>
                                    <td>Last Name</td>
                                    <td>{lastName}</td>
                                </tr>
                                <tr>
                                    <td>Adults</td>
                                    <td>{adultTickets}</td>
                                </tr>
                                <tr>
                                    <td>Children</td>
                                    <td>{childrenTickets}</td>
                                </tr>
                                <tr>
                                    <td>Concession</td>
                                    <td>{concession}</td>
                                </tr>
                                <tr>
                                    <td>Date of purchase</td>
                                    <td>{new Date(date).toUTCString().slice(0, -13)}</td>
                                </tr>
                                <tr>
                                    <td>Total Price</td>
                                    <td>£{price}</td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </div>
            </>
        )
    }


}

export default BookingConfirmation;