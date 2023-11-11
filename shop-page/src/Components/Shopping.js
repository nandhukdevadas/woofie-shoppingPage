import React from 'react'
import NavScrollExample from './NavScrollExample';
import Categories from './Categories';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Shopping.css';



const shopping = () => {
  return (
    <div>
        <NavScrollExample />
        <Categories />
        <div className='banner'>
          Please select a category to start shopping!
        </div>
    </div>
  )
}

export default shopping