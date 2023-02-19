import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import { movies } from './assets/data/dummyData'
import { useState } from 'react'

function App() {
  const [items, setItems] = useState(movies)
  console.log(items)

  return (
    <div className='App'>
      <Navbar />
      <HeroSection items={items} />
    </div>
  )
}

export default App
