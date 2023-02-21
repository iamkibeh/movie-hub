import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import { latest, movies, upcome } from './assets/data/dummyData'
import { useState } from 'react'
import SearchBar from './components/SearchBar'
import Movies from './components/Movies'
import LatestMovies from './components/LatestMovies'
import UpcomingMovies from './components/UpcomingMovies'
import Footer from './components/Footer'
import { createTheme, ThemeProvider } from '@mui/material'

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
  console.log(items)

  return (
    <>
      <ThemeProvider theme={theme}>
        <div className='App'>
          <Navbar />
          <HeroSection items={items} />
          <SearchBar />
          <Movies items={upcome} />
          <LatestMovies movies={latest} />
          <UpcomingMovies movies={latest} />
          <Footer />
        </div>
      </ThemeProvider>
    </>
  )
}

export default App
