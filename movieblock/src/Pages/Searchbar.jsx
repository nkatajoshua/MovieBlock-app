import React,{ useState, useEffect } from 'react';
import './Searchbar.css';
import axios from 'axios';


function SerachBar(props){
    
    const axios = require("axios");

    const options = {
      method: 'GET',
      url: 'https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup',
      params: {term: 'bojack', country: 'uk'},
      headers: {
        'X-RapidAPI-Key': 'bb0ff7c2abmsh96b734ed2f509b6p1425a7jsn434f2ec8c6c8',
        'X-RapidAPI-Host': 'utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com'
      }
    };
    
    axios.request(options).then(function (response) {
        console.log(response.data);
    }).catch(function (error) {
        console.error(error);
    });
    
    
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