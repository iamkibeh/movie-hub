import React from 'react'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Masonry from '@mui/lab/Masonry'
import { styled } from '@mui/material/styles'
import MovieCard from './reusable/MovieCard'
import '../styles/movies.css'
import { IconButton, Stack, Typography } from '@mui/material'

const Label = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,
}))

const Movies = ({ items }) => {
  return (
    <>
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
            {items.map(
              (item) => (
                <MovieCard key={item.id} item={item} />
              )
              /* <img
                  src={`${item.img}?w=162&auto=format`}
                  srcSet={`${item.img}?w=162&auto=format&dpr=2 2x`}
                  alt={item.title}
                  loading='lazy'
                  style={{
                    borderBottomLeftRadius: 4,
                    borderBottomRightRadius: 4,
                    display: 'block',
                    width: '100%',
                  }}
                /> */
            )}
          </Masonry>
        </Box>
      </div>
    </>
  )
}

export default Movies
