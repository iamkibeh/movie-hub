import { KeyboardDoubleArrowRight } from '@mui/icons-material'
import { Button, Container, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'
import { settings } from './UpcomingMovies'
import MovieCard from './reusable/MovieCard'
import { baseUrl } from '../apiConstants'

const Popular = ({ movies }) => {
  return (
    <>
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
            Popular Movies
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
              {movies.length > 0 &&
                movies.map((movie) => {
                  return (
                    <>
                      <MovieCard key={movie.id} movie={movie} />
                    </>
                  )
                })}
            </Slider>
          </div>
        </Stack>
      </Container>
    </>
  )
}

export default Popular
