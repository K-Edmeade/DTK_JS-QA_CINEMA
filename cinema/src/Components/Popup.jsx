import React from 'react'
import Button from 'react-bootstrap/esm/Button';

const Popup = (props) => {

    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <iframe width="560" height="315" src={props.trailerVideo} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                <Button variant="danger" size="sm" className="close-btn" onClick={() => props.setTrigger(false)}>
                    Close
                </Button>
            </div>
        </div>
    ) : "";
}

export default Popup;