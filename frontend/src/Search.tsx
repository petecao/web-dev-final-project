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
            <button onClick={() => history.push(`/stock/${query}`)}>Go</button>
        </span>
        
    )
}

export default Search;