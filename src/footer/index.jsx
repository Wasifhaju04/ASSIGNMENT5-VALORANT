import React from 'react';
import Valorant from 'D:/WEB/valorant-5/src/images/VALORANT.jpeg';
export default function footer() {
    return (
        <div class="wasif">   
       
            <div className="row justify-content-center">
                <div  className="col-2 mt-5 mx-50 px-50">
                <img className="img-fluid footImg" src={Valorant} alt="" />
            <p className="logot text-uppercase">VALORANT</p>
                </div>
                <div className="col-4 mt">
                    
                    <div className="row">
                        <div className="col-6">
                            <div style={{marginLeft:"90px"}}>
                            <h4> <strong> COMPANY </strong></h4>
                            <ul style={{listStyle:"none",fontSize:"17px",padding:"0",align:"center"}}>
                                <li>GAME INFO</li>
                                <li>ABOUT US </li>
                                <li>MEDIA</li>
                                <li>NEWS</li>
                            </ul>
                            </div>
                            
                        </div>
                        <div className="col-6">
                        <ul style={{listStyle:"none",fontSize:"17px",padding:"0",marginTop:"40px"}}>
                                <li>LEADERBOARDS</li>
                                <li> ESPORTS</li>
                                <li>SUPPORT</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-4 mt">
                    <div className="row">
                        <div className="col-5">
                            <h4><strong> OPENING HOURS </strong></h4>
                            <div><i className="fas fa-phone-alt"></i> &nbsp;+91 9967602196</div>
                            <div><i className="fas fa-envelope"></i> wasifhaju11@gmail.com</div>
                        </div>
                        <div className="col-6">
                            <h4 > <strong> OUR SOCIAL </strong>
                                
                            </h4>
                            <div className="icons" style={{paddingLeft:"25px"}}>
                    <i className="fab fa-facebook-f"></i>
                    <i className="fab fa-pinterest-square"></i>
                    <i className="fab fa-youtube"></i>
                    <i className="fab fa-linkedin-in"></i>                
                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
    )
}