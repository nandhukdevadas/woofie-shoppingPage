import React from 'react'
import NavScrollExample from '../NavScrollExample';
import Categories from '../Categories';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Food.css';



const Food = () => {
  return (
    <div>
        <NavScrollExample />
        <Categories />
        <div className='left-menu'>
            <div className='sort-by-title'>Sort by</div>
        </div>
    </div>
  )
}

export default Food