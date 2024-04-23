import { useState } from 'react'
import SearchBar from './components/SearchBar'
import ImageList from './components/ImageList'
import './App.css'

function App() {
  const [images, setImages] = useState([])

  const handleSubmit = async(term) => {
    console.log('usted esta buscnado con:', term)
  }

  return (
    <div>
      <h1>App</h1>
      <SearchBar onSubmit={handleSubmit}/>
    </div>
  )
}

export default App
