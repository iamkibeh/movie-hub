import { KeyboardDoubleArrowRight } from '@mui/icons-material'
import { Button, Container, Stack, Typography } from '@mui/material'
import React from 'react'
import Slider from 'react-slick'
import MovieCard from './reusable/MovieCard'

const LatestMovies = ({ movies }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },

      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          fade: true,
        },
      },
    ],
  }
  console.log(movies)
  return (
    <Container>
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
          Latest Movies
        </Typography>
        <Button
          endIcon={<KeyboardDoubleArrowRight />}
          variant='contained'
          className='view-all-btn'
        >
          View All
        </Button>
      </Stack>

      <Stack mt={2}>
        <Slider {...settings}>
          {movies &&
            movies.map((movie) => <MovieCard key={movie.id} item={movie} />)}
        </Slider>
      </Stack>
    </Container>
  )
}

export default LatestMovies
