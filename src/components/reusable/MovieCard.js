import { PlayCircle } from '@mui/icons-material'
import { Box, Rating, Stack, styled, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { baseUrl, imageBaseURL } from '../../apiConstants'

const BoxCard = styled(Box)({
  width: '320px',
  height: '250px',
  margin: 'auto',

  // backgroundColor: 'orange',
})
const MovieCard = ({
  // item: { id, cover, name, rating, time, desc, starring, genres, video, tags },
  movie,
}) => {
  const [movieId, setMovieId] = useState('')
  const [movieDetails, setMovieDetails] = useState([])

  useEffect(() => {
    setMovieId(movie && movie.id)
  }, [movie])

  // console.log(movieId)

  useEffect(() => {
    movieId &&
      fetch(
        `${baseUrl}/movie/${movieId}?language=en-US&page=1&append_to_response=credits`,
        {
          headers: {
            Authorization:
              'Bearer ' +
              'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NjA2OTZkMDNjYmM3ZjE0ZmIxMDMwN2JmMGZhZGVkNiIsInN1YiI6IjYzZjYxNjRjOGMyMmMwMDBiMjk4YmI1MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9dDtvgVzb-KYALMBR4e22YqXZfbTJSORaCqyMu7zD0o',
          },
        }
      )
        .then((res) => res.json())
        .then((data) => {
          // console.log(data)
          setMovieDetails(data)
        })
  }, [movieId])

  // console.log(movieDetails)
  const cover = `${imageBaseURL}${movieDetails.poster_path}`

  return (
    <>
      <BoxCard className='movie-card-cont'>
        {/* <div className='movie-cover-img'> */}
        <img src={cover} alt='' loading='lazy' />
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
              // defaultValue={3.5}
              precision={0.5}
              readOnly
              value={movieDetails.vote_average / 2}
            />
            <Typography>{movieDetails.vote_average}</Typography>
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
            <Typography variant='body1' fontWeight={550}>
              {movieDetails.tagline}
            </Typography>
            <Typography variant='body2' marginBottom={1}>
              {/* {time} */}
              {movieDetails.runtime} mins
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
