import React, { useState } from 'react';
import  { useHistory } from 'react-router'
import { Link } from 'react-router-dom';



const Search = () => {
    const [query, changeQuery] = useState("");
    const history = useHistory();

    return(
        <span>
            <input 
            type="text"
            placeholder="Search"
            value={query}
            onChange={(e) => changeQuery(e.target.value)}
            />
            <a href={`/stock/${query}`}><button>Go</button></a>
        </span>
        
    )
}

export default Search;