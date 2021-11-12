import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div style={{position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)"}}>
            <img src="http://lh5.ggpht.com/-BT2vrN7opxY/T29IOqvfO8I/AAAAAAAAGJQ/_UUXI7_-n7g/image%25255B10%25255D.png?imgmax=800" alt="" />
            <div className="d-flex justify-content-center">
            <Link to="/home"><button className="btn btn-primary mt-2 d-block">Back To Home</button></Link>
            </div>
        </div>
    );
};

export default NotFound;