import React from 'react'
import '../../css/our_experince.css'

import expe_img1 from '../../../src/assets/ourExperince/ourExp_img1.png'
import charches from '../../../src/assets/ourExperince/Churches.png'
import sports from '../../../src/assets/ourExperince/Sport Aarenas and Stadiums.png'
import airport from '../../../src/assets/ourExperince/Airports.png'
import car from '../../../src/assets/ourExperince/cars.png'
import home from '../../../src/assets/ourExperince/Warehouses.png'
import school from '../../../src/assets/ourExperince/school.png'
import hightschool from '../../../src/assets/ourExperince/high_school.png'
import instdustrie from '../../../src/assets/ourExperince/industries.png'
import truck from '../../../src/assets/ourExperince/truck.png'

function OurExperience() {
    return (
        <div className="ourExp-section">
            
            {/* Title */}
            <p className='ourExperince_title mt-3'>Our Experience</p>

            {/* Experience Grid */}
            <div className="container">
                <div className="ourExp-row row mt-3 justify-content-center">

                    {[
                        { img: expe_img1, text: "Office Spaces", color: "expe1" },
                        { img: charches, text: "Churches", color: "expe2" },
                        { img: sports, text: "Sport Arenas and Stadiums", color: "expe1" },
                        { img: airport, text: "Airports", color: "expe2" },
                        { img: car, text: "Parking Structures", color: "expe1" },
                        { img: home, text: "Warehouses", color: "expe2" },
                        { img: school, text: "Schools and Universities", color: "expe1" },
                        { img: hightschool, text: "High-rise Residential Apartments", color: "expe2" },
                        { img: expe_img1, text: "Other Allied Structures", color: "expe1" },
                        { img: instdustrie, text: "Industrial Structures", color: "expe2" },
                    ].map((item, index) => (
                        <div key={index} className="ourExp-col col-sm-12 col-md-3 col-lg-6 col-xl-3 mt-3 d-flex">
                            <div className={`ourExp-card ${item.color} w-100 d-flex flex-column justify-content-center align-items-center`}>
                                <img src={item.img} alt={item.text} className="img-fluid mb-3" />
                                <span className="office-text text-center">{item.text}</span>
                            </div>
                        </div>
                    ))}

                </div>
            </div>


            {/* Industrial Solutions */}
            <p className='ourExperince_title mt-5'>Industrial Solutions</p>

            <div className="container">
                <div className="ourExp-row row mt-3 justify-content-center">

                    {[
                        { img: expe_img1, text: "Energy Power plants", color: "expe1" },
                        { img: hightschool, text: "Process Plants (Petro /Chemical /Steel /Cement)", color: "expe2" },
                        { img: truck, text: "Oil & Gas (Onshore /Offshore)", color: "expe1" }
                    ].map((item, index) => (
                        <div key={index} className="ourExp-col col-sm-12 col-md-3 col-lg-6 col-xl-3 mt-3 d-flex">
                            <div className={`ourExp-card ${item.color} w-100 d-flex flex-column justify-content-center align-items-center`}>
                                <img src={item.img} alt={item.text} className="img-fluid mb-3" />
                                <span className="office-text text-center">{item.text}</span>
                            </div>
                        </div>
                    ))}

                </div>
            </div>

        </div>
    )
}

export default OurExperience
