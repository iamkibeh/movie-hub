import {
  Container,
  FormControl,
  IconButton,
  InputAdornment,
  OutlinedInput,
} from '@mui/material'
import React from 'react'
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa'
import { BsTwitter } from 'react-icons/bs'
import '../styles/footer.css'
import { Send } from '@mui/icons-material'

const Footer = () => {
  return (
    <Container className='footer-container'>
      <div className='top-footer'>
        <section>
          <ul>
            <li className='active'>Movies Category</li>
            <li>
              <a href='/'>Movies</a>
            </li>
            <li>
              <a href='/'>Videos</a>
            </li>
            <li>
              <a href='/'>English Movies</a>
            </li>
            <li>
              <a href='/'>Spanish Movies</a>
            </li>
            <li>
              <a href='/'>Tailor</a>
            </li>
            <li>
              <a href='/'>Upcoming Movies</a>
            </li>
            <li>
              <a href='/'>Tailor</a>
            </li>
          </ul>
        </section>
        <section>
          <ul>
            <li className='active'>Information</li>
            <li>
              <a href='/'>About Us</a>
            </li>
            <li>
              <a href='/'>Song</a>
            </li>
            <li>
              <a href='/'>All Movies</a>
            </li>
            <li>
              <a href='/'>Hot collection</a>
            </li>
          </ul>
        </section>
        <section>
          <ul>
            <li className='active'>Others</li>
            <li>
              <a href='/'>New Movies</a>
            </li>
            <li>
              <a href='/'>Trending</a>
            </li>
            <li>
              <a href='/'>Series</a>
            </li>
          </ul>
        </section>
        <section>
          <h2 className='active'>NewsLetter</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi vitae
            minima est, adipisci dolores odit?
          </p>
          <FormControl
            sx={{ m: 1, width: '100%', bgcolor: 'white', borderRadius: '8px' }}
            variant='outlined'
          >
            <OutlinedInput
              endAdornment={
                <InputAdornment position='end'>
                  <IconButton edge='end'>{<Send />}</IconButton>
                </InputAdornment>
              }
              placeholder='Enter Address'
            />
          </FormControl>
          <div className='social-handle-container'>
            <div className='social-handle'>
              <FaFacebookF />
            </div>
            <div className='social-handle'>
              <BsTwitter />
            </div>
            <div className='social-handle'>
              <FaLinkedinIn />
            </div>
          </div>
        </section>
      </div>
      <div className='bottom-footer'>
        <section className='copyright-sec'>
          &copy;2023.<span>MOVIEHUB</span>.Developed by{' '}
          <a
            href='http://github.com/iamkibeh'
            target='_blank'
            rel='noopener noreferrer'
          >
            Iam_Kibeh
          </a>
          . All rights reserved
        </section>
        <section className='terms-sec'>
          Terms and conditions <span>|</span> Privacy policy
        </section>
      </div>
    </Container>
  )
}

export default Footer
