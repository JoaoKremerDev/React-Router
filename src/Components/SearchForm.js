import { useNavigate } from "react-router-dom"

import { useState } from "react"

import '../Components/SearchForm.css';

const SearchForm = () => {
    const navigate = useNavigate();
    const [query, setQuery] = useState();

    const handleSubmit = (e) => {
        e.preventDefault()
        navigate("/search?q=" + query);
    };

  return (
    <form onChange={handleSubmit} className="searchform">
        <input type="text" onChange={(e) => setQuery(e.target.value)} value={query}placeholder="Pesquisar por um produto" />
        <input type="submit" value="buscar" id="" />
    </form>
  )
}

export default SearchForm