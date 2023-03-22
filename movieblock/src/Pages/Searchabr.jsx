import React,{ useState } from 'react';
import './Searchbar.css';

function SerachBar(props){
    const [searchTerm, setSearchTerm] = useState('');

    function handleChange(event){
        setSearchTerm(event.target.value);
    }
    function handleSubmit(event){
        event.preventDefault();
        props.onSearch(searchTerm);
    }

    return(
        <form onSubmit={handleSubmit} className='formdesign'>
            <input type='text' placeholder='What do you want to watch....' value={searchTerm} onChange={handleChange}/>
            <button type='submit'>Search</button>
        </form>
    );
}

export default SerachBar;