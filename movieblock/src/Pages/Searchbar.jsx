import React,{ useState, useEffect } from 'react';
import './Searchbar.css';
import axios from 'axios';


function SerachBar(props){

   const[nameList, setNameList] = useState([])
   const [searchTerm, handleSubmit] = useState ('')

   useEffect(()=>{
    axios.get('https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup?limit=10')
    .then((response)=>{setNameList(response.data.results)})
   },[])

    return(
        <form onSubmit={handleSubmit} className='formdesign'>
            <input type='text' placeholder='What do you want to watch....' value={searchTerm} onChange={(e)=>handleSubmit(e.target.value)}/>
            {nameList.filter((item)=>{
                if (searchTerm===""){
                   return item 
                }
                else if(item.name.toLowerCase().includes(searchTerm.toLowerCase())){
                    return item
                }
            })
            .map((item)=>{
            return <h1>{item.name}</h1>
            })}
            <button type='submit'>Search</button>
        </form>
    );
}

export default SerachBar;