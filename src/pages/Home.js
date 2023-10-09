import React from "react";
import "./Home.css"
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="background">
            <div className="photo"></div>
            <div className="foreground">
                <h1 className="First_Text">TRACK YOUR,<br />PROGRESS,<br/>ACHIEVE YOUR<br />SUCCESS.</h1>
            </div>
            <div className="text-container">
                <h2 className="Second_Text">CONSTRUCT YOUR IDEAL PROGRAM, <br />TROUGH OUR EXTENSIVE<br/>EXERCISE CATALOGUE.</h2>
                <div className="button-container">
                    <Link className="button" to="Signup">Get started!</Link>
                    <Link className="button" to="Explore">Explore!</Link>
                </div>
            </div>
        </div>
    )
}

export default Home;
