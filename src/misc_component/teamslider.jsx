import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Teamslider() {
    const [Xyz, setXyz] = useState([9, "po", { Lk: "po" }]);
    console.log({ state: Xyz });
    const normal = () => {
        setXyz(56)
    }

    var arr2 = [
        { link: "https://www.theloadout.com/wp-content/uploads/2021/07/valorant-tier-list-jett.jpg"},
        { link: "https://www.theloadout.com/wp-content/uploads/2021/07/valorant-tier-list-sova.jpg"},
        { link: "https://www.theloadout.com/wp-content/uploads/2021/07/valorant-tier-list-astra.jpg" },
        { link: "https://www.theloadout.com/wp-content/uploads/2021/07/valorant-tier-list-yoru-900x506.jpg" },
        { link: "https://d2skuhm0vrry40.cloudfront.net/2020/articles/2020-06-09-15-58/valorant_tier_list_1.jpg/EG11/resize/690x-1/quality/75/format/jpg" },
        { link: "https://d2skuhm0vrry40.cloudfront.net/2020/articles/2020-06-09-17-21/valorant_tier_list_agents_2.jpg/EG11/resize/690x-1/quality/75/format/jpg" },
        { link: "https://d2skuhm0vrry40.cloudfront.net/2020/articles/2020-06-09-15-58/valorant_tier_list_7.jpg/EG11/resize/690x-1/quality/75/format/jpg" },
        { link: "https://d2skuhm0vrry40.cloudfront.net/2020/articles/2020-06-09-17-21/valorant_tier_list_agents_6.jpg/EG11/resize/690x-1/quality/75/format/jpg" },
    ]


    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        centerMode: true,
        focusOnSelect: true,
        slidesToShow: 5,
        slidesToScroll: 3,
        arrows:true,
    };

    return (
        // dom html tags /components reacts components
        <div style={{backgroundColor: "paleturquoise", height: "320px"}} >

<br/>

            <div class="button9 onClick={normal}">VALORANT TIER LIST</div>
            <br/>
            <br/>
            <br/>        

            <Slider arrows={true} {...settings}>
                {
                    arr2.map(data => {

                        return (<div>
                            <img className=" slider-image-team" src={data.link} alt="" />
                        </div>)
                    })
                }


            </Slider>
        </div>
    )
}
