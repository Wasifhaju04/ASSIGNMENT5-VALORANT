import React from 'react'

export default function () {
    return (
        <div className="scholarship-event">
            <div className="row justify-content-around">
                <div className="col-4">
                    <div className="scholarshipCard">
                        <h1 className="display-5 text-light">#UPCOMING EVENT</h1>
                        <h2 className="text-white">LEADING VALORANT EVENTS PLATFORM IN INDIA.</h2>
                        <p className="text-white">The VALORANT Champions Tour is built on Challengers events, regional tournaments pitting a handful of teams from each region against each other. The top finishing teams at each Challengers event will make it to that region’s Challengers Finals. The top teams from that event will qualify for the next Masters event, Masters Three Berlin.</p>
                    </div>
                </div>
                <div className="col-6 upcomingEvent ">
                    <h2 className="display-6 text-white font-weight-bold">UPCOMING <span className="spanEvent">EVENTS</span></h2>
                    <div className="d-flex">
                        <span className="spanE"></span>
                    </div>
                    <div className="row">
                        <div className="col-3">
                            <div className="calender">
                                <span className="digit">12</span>
                                <br />
                                <span className="month">APRIL</span>
                            </div>
                        </div>
                        <div className="col-9">
                            <div className="cal-head">
                                <p>
                                ESPL VALORANT POWER UP INDIA
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-3 mt-3">
                            <div className="calender">
                                <span className="digit">01</span>
                                <br />
                                <span className="month">MAY</span>
                            </div>
                        </div>
                        <div className="col-9 mt-3">
                            <div className="cal-head">
                                
                                <p>
                                ESPORTS CLUB VALORANT CHALLENG
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}