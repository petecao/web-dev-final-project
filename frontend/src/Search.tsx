import React, { useState } from 'react';
import  { useHistory } from 'react-router'
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button'



const Search = () => {
    const [query, changeQuery] = useState("");
    const history = useHistory();

    return(
        <span>
            <form onSubmit={() => history.push(`/stock/${query}`)}>
            <input 
            type="text"
            placeholder="Search"
            value={query}
            onChange={(e) => changeQuery(e.target.value)}
            />
            <Button variant="secondary" type="submit">Go</Button>
            </form>
        </span>
        
    )
}

export default Search;