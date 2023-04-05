import {
  Button,
  Container,
  Divider,
  Rating,
  Stack,
  Typography,
} from '@mui/material'
import React from 'react'

const AboutMovie = () => {
  return (
    <div className='contact-us-container about-movie-container'>
      <h1>Prison Break</h1>
      <Stack>
        <Typography>Animation</Typography>
        <Divider orientation='vertical' flexItem />
        <Typography>Sci-fi</Typography>
        <Typography>Love</Typography>
      </Stack>
      <Container>
        <Rating precision={0.5} defaultValue={4.5} />
        Rating: 8.5
      </Container>
      <Container sx={{ bgcolor: 'orange' }}>
        <Typography variant='body2'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores ea
          consequatur omnis vitae similique, ullam unde provident tempore
          exercitationem. Alias itaque dolores sit ipsum mollitia dolorem
          pariatur molestiae repudiandae tempore. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Quisquam iure, repudiandae enim quo ipsa
          rerum at omnis officia eligendi corporis.
        </Typography>
      </Container>
      <Container>
        <Button variant='outlined'>Watch trailer</Button>
        <Button variant='outlined'>Stream movie</Button>
      </Container>
    </div>
  )
}

export default AboutMovie
