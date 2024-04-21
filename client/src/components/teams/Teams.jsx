/* eslint-disable no-dupe-keys */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import Card from './ProfileCard'
import member from '../../data/member'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Teams() {

  var settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className='w-full min-h-screen bg-gray-900 p-5 pt-10 md:pt-20'>
      <h2 className=' font-semibold text-4xl md:text-5xl mb-5 text-center'>
        Meet Our Team !
      </h2>
      <div className=" p-20 gap-10">
      <Slider {...settings}>
        {member.map((item) => (
          <Card
            key={item.description}
            className="bg-[#192339] border-none text-white"
            item={item}
          />
        ))}
        </Slider>
      </div>
    </div>
  )
}

export default Teams
