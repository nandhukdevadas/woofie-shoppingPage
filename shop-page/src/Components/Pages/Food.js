import React, {useState } from 'react'
import NavScrollExample from '../NavScrollExample';
import Categories from '../Categories';
import LeftMenu from '../LeftMenu';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Food.css';

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