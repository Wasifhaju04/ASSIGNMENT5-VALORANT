import React from "react";

export default function bar() {

 var array1 = [
    { name: "July 30, 2021", val: 51 },
    { name: "June 30, 2021", val: 62 },
    { name: "May 30, 2021", val: 85 },
    { name: "April 30, 2021", val: 99 },
]

	return (
		<div>
			<div className="row custom-misc-2-con-chart">
				<div className="col-5">
				<h1> <strong> Want to know the logged peak percentage of Valorant players ? </strong></h1>
					<h3>Here’s a complete rundown of the peak percentage of Valorant players. </h3>
					<ul style={{ color: "#5a4269" }}>
						{["UK", "CANADA", "USA", "INDIA", "CHINA"].map((data)=><li>{data}</li>)}
					</ul>

					<button className="btn btn-primary" style={{ backgroundColor: "#5a4269", borderRadius: "30px"  }} >
						RESEARCH !!!
					</button>
				</div>
				<div className="col-7 d-flex align-items-end justify-content-evenly">
					<div className="heignt-creator"> 
					<div className="h-100 d-flex justify-content-around">
						{/* array of objects */}

						{array1.map((data) => {
							return (
								<div className="con-chart d-flex">
									
									<div  style={{ height: `${data.val}%` }} className="bar-chart mx-5" >
									<div >{data.val }%</div>
										<p>{data.name}</p>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</div>
		</div>
	);
}