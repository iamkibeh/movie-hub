import { KeyboardDoubleArrowRight } from '@mui/icons-material'
import { Button, Container, Stack, Typography } from '@mui/material'
import React from 'react'

const UpcomingMovies = ({ movies }) => {
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
          sx={{ fontWeight: '550' }}
          className='genre-title'
        >
          Upcoming Movies
        </Typography>
        <Button endIcon={<KeyboardDoubleArrowRight />} variant='contained'>
          View All
        </Button>
      </Stack>
    </Container>
  )
}

export default UpcomingMovies
