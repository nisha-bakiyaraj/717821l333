import React from'react';
import  '../Components/Home.css';
import Header from '../Components/Header';

import { MdOutlineContentPasteSearch } from "react-icons/md";

import { BiUserCircle } from "react-icons/bi";
import { BiHeartCircle } from "react-icons/bi";
import { BiCart } from "react-icons/bi";

function Home(){
    return(
        <div className='header-container'>
        <div >
     
           
            <div className='search-cont'>
             <MdOutlineContentPasteSearch className='icon'/> 

                <input type="text" placeholder="search products"/>
            </div>
        </div>
        <div className='contact-social-cont'>
            <div className="'contact">
         
            <p><span>1234567890</span></p>
        </div>
        <div className="social-icon-cont">
           < div className="headerIcon">
           <BiUserCircle className="headerIcon-size" />
           </div>
           < div className="headerIcon">
           <BiHeartCircle className="headerIcon-size"/>
           </div>
           < div className="headerIcon">
           
           <BiCart className="headerIcon-size"/>
        </div>
                </div>
                </div></div>
    );
}

export default Home;
