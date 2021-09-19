import React from "react";

export default function Main() {
	return (
		<div className="institute-img-custom">
			<div className="insitute-heading">
<br/>
<br/>
				<h2 align="center" style={{color:"white"}}>
                Blend your style and experience on a global, competitive stage. <br/>
                Take on foes across Competitive and Unranked modes  <br />
				<strong>A 5v5 character-based tactical shooter</strong>
				</h2>
<br/>
<br/>
				<button
                    
					className="btn btn-outline-dark"
					style={{ borderRadius: "30px" }}
				>
					{" "}
					PLAY HERE
				</button>
			</div>

			<div className="hero-footer">
				<div className="row">
					<div className="col-4">
						<h1 className="text-center">
                            <strong> 01 </strong>
                            </h1>
                        <p> <strong> Duelists are the ones who push forward into conflicts with the enemy team </strong></p>
					</div>
					<div className="col-4">
						<h1 className="text-center"> 
                        <strong> 02 </strong>
                        </h1>
                        <p> <strong> Initiators focus on gathering intel and help the team push </strong> </p>
					</div>
					<div className="col-4">
						<h1 className="text-center">
                            <strong> 03 </strong>
                            </h1>
                    <p> <strong> Sentinels are defenders, usually playing the back line of a team </strong> </p>
					</div>
				</div>
			</div>
		</div>
	);
}
