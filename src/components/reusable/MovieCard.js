import { PlayCircle } from '@mui/icons-material'
import { Box, Rating, Stack, styled, Typography } from '@mui/material'
import React from 'react'

const BoxCard = styled(Box)({
  width: '320px',
  height: '250px',
  margin: 'auto',

  // backgroundColor: 'orange',
})
const MovieCard = ({
  item: { id, cover, name, rating, time, desc, starring, genres, video, tags },
}) => {
  return (
    <>
      <BoxCard className='movie-card-cont'>
        {/* <div className='movie-cover-img'> */}
        <img src={cover} alt='' />
        {/* </div> */}
        <div className='movie-text'>
          <Stack
            spacing={1}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 1,
            }}
          >
            <Rating
              name='half-rating-read'
              defaultValue={3.5}
              precision={0.5}
              readOnly
            />
            <Typography>8.7</Typography>
          </Stack>
          <Stack alignItems={'center'}>
            <PlayCircle sx={{ fontSize: '4rem', color: '#5b32ac' }} />
          </Stack>
          <Stack
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Typography variant='h6' fontWeight={550}>
              {name}
            </Typography>
            <Typography variant='body2' marginBottom={1}>
              {time}
            </Typography>
          </Stack>
          {/*<Link to={`/singlepage/${id}`}>*/}
          {/* <button className='primary-btn'>
            <i className='fa fa-play'></i> PLAY NOW
          </button> */}
          {/*</Link>*/}
        </div>
      </BoxCard>
    </>
  )
}

export default MovieCard
