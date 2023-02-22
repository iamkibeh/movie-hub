import { PlayArrowRounded } from '@mui/icons-material'
import { Box, Button, Rating, Stack, styled, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { baseUrl, imageBaseURL } from '../../apiConstants'
// import playIcon from '../../assets/images/herosection/play-button.png'
import play from '../../assets/images/herosection/play-icons8.png'

const MovieDetailsContainer = styled(Box)({
  // backgroundColor: 'orange',
})

const HomeCard = ({
  // item: { id, cover, name, rating, time, desc, starring, genres, video, tags },
  item: {
    id,
    poster_path,
    title,
    vote_average,
    release_date,
    overview,
    // starring,
    // genres,
    // video,
    // tags,
  },
}) => {
  const [movieDetails, setMovieDetails] = useState(null)
  console.log(movieDetails)

  const cover = `${imageBaseURL}${poster_path}`

  useEffect(() => {
    fetch(`${baseUrl}/movie/${id}?language=en-US&page=1`, {
      headers: {
        Authorization:
          'Bearer ' +
          'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NjA2OTZkMDNjYmM3ZjE0ZmIxMDMwN2JmMGZhZGVkNiIsInN1YiI6IjYzZjYxNjRjOGMyMmMwMDBiMjk4YmI1MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9dDtvgVzb-KYALMBR4e22YqXZfbTJSORaCqyMu7zD0o',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data)
        setMovieDetails(data)
      })
  }, [id])
  return (
    <div className='hero-card-container'>
      <div className='cover-image-cont'>
        <img src={cover} alt='' />
      </div>
      <div className='content'>
        <div className='movie-content'>
          <MovieDetailsContainer>
            <Typography variant='h5' component={'h1'}>
              {/* {name} */}
              {title}
            </Typography>
            <Stack
              direction={'row'}
              spacing={2}
              sx={{
                display: { lg: 'flex' },
                alignItems: 'center',
              }}
              className='rating-section'
            >
              <Rating
                name='read-only'
                value={vote_average / 2}
                readOnly
                precision={0.5}
              />
              {/* <label>{rating}(Imdb)</label> */}
              <label>{vote_average}(Imdb)</label>
              <span>GP</span>
              {/* <label>{time}</label> */}
              <label>{release_date}</label>
            </Stack>
          </MovieDetailsContainer>
        </div>
        {/* <Typography>{desc}</Typography> */}
        <Typography>{overview}</Typography>
        <div className='cast'>
          <h4>
            <span>Starring: </span>
            {/* {starring} */}
          </h4>
          <h4>
            <span>Genres: </span>
            {/* {genres} */}
            {movieDetails &&
              movieDetails.genres.map((genre) => genre.name).join(', ')}
          </h4>
          <h4>
            <span>Tagline: </span>
            {/* {tags} */}
            {movieDetails && movieDetails.tagline} ?
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
