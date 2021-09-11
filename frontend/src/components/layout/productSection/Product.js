import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addToCart } from '../../../actions/cart'

const Product = ({ item, addToCart }) => {
  const { product_name, product_image, product_brand, product_price } = item

  const addCart = (Item) => {
    addToCart({ ...Item, amount: 1 })
  }

  return (
    <div className='col'>
      <div className='card card-hover'>
        <img src={product_image} className='card-img-top' alt={product_name} />
        <div className='card-body'>
          <h5 className='card-title'>{product_name}</h5>
          <h6 className='card-title'>Rs. {product_price}</h6>
          <span className='d-flex justify-content-between align-items-end'>
            <p className='card-text'> {product_brand}</p>
            <span
              role='button'
              className='circle-icon'
              onClick={() => addCart(item)}
            >
              <i className='bi bi-cart-plus'></i>
            </span>
          </span>
        </div>
      </div>
    </div>
  )
}

Product.propTypes = {
  addToCart: PropTypes.func.isRequired,
  cart: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  cart: state.cart,
})

export default connect(mapStateToProps, { addToCart })(Product)
