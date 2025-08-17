import { useState } from 'react'
import './App.css'
import MovieCard from './components/MovieCard'
import HeaderMovie from './components/HeaderMovie'
import SearchPage from './components/SearchPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <HeaderMovie/>
    <SearchPage/>
     <MovieCard></MovieCard>
    </>
  )
}

export default App
