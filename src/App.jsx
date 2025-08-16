import { useState } from 'react'
import './App.css'
import MovieCard from './components/MovieCard'
import HeaderMovie from './components/HeaderMovie'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <HeaderMovie/>
     <MovieCard></MovieCard>
    </>
  )
}

export default App
