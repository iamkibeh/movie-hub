import { PlayArrowRounded } from '@mui/icons-material'
import { Box, Button, Rating, Stack, styled, Typography } from '@mui/material'
import React from 'react'
// import playIcon from '../../assets/images/herosection/play-button.png'
import play from '../../assets/images/herosection/play-icons8.png'

const MovieDetailsContainer = styled(Box)({
  // backgroundColor: 'orange',
})

const HomeCard = ({
  item: { id, cover, name, rating, time, desc, starring, genres, video, tags },
}) => {
  return (
    <div className='hero-card-container'>
      <div className='cover-image-cont'>
        <img src={cover} alt='' />
      </div>
      <div className='content'>
        <div className='movie-content'>
          <MovieDetailsContainer>
            <Typography variant='h5' component={'h1'}>
              {name}
            </Typography>
            <Stack
              direction={'row'}
              spacing={2}
              sx={{ display: 'flex', alignItems: 'center' }}
            >
              <Rating name='read-only' value={4} readOnly />
              <label>{rating}(Imdb)</label>
              <span>GP</span>
              <label>{time}</label>
            </Stack>
          </MovieDetailsContainer>
        </div>
        <Typography>{desc}</Typography>
        <div className='cast'>
          <h4>
            <span>Starring </span>
            {starring}
          </h4>
          <h4>
            <span>Genres </span>
            {genres}
          </h4>
          <h4>
            <span>Tags </span>
            {tags}
          </h4>
        </div>
        <Button
          variant='contained'
          startIcon={<PlayArrowRounded />}
          className='play-icon'
        >
          PLAY NOW
        </Button>
      </div>
      <div className='playButton'>
        {/* <Link to={`/singlepage/${id}`}> */}
        <Button startIcon={<img src={play} alt='' />}>
          {/* <div className='img'>
            <img src={playIcon} alt='hello' />
          </div> */}
          WATCH TRAILER
        </Button>
        {/* </Link> */}
      </div>
    </div>
  )
}

export default HomeCard
