import React from "react";
import Img from "D:/WEB/valorant-5/src/images/agents.png"

export default function ConatctUs() {
	return (
		<div>
			<div  className="row custom-misc-2-con-chart" style={{position:"relative"}}>
				<div className="col-6" >
					<h1>
						ANY QUERY !!!! 
						<br/>
						<strong>CONTACT US!</strong>
					</h1>

					<div style={{ margin: "25px 0 25px 0" }} className="line2"></div>

					<form action="">
						<div className="row p-2">
							<div className="col-6">
								<input
									type="text"
									placeholder="Full name"
									
								/>
							</div>
							<div className="col-6">
							
                                <input type="email" placeholder="Email"  />
                                {/* <input type="email" placeholder="Email" value="gg@mm.com" /> */}
						
                               
                                
                                	</div>

								</div>
                                <div className="row p-2">
                                <div className="col-6">
								<input type="text" placeholder="Address" />
							</div>
							<div className="col-6">
								<input type="tel" name="" id="" placeholder="Phone" />
							</div>
					
                                </div>

						<div className="row p-2">
							<div className="col-12">
								<textarea
									name=""
									id=""
									style={{ width: "78%" }}
									placeholder="Description"
								>
								
								</textarea>
							</div>
							<div className="col-12">
								<button className="btn btn-primary pill" type="submit">CONTACT</button>
							</div>
			
							{/* 
                    <input type="button" value="hello" />
                        <input type="checkbox" name="" id="" />
                        <input type="color" name="" id="" />
                        <input type="date" name="" id="" />
                        <input type="file" name="" id="" />
                        <input type="password" name="" id="" />
                        <input type="range" name="" id=""  />
                        
                        <input type="radio" name="name" id="" />
                        <input type="radio" name="name" id="" />
                        <input type="radio" name="name" id="" />
                        <input type="reset" value="deafult" />
                         */}
						</div>

						{/* <label htmlFor="id">name</label> <input type="text" id="id" /> */}
					</form>
				</div>
			<img src={Img} alt="" className="transaprent-kid" />
            
            </div>
		</div>
		
	
	);
}