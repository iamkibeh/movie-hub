import { Phone, Send } from '@mui/icons-material'
import {
  Box,
  Button,
  Container,
  Divider,
  Stack,
  TextField,
  Typography,
} from '@mui/material'
import React from 'react'
import { BsGlobe2 } from 'react-icons/bs'
import AboutMovie from './reusable/AboutMovie'

const ContactUs = () => {
  return (
    <>
      <div className='contact-us-container'>
        <Container sx={{ p: 1 }}>
          <Typography variant='h3'>Contact Us</Typography>
          <Stack direction={'row'} spacing={2} p={2}>
            <Typography variant='body2' sx={{ cursor: 'pointer' }}>
              <a href='/'>Home</a>
            </Typography>
            <Divider orientation='vertical' flexItem />
            <Typography variant='body2'>Contact us</Typography>
          </Stack>
        </Container>
        <Container sx={{ display: 'flex' }}>
          <Stack width={'45%'} p={2}>
            <Typography variant='h4' gutterBottom>
              {' '}
              Info
            </Typography>
            <Typography gutterBottom>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus expedita sed perspiciatis incidunt ducimus dicta.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Quibusdam iure excepturi necessitatibus, sequi nostrum quaerat.
            </Typography>
            <Box>
              <Button
                startIcon={<Phone />}
                sx={{
                  textAlign: 'start',
                  display: 'flex',
                  gap: '1.5rem',
                  justifyContent: 'space-between',
                }}
                color='secondary'
              >
                <Typography variant='body2'>
                  Phone: <br></br>
                  (123) 123-456
                </Typography>
              </Button>
              <Button
                startIcon={<Send />}
                sx={{
                  textAlign: 'start',
                  display: 'flex',
                  gap: '1.5rem',
                  justifyContent: 'space-between',
                }}
                color='secondary'
              >
                <Typography variant='body2'>
                  Email: <br />
                  info.moviehub.com
                </Typography>
              </Button>
              <Button
                startIcon={<BsGlobe2 />}
                sx={{
                  textAlign: 'start',
                  display: 'flex',
                  gap: '1.5rem',
                  justifyContent: 'space-between',
                }}
                color='secondary'
              >
                <Typography variant='body2'>
                  Web: <br />
                  www.moviehub.com
                </Typography>
              </Button>
            </Box>
          </Stack>
          <Stack flexGrow={1} p={2}>
            <Typography variant='h4' gutterBottom>
              Contact Form
            </Typography>
            <form style={{ textAlign: 'center' }} noValidate autoComplete='off'>
              <TextField
                fullWidth
                label='your name'
                sx={{ mb: '2rem' }}
                color='secondary'
                variant='outlined'
                required
              />
              <TextField
                fullWidth
                label='email@gmail.com'
                sx={{ mb: '2rem' }}
                color='secondary'
                variant='outlined'
                required
              />
              <TextField
                fullWidth
                label='subject'
                sx={{ mb: '2rem' }}
                color='secondary'
                variant='outlined'
                required
              />
              <TextField
                fullWidth
                label='your message'
                sx={{ mb: '2rem' }}
                color='secondary'
                variant='outlined'
                required
              />
              <Button variant='contained' color='secondary'>
                send message
              </Button>
            </form>
          </Stack>
        </Container>
      </div>

      <AboutMovie />
    </>
  )
}

export default ContactUs
