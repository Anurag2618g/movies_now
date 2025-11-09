import React, { useState } from 'react'
import './App.css';
import Search from './components/Search';

const App = () => {
  const [searchText, setSearchText] = useState('');
  return (
    <main>
      <div className="pattern" />

      <div className="wrapper">
        <header>
          <img src="/hero.png" alt="hero banner" />
          <h1>Find <span className='text-gradient'>Movies</span> You'll Enjoy without The Hassel</h1>
        </header>
        <Search searchText = {searchText} setSearchText = {setSearchText} />
      </div>
    </main>
  )
}

export default App