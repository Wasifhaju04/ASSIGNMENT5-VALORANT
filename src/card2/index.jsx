import React from 'react';
import Card from 'D:/WEB/valorant-5/src/compnent/cards.jsx';
let array=
    [
        {
            src: "https://www.pcgamesn.com/wp-content/uploads/2020/03/valorant-character-abilities-phoenix-900x506.jpg",           
            title:"PHOENIX",
            desc:"Throw a fireball that explodes after a short delay on impact with the ground. The fire zone damages enemies but heals Phoenix. Cast a flame wall that blocks enemy vision",
            val:45
        },
        {
            src: "https://www.pcgamesn.com/wp-content/uploads/2020/03/valorant-character-abilities-jett-900x506.jpg",            
            title:"JETT ",
            desc:"Dash a short distance. Throw a cloud of fog that obscures vision on impact. hrow deadly throwing knives that deal damage and kill on headshots. A kill restores daggers, left click throws a single dagger and right click throws all remaining daggers.",
            val:86
        },
        {
            src: "https://www.pcgamesn.com/wp-content/uploads/2020/03/valorant-character-abilities-viper-900x506.jpg",
            title:"VIPER",
            desc:"Deploy a line of gas that can be reactivated to create a wall of toxic gas which costs fuel. Fire a projectile that explodes into a pool of acid that does damage.",
            val:99
        }
    ]

export default function card2() {
    return (
        <div className="card3">
            <div className="card-heading2 pt-5">
                <h1 className="text-uppercase text-center display-6 text-black" > <strong>  WHY TO PLAY VALORANT  ?  </strong></h1>  
            </div>
            <div className="d-flex justify-content-center">
                <span className="card-span" ></span>
            </div>
            <div className="card-para-2 text-center" >
            Valorant also has well-thought maps, for the keeps! The main game mode involves an attacker and defender team, trying to plant or defend against an explosion at one of two or three locations. Each map offers unique advantages and challenges. I liked the beachside map “Breeze”, for it’s open spaces. “Haven” is easy to understand too. While it has three sites, making it tougher for the defenders, it also has multiple connections to the opposing side, providing the opportunity to rotate and creep up on enemies.
            </div>
            <br/>
            <br/>
            <br/>
            <div className="row">
                <div style={{fontSize:"14px"}} className="col-12">
                    
                    <div  className="d-flex justify-content-evenly">
                        {
                            array.map(data=>{
                                return(
                                <Card src={data.src} title={data.title} desc={data.desc} val={data.val} />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
