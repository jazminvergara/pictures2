import { useState } from "react";
import './SearchBar.css'

function SearchBar({onSubmit}){
    const [term, setTerm] = useState('')

    const handleFormSubmit = (event) => {
        event.preventDefault()
        console.log("necesito decirle al componente padre de los datos")
        onSubmit(term)
    }

    const handleChange = (event) => {
        console.log(event.target.value)
        setTerm(event.target.value)
    }

    const handleClick = () => {
        onSubmit(term)
    }
    return(
        <div className="search-bar">
            <h1>Search Bar</h1>
            <form onSubmit={handleFormSubmit}>
                confirma tu busqueda: {term}
                <input onChange={handleChange} value={term}/>
            </form>
            <button onClick={handleClick}>Click me </button>
        </div>
    )
}
export default SearchBar