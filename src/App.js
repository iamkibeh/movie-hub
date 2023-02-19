import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import { latest, movies, upcome } from './assets/data/dummyData'
import { useState } from 'react'
import SearchBar from './components/SearchBar'
import Movies from './components/Movies'
import LatestMovies from './components/LatestMovies'
import UpcomingMovies from './components/UpcomingMovies'

function App() {
  const [items, setItems] = useState(movies)
  console.log(items)

  return (
    <div className='App'>
      <Navbar />
      <HeroSection items={items} />
      <SearchBar />
      <Movies items={upcome} />
      <LatestMovies movies={latest} />
      <UpcomingMovies movies={latest} />
    </div>
  )
}

export default App
