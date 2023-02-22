import HeroSection from './components/HeroSection'
// import Navbar from './components/Navbar'
import { latest, movies, upcome } from './assets/data/dummyData'
import { useState } from 'react'
import Movies from './components/Movies'
import LatestMovies from './components/LatestMovies'
import UpcomingMovies from './components/UpcomingMovies'
// import Footer from './components/Footer'
import { createTheme, ThemeProvider } from '@mui/material'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import MovieInfo from './components/reusable/MovieInfo'
import ContactUs from './components/ContactUs'

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
  const [items, setItems] = useState(movies)
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
                <HeroSection items={items} />
                <LatestMovies movies={latest} />
                <UpcomingMovies movies={latest} />
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
