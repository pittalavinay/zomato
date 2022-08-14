import React from 'react'
import './App.css';
import Card from './Card';
const Header = () => {
  return (
    <div>
        <div className='first'>
<header className='fir'>
  <ul>
    <li className='in'>investor Relations</li>
    <li>Add Retaurant</li>
    <li>Login</li>
    <li className='sig'>Sign up</li>
  </ul>
</header>
</div>
<div className='app'>Get the App</div>
<center>
    <div>
        <img src="https://b.zmtcdn.com/web_assets/8313a97515fcb0447d2d77c276532a511583262271.png" alt='ing' width="300px" height="70px" className='zomato'/>
    </div><br/><br/>
    <div className='dis'><h1>Discover the best food & drinks in Mumbai</h1>
</div>
<div><input type='text' className='input'></input></div>
<div></div>
</center>

<Card/>
    </div>
  )
}

export default Header