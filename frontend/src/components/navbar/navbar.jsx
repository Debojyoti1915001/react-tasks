import React from 'react';
import './navbar.css'
const Navbar = () => {
    console.log("Navbar")
    const styles={
        float:'right'
    }
    return (
        <>
            <ul>
                <li><a href="#home">ACTIVE</a></li>
                <li><a href="#news">PENNDING APPROVAL</a></li>
                <li><a href="#contact">REQUIRED MODIFICATION</a></li>
                <li><a href="#contact">DRAFT</a></li>
                <li><a href="#contact">DENIED</a></li>
                <li><a href="#contact">PAUSED</a></li>
                <li style={styles}><a className="active" href="#about">ABOUT</a></li>
            </ul>
        </>
    )
}
export default Navbar