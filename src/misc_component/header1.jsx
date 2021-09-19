import React from "react";
import logo from '../images/logo.jpg'


export default function Header1() {
	return (
		<div>
			<div class="lalala"> 
			<br/>
			<br/>
			<br/>
			<div className="row">
				<div className="col-12 text-center">
				<img src={logo} className="wasif2"/ >
				</div>

				<div className="col-12">
					<h1 className="custom-misc-h1-1 text-secondary text-center">
						<span>13,569,985</span> Numbers of Players Till Now...
					</h1>
				</div>

				{/*line */}
				<span className="line2"></span>
			</div>

			{/* <img src={logo2} alt="" className=" custom-logo img-thumbnail"  /> */}
		</div>
		</div>
	);
}