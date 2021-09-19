import React from 'react'
import Img from "D:/WEB/VALORANT-5/src/images/VALORANT.jpeg"
export default function card1() {
    return (
        <div>
            <div className="row card-1-custom-con" >
                <div className="col-6 custom-card-img">
                    <img src={Img} alt="" className="img-fluid" />

                </div>
                <div className="col-6" style={{ backgroundColor: "blue" }}>
                    <br />
                    <br />
                    <div className="row">
                        <div className="col-12">
                            <h1 className="text-black text-center"><strong> DEVELOPMENT OF VALORANT ?</strong></h1>
                        </div>
                        <br />
                        <br />
                        <div className="col-12">
                            <p className="text-black text-center">Valorant was developed and published by Riot Games, the studio behind League of Legends. Development started in 2014, within their research and development division. oe Ziegler, Valorant's game director, is credited with the initial idea of Valorant while formulating potential games with other Riot developers. David Nottingham is the creative director for Valorant. Valorant was developed with two main focuses: making tactical shooters and e-sports more accessible to new players, and creating a game that would attract a large competitive scene, while solving many of the points of criticism voiced by professional players from games in the genre. Riot chose to develop Valorant using Unreal Engine 4, which the development team said would allow it to focus on gameplay and optimizations rather than spending time on core systems. To meet the goal of a lower performance barrier so more people could play Valorant, the team set notably low minimum and recommended hardware requirements for the game. To reach 30 frames per second on these small requirements, the game's engineering team, led by Marcus Reid, who previously worked on Gears of War 4, had to make several modifications to the engine. </p>
                        </div>
                        <div className="col-12 text-center">

                            <button className="btn4 btn-primary custom-card-btn" > MEET THE CHARACTERS </button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}