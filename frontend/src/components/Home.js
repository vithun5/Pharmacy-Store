import React from 'react';
import avelia from '../images/avelia.jpg';
import discount from '../images/discount1.jpg';
import discount2 from '../images/discount2.jpg';
import discount3 from '../images/discount.jpg';
import baby from '../images/baby.jpg';
import '../styles/Home.css';
import { useState } from 'react';
import Navbar from './Navbar';
import SideDrawer from './SideDrawer';
import Backdrop from './Backdrop';
import Footer from './Footer';


const Home = () => {
    const [sideToggle, setSideToggle] = useState(false);
    return (
        
        <div className='home-page'>
            <Navbar click={() => setSideToggle(true)} />
            <SideDrawer show={sideToggle} click={() => setSideToggle(false)} />
            <Backdrop show={sideToggle} click={() => setSideToggle(false)} />
            <h2 className='title' style={{textAlign:'center'}}>WELCOME TO MEDCURE</h2>
            <img src={baby} alt="baby product"></img>
            <br></br>
            <img src={avelia} alt="avelia soap"></img>
            <br></br>
            <img src={discount} alt="discountoffer "></img>
            <br></br>
            <img src={discount2} alt="discountoffer"></img>
            <br></br>
            <img src={discount3} alt=" discountoffer"></img>
            <Footer/>
        </div>
                          
       
    );
};
export default Home;