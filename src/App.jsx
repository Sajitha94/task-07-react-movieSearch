import { useState } from 'react'
import './App.css'
import Header from "./components/header";
import MovieCard from './components/MovieCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header></Header>
     <MovieCard></MovieCard>
    </>
  )
}

export default App
