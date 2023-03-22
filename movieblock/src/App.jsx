import React from 'react';
import './App.css';
import Dashboard from './Pages/Dashboard';


function App() {
  return (
    <div className='topnav'>
      <a onClick={<Dashboard/>}>Dashboard</a>
      <input type="text" placeholder="Huh...." name='Huh'></input>
      <button type='submit'><i className='fa fa-search'></i></button>
    </div>
  );
}

export default App;
