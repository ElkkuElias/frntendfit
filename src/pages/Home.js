import React from "react";
import "./Home.css"
import { Link } from 'react-router-dom';
const Home = () => {
    return (
        <div className="background">
            <div className="photo"></div>
        <div className="foreground">
        <h1 className="First_Text">TRACK YOUR, </h1>
        <h1 className="First_Text">PROGRESS, </h1>
        <h1 className="First_Text">ACHIEVE YOUR</h1>
        <h1 className="First_Text">SUCCESS.</h1>
        </div>
        <div>
        <h2 className="second">CONSTRUCT YOUR IDEAL PROGRAM,</h2>
        <h2 className="third">TROUGH OUR EXTENSIVE</h2>
        <h2 className="fourth">EXERCISE CATALOGUE.</h2>
        </div>
        <button className="button">
              <Link className="links" to="Signup">Get started!</Link>
        </button>
        <button className="button2">
              <Link className="links" to="Explore">Explore!</Link>
        </button>
        <div className="blank">O</div>
        </div>
        
        
    )
}

export default Home