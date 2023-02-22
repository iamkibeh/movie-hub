import React from 'react'
import { useParams } from 'react-router-dom'

const MovieInfo = () => {
  const params = useParams()
  console.log(params)
  return <div>Movie info</div>
}

export default MovieInfo
