import React from 'react'
import Logo from "D:/WEB/valorant-5/src/images/logo.jpg";

export default function Navbar() {
    return (
        <div className="row nav-custom">
            <div className="col-2">
                <img src={Logo} alt=" " className=" custom-logo img-thumbnail" />
            </div>
            <div className="col-8 ">
                <div className="custom-align">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex flex-row justify-content-evenly custom-link-nav ">
                        <li className="nav-item">
                            <a className="nav-link" href="#">GAME INFO</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                ABOUT US
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                MEDIA
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                NEWS
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                LEADERBOARDS
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                ESPORTS
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                CONTACT US
                            </a>
                        </li>


                    </ul>
                </div>
            </div>
            <div className="col-2 h-200 btn-div-header">

                <button className="btn btn-success btn-lg custom-btn-find">FIND GAME</button>

            </div>
        </div>
    )
}