import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import HomeCard from './reusable/HomeCard'
// import HomeCard from './HomeCard'
import '../styles/hero-section.css'
import {
  ArrowBackIosNewRounded,
  NavigateNextRounded,
} from '@mui/icons-material'
import { Avatar } from '@mui/material'

export const SampleNextArrow = (props) => {
  const { onClick } = props
  return (
    <div className='control-btn' onClick={onClick}>
      <Avatar
        className='next'
        sx={{
          position: 'absolute',
          top: '50%',
          right: '2%',
          cursor: 'pointer',
        }}
        onClick={onClick}
      >
        <NavigateNextRounded />
      </Avatar>
    </div>
  )
}

export const SamplePrevArrow = (props) => {
  const { onClick } = props
  return (
    <div
      className='control-btn'
      onClick={onClick}
      // sx={{ position: 'absolute', top: '50%', left: '2%', cursor: 'pointer' }}
    >
      <Avatar
        className='next'
        sx={{
          position: 'absolute',
          top: '50%',
          left: '2%',
          cursor: 'pointer',
          zIndex: 999,
        }}
        onClick={onClick}
      >
        <ArrowBackIosNewRounded />
      </Avatar>
    </div>
  )
}

const HeroSection = ({ items }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  }
  return (
    <>
      <div className='home'>
        <div className='homeContainer'>
          <Slider {...settings}>
            {items.map((item) => {
              return (
                <>
                  <HomeCard key={item.id} item={item} />
                </>
              )
            })}
          </Slider>
        </div>
      </div>
    </>
  )
}

export default HeroSection
