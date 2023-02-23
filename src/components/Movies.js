import React from 'react'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Masonry from '@mui/lab/Masonry'
import { styled } from '@mui/material/styles'
import MovieCard from './reusable/MovieCard'
import '../styles/movies.css'
import { IconButton, Stack, Typography } from '@mui/material'
import SearchBar from './SearchBar'
import Navbar from './Navbar'
import Footer from './Footer'

const Label = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,
}))

const Movies = ({ movies }) => {
  // console.log(items)
  // console.log(movies)
  return (
    <>
      <Navbar />
      <SearchBar />
      <div className='movies-container'>
        <Box sx={{ width: '80%', m: 'auto' }}>
          <Stack
            direction={'row'}
            display={'flex'}
            justifyContent='space-between'
            alignItems={'center'}
            mb={3}
          >
            <Typography
              variant='h5'
              sx={{ fontWeight: '550', color: '#fff' }}
              className='genre-title'
            >
              All Movies & Series
            </Typography>
            {/* <Button endIcon={<KeyboardDoubleArrowRight />} variant='contained'>
              View All
            </Button> */}
            <Stack direction={'row'} alignItems='center'>
              <IconButton>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-6 h-6'
                  width={15}
                  height={15}
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M15.75 19.5L8.25 12l7.5-7.5'
                  />
                </svg>
              </IconButton>
              <span>|</span>
              <IconButton>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-6 h-6'
                  width={15}
                  height={15}
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M8.25 4.5l7.5 7.5-7.5 7.5'
                  />
                </svg>
              </IconButton>
            </Stack>
          </Stack>
          <Masonry columns={{ lg: 4, sm: 3, xs: 1 }} spacing={2}>
            {/* {items.map((item) => (
              <MovieCard key={item.id} item={item} />
            ))}
            */}
            {movies.length > 0 &&
              movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
          </Masonry>
        </Box>
      </div>
      <Footer />
    </>
  )
}

export default Movies
