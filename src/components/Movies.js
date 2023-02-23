import React, { forwardRef, useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import Masonry from '@mui/lab/Masonry'
import MovieCard from './reusable/MovieCard'
import '../styles/movies.css'
import { IconButton, Snackbar, Stack, Typography, Alert } from '@mui/material'
import SearchBar from './SearchBar'
import Navbar from './Navbar'
import Footer from './Footer'

const SnackbarAlert = forwardRef(function SnackbarAlert(props, ref) {
  return <Alert elevation={6} ref={ref} {...props} />
})

const Movies = ({ movies, setAllMovies }) => {
  const [searchResults, setSearchResults] = useState([])
  const [open, setOpen] = useState(false)

  // console.log(items)
  // console.log(movies)
  // console.log(searchResults)

  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }
    setOpen(false)
  }
  useEffect(() => {
    searchResults && searchResults.length < 1 && setOpen(true)
  }, [searchResults])

  return (
    <>
      <Navbar />
      <SearchBar movies={movies} setSearchResults={setSearchResults} />
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <SnackbarAlert onClose={handleSnackbarClose} severity='error'>
          Movie unavailable! Try again.
        </SnackbarAlert>
      </Snackbar>
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
            <Stack
              direction={'row'}
              alignItems='center'
              // bgcolor={'orange'}
              color='white'
            >
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
                  color='white'
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
                  color='white'
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

            {searchResults.length > 0
              ? searchResults.map((movie) => (
                  <MovieCard key={movie.id} movie={movie} />
                ))
              : movies.map((movie) => (
                  <MovieCard key={movie.id} movie={movie} />
                ))}
          </Masonry>
        </Box>
      </div>
      <Footer />
    </>
  )
}

export default Movies
