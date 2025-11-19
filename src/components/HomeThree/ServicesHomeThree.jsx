import { Link  } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useEffect, useRef } from 'react';
import icon1 from '../../assets/images/resource/png/cctv.png';
import icon2 from '../../assets/images/resource/png/ANPR.png';
import icon3 from '../../assets/images/resource/png/ACCESS-AGTES.png';
import icon4 from '../../assets/images/resource/png/ATTENDANCE- MACHINES.png';
import icon5 from '../../assets/images/resource/png/DOOR-ACCESS-CONTROLS.png';
import icon6 from '../../assets/images/resource/png/GATE-BARRIERS.png';
import icon7 from '../../assets/images/resource/png/INTERCOMS.png';
import icon8 from '../../assets/images/resource/png/s1.jpeg';
import icon9 from '../../assets/images/resource/png/LIGHT-FIXING.png';
import icon10 from '../../assets/images/resource/png/SECURITY-ALARM.png';
import icon11 from '../../assets/images/resource/png/SPEAKER-SYSTEMS.png';
import icon12 from '../../assets/images/resource/png/TELEPHONES.png';
import icon13 from "../../assets/images/resource/sidra.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css/pagination';

function ServicesHomeThree({ className }) {
	const sliderRef = useRef();

	useEffect(() => {
  setTimeout(() => {
    sliderRef.current?.slickGoTo(0); // force re-rendering
  }, 100);
}, []);

	const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,           // enable autoplay
  autoplaySpeed: 3000,      // time between slides in ms (3000ms = 3 seconds)
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 540,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};



    return (
        <>
        <section className={`services-section-three ${className || ''}`} id='services'>
        <div className="auto-container">
			<div className="sec-title text-center">	
				<span className=" ">Expert team with years of experience and Professionalism</span>
				<br />
				<h2 className='sub-title fs-1 mt-3'>Services We Offer</h2>
			</div>
			<div className="outer-box">
				<div className="row justify-content-center">
					<Slider {...settings}>
					<div className="service-block-three col wow fadeInUp ">
						<div className="inner-box">
							<img src={icon1} className='icon p-10 ' alt="" />
							<h6 className="title"><Link>CCTV<br/>Camera Installation</Link ></h6>
							<div className="text">CCTV & IP Camera setup with mobile viewing and maintenance.</div>
						</div>
					</div>

					{/* <div className="service-block-three col wow fadeInUp ">
						<div className="inner-box">
							<img src={icon13} className='icon p-10 ' alt="" />
							<h6 className="title"><Link>SIRA APPROVALS </Link ></h6>
							<div className="text">NOC/ AMC <br/>
								New or existing licenses</div>
						</div>
					</div> */}

					<div className="service-block-three col wow fadeInUp ">
						<div className="inner-box">
							<img src={icon8} className='icon p-10 ' alt="" />
							<h6 className="title"><Link> Door Access<br/>Control Systems </Link ></h6>
							<div className="text">Smart access with RFID/PIN/Card/Biometric & <br/>
								secure locks</div>
						</div>
					</div>

					<div className="service-block-three col wow fadeInUp" data-wow-delay="200ms">
						<div className="inner-box ">
							<img src={icon2} className='icon p-10 ' alt="" />
							<h6 className="title"><Link>Video Door Phone/Intercom Systems</Link ></h6>
							<div className="text">Mobile AV access with intercoms & IP door phones</div>
						</div>
					</div>

					<div className="service-block-three col wow fadeInUp" data-wow-delay="400ms">
						<div className="inner-box ">
							<img src={icon3} className='icon p-10 ' alt="" />
							<h6 className="title"><Link>Attendance / Biometric<br/>Machines</Link ></h6>
							<div className="text">Biometric attendance tracking</div>
						</div>
					</div>

					<div className="service-block-three col wow fadeInUp" data-wow-delay="600ms">
						<div className="inner-box ">
							<img src={icon4} className='icon p-10 ' alt="" />
							<h6 className="title"><Link>Telephone/PABX <br/>Systems</Link ></h6>
							<div className="text">Office communication with IP/analog phones</div>
						</div>
					</div>

					<div className="service-block-three col wow fadeInUp" data-wow-delay="800ms">
						<div className="inner-box">
							<img src={icon5} className='icon p-10 ' alt="" />
							<h6 className="title"><Link>Speaker/Public <br/>Address System </Link ></h6>
							<div className="text">Clear audio & paging systems</div>
						</div>
					</div>
					<div className="service-block-three col wow fadeInUp" data-wow-delay="800ms">
						<div className="inner-box">
							<img src={icon6} className='icon p-10 ' alt="" />
							<h6 className="title"><Link> Lights Fixing & <br/>Electrical Support</Link ></h6>
							<div className="text">Indoor & outdoor lighting</div>
						</div>
					</div>
					<div className="service-block-three col wow fadeInUp" data-wow-delay="800ms">
						<div className="inner-box">
							<img src={icon7} className='icon p-10 ' alt="" />
							<h6 className="title"><Link>ELV Drawings &<br/> Layouts </Link ></h6>
							<div className="text">CCTV, access control & cable layout drawings</div>
						</div>
					</div>
					{/* <div className="service-block-three col wow fadeInUp" data-wow-delay="800ms">
						<div className="inner-box">
							<img src={icon8} className='icon p-10 ' alt="" />
							<h6 className="title"><Link  to="/service-details">IT <br/>SECURITY&ELV SOLUTIONS </Link ></h6>
							<div className="text">Providing the solutions for tech business</div>
						</div>
					</div> */}
					
					
					
					
					</Slider>
				</div>
			</div>
		</div>
        </section>      
        </>
    );
}

export default ServicesHomeThree;
