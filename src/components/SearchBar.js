import { Search } from '@mui/icons-material'
import {
  Box,
  FormControl,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Typography,
} from '@mui/material'
import React from 'react'
import '../styles/search.css'

const SearchBar = () => {
  return (
    <>
      <div className='search-container'>
        <Box className='search-bar' sx={{ width: 'fit-content', m: '0 auto' }}>
          <Typography
            variant='h3'
            component={'h2'}
            sx={{
              fontSize: '24px',
              textTransform: 'uppercase',
              fontWeight: 700,
              letterSpacing: '1px',
            }}
          >
            Search for Movies and Series
          </Typography>
          <FormControl sx={{ m: 1, width: '100%' }} variant='outlined'>
            <OutlinedInput
              endAdornment={
                <InputAdornment position='end'>
                  <IconButton edge='end'>{<Search />}</IconButton>
                </InputAdornment>
              }
              placeholder='Enter movie or series title'
            />
          </FormControl>
        </Box>
      </div>
    </>
  )
}

export default SearchBar
