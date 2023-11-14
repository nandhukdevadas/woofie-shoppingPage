import React from 'react'
import './FoodProduct.css'
import img1 from './Pages/images/Food/1.webp'

const LeftMenu = () => {
  return (
    <div className='left-menu-wrap'>
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

        <div className='row_products'>
        <div className='products-card-wrap'>
          <div className='card-wrap'>
            <div className='image'>
              <img src={img1} alt='Food' className='card-image'></img>
            </div>
            <div className='product-title'>
              <p>Premium Dog Food</p>
            </div>
            <div className='product-rating'>
              <p>Rating - X/5</p>
            </div>
            <div className='product-price'>
              <p>1990</p>
            </div>
            <div className='add-to-cart'>
              <input type='button' value={"Add to cart"} className='add-to-cart-button'></input>
            </div>
          </div>
        </div>
        <div className='products-card-wrap'>
          <div className='card-wrap'>
            <div className='image'>
              <img src={img1} alt='Food' className='card-image'></img>
            </div>
            <div className='product-title'>
              <p>Premium Dog Food</p>
            </div>
            <div className='product-rating'>
              <p>Rating - X/5</p>
            </div>
            <div className='product-price'>
              <p>1990</p>
            </div>
            <div className='add-to-cart'>
              <input type='button' value={"Add to cart"} className='add-to-cart-button'></input>
            </div>
          </div>
        </div>
        <div className='products-card-wrap'>
          <div className='card-wrap'>
            <div className='image'>
              <img src={img1} alt='Food' className='card-image'></img>
            </div>
            <div className='product-title'>
              <p>Premium Dog Food</p>
            </div>
            <div className='product-rating'>
              <p>Rating - X/5</p>
            </div>
            <div className='product-price'>
              <p>1990</p>
            </div>
            <div className='add-to-cart'>
              <input type='button' value={"Add to cart"} className='add-to-cart-button'></input>
            </div>
          </div>
        </div>

        </div>

        
    </div>
  )
}

export default LeftMenu