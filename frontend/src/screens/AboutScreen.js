import React from "react";
import { Link } from 'react-router-dom';

function AboutScreen() {



    return (
        <div className="about">
            <h1>Welcome to Tours and Travel app</h1>
            <p>To use this app follow the instructions below</p>
            <li>first of all click the Get Started button</li>
            <li>First click on the Register button, and then click Login, Fill in correct email and password.
                because if not registered you can't book your travel spot.</li>
            <li>On successful login go to home page, and choose your favourite place to book now</li>
            <li>On the next page move to booking your room select start date and end date then show book now
                button freely food provided veg and non-veg options available</li>
            <li>next page go to Demo payment section , click pay button enter demo email id
                <b> Next card no: 4242 4242 4242 4242 </b>
                using this demo card number,and select expiry date and CVC password just click any 3 numbers</li>
            <li>next page move to your Profile and Bookings Room</li>
            <h3> To Access Admin page</h3>
            <li>
                 login with Admin credentials and go to /admin Example:<b>http://localhost:3000/admin</b></li>
                <Link to="/contact"><button className="pay">Contact</button></Link>
                <br/><br/>
        </div>
    )
}
export default AboutScreen;