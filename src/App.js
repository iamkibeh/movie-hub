import HeroSection from './components/HeroSection'
// import Navbar from './components/Navbar'
import { latest, movies, upcome } from './assets/data/dummyData'
import React, { useEffect, useState } from 'react'
import Movies from './components/Movies'
import LatestMovies from './components/LatestMovies'
import UpcomingMovies from './components/UpcomingMovies'
// import Footer from './components/Footer'
import { createTheme, ThemeProvider } from '@mui/material'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import MovieInfo from './components/reusable/MovieInfo'
import ContactUs from './components/ContactUs'
import Popular from './components/Popular'
import { baseUrl } from './apiConstants'

const theme = createTheme({
  pallette: {
    primary: {
      main: '#02020f',
      light: '#fff',
    },
    secondary: {
      main: '#e50813',
    },
  },
  typography: {
    fontFamily: 'Nunito, sans-serif',
  },
})

function App() {
  const [popular, setPopular] = useState([])
  const [items, setItems] = useState(movies)
  useEffect(() => {
    fetch(`${baseUrl}/movie/top_rated?language=en-US&page=1`, {
      headers: {
        Authorization:
          'Bearer ' +
          'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NjA2OTZkMDNjYmM3ZjE0ZmIxMDMwN2JmMGZhZGVkNiIsInN1YiI6IjYzZjYxNjRjOGMyMmMwMDBiMjk4YmI1MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9dDtvgVzb-KYALMBR4e22YqXZfbTJSORaCqyMu7zD0o',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.results)
        setPopular(data.results)
      })
  }, [])

  // console.log(items)

  return (
    <>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route
            path='/'
            // element={
            //   <div className='App'>
            //     <HeroSection items={items} />
            //     {/* <SearchBar /> */}
            //     {/* <Movies items={upcome} /> */}
            //     <LatestMovies movies={latest} />
            //     <UpcomingMovies movies={latest} />
            //   </div>
            // }
            element={
              <Layout>
                {/* <Navbar /> */}
                <HeroSection items={popular} />
                <LatestMovies movies={latest} />
                <UpcomingMovies movies={latest} />
                <Popular movies={latest} />
                {/* <Footer /> */}
              </Layout>
            }
          />
          <Route
            path='/contact'
            element={
              <Layout>
                {/* <Navbar /> */}
                <ContactUs />
                {/* <Footer /> */}
              </Layout>
            }
          />
          <Route path='/movies' element={<Movies items={upcome} />}>
            <Route path=':id' element={<MovieInfo />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </>
  )
}

export default App
