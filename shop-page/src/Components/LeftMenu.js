import React from 'react'
import './LeftMenu.css'

const LeftMenu = () => {
  return (
    <div>
        <div className="left-menu">
        <div className="left-menu-title">Sort by</div>
        <form href="#" className="sorting-feature">
          <label htmlFor="sort" >
            <select name="sort" id="sort" className="sort-selection--style">
              <option value="lowest" className="option-select">
                Price - Lowest first
              </option>
              <option value="highest" className="option-select">
                Price - Highest first
              </option>
              <option value="a-z" className="option-select">
                Name - A to Z
              </option>
              <option value="z-a" className="option-select">
                Rating - High to low
              </option>
            </select>
          </label>
        </form>

        <div className='left-menu-title'>Brands</div>

        <div className='custom-checkbox'>
          <input type='checkbox' id='check' />
          <label for="check">Brand 1</label>
          <br></br>
          <input type='checkbox' id='check' />
          <label for="check">Brand 2</label>
          <br></br>
          <input type='checkbox' id='check' />
          <label for="check">Brand 3</label>
          <br></br>
          <input type='checkbox' id='check' />
          <label for="check">Brand 4</label>
          <br></br>
          <input type='checkbox' id='check' />
          <label for="check">Brand 5</label>
        </div>

      </div>
    </div>
  )
}

export default LeftMenu