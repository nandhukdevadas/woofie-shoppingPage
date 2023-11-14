import React, {useState } from 'react'
import NavScrollExample from '../NavScrollExample';
import Categories from '../Categories';
import LeftMenu from '../FoodProduct';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Food.css';
import img1 from './images/Food/1.webp'

const Food = () => {
  return (
    <div>
      <NavScrollExample />
      <Categories />
      <LeftMenu />
      
    </div>
  );
};


export default Food