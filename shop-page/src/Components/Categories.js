import React from 'react'
import './Categories.css'
import {Routes, Route, Link} from 'react-router-dom';

const Categories = () => {
  return (
      <div>
          <div className='categories-wrap'>
          <div className='category' ><Link to='/Shopping/Food' style={{ textDecoration: 'none' ,color: '#494949' }}>Food</Link></div>
          <div className='category'><Link to='/Shopping/Supplies' style={{ textDecoration: 'none',color: '#494949' }}>Supplies</Link></div>
          <div className='category'><Link to='/Shopping/Toys' style={{ textDecoration: 'none',color: '#494949' }}>Toys</Link></div>
          <div className='category'><Link to='/Shopping/Grooming' style={{ textDecoration: 'none',color: '#494949' }}>Grooming</Link></div>
          <div className='category'><Link to='/Shopping/Bed' style={{ textDecoration: 'none',color: '#494949' }}>Bed & Bedding</Link></div>
          <div className='category'><Link to='/Shopping/Cloths' style={{ textDecoration: 'none',color: '#494949' }}>Clothing & Accessories</Link></div>
          </div>
      </div>
  )
}

export default Categories