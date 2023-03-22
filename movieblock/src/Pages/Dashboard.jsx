import React from "react"
import './Dashboard.css';

function Dashboard(){
    return(
       <div className="nav">
        <ul>
            <li>MovieBlock</li>
        </ul>
        <div className="search-container">
            <form>
                <input type="text" placeholder="What do you want to watch..."></input>
                <button type='submit'><i class='fa fa-search'></i></button>
            </form>
        </div>
       </div>
    )
};

export default Dashboard;