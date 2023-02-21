import { KeyboardDoubleArrowRight } from '@mui/icons-material'
import { Button, Container, Stack, Typography } from '@mui/material'
import React from 'react'
import Slider from 'react-slick'
import { SampleNextArrow, SamplePrevArrow } from './HeroSection'
import UpcomingCard from './reusable/UpcomingCard'
import '../styles/videoCard.css'

const UpcomingMovies = ({ movies }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }
  return (
    <Container sx={{ mt: '5rem' }}>
      <Stack
        direction={'row'}
        display={'flex'}
        justifyContent='space-between'
        alignItems={'center'}
      >
        <Typography
          variant='h5'
          sx={{ fontWeight: '550', color: '#fff' }}
          className='genre-title'
        >
          Upcoming Movies
        </Typography>
        <Button
          endIcon={<KeyboardDoubleArrowRight />}
          variant='contained'
          className='view-all-btn'
        >
          View All
        </Button>
      </Stack>

      <Stack mt={3} mb={3}>
        <div className='content'>
          <Slider {...settings}>
            {movies.map((item) => {
              return (
                <>
                  <UpcomingCard key={item.id} item={item} />
                </>
              )
            })}
          </Slider>
        </div>
      </Stack>
    </Container>
  )
}

export default UpcomingMovies
