import { PlayArrowRounded } from '@mui/icons-material'
import { Button, Container, Stack } from '@mui/material'
import React from 'react'

const Ucard = ({ item: { id, cover, name, time } }) => {
  return (
    <>
      <div className='MovieBox'>
        <div className='img'>
          <img src={cover} alt='' />
        </div>
        <Container className='text' sx={{ textAlign: 'center' }}>
          <h3>{name}</h3>
          <span>{time}</span> <br />
          {/*<Link to={`/singlepage/${id}`}>*/}
          <Button
            variant='contained'
            startIcon={<PlayArrowRounded />}
            className='play-icon'
          >
            PLAY NOW
          </Button>
          {/*</Link>*/}
        </Container>
      </div>
    </>
  )
}

export default Ucard
