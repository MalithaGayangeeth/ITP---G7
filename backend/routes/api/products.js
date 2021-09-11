const express = require('express')
const router = express.Router()
const auth = require('../../middleware/auth')
const { check, validationResult } = require('express-validator')

const Products = require('../../models/Products')

// @route   GET api/products
// @desc    Get all products
// @access  private
router.get('/', async (req, res) => {
  try {
    const products = await Products.find()
    res.json(products)
  } catch (error) {
    console.error(error.message)
    res.status(500).send('Server Error')
  }
})

// @route   POST api/products
// @desc    Add new products
// @access  private
router.post(
  '/',
  [
    auth,
    [
      check('product_name', 'product_name is required').notEmpty(),
      check('product_image', 'product_image is required').notEmpty(),
      check('product_brand', 'product_brand is Required').notEmpty(),
      check('product_price', 'product_price is Required').notEmpty(),
      check('product_category', 'product_category is Required').notEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    const {
      product_name,
      product_image,
      product_brand,
      product_price,
      product_category,
    } = req.body

    try {
      product = new Products({
        product_name,
        product_image,
        product_brand,
        product_price,
        product_category,
      })

      await product.save()
      const products = await Products.find()
      res.json(products)
    } catch (err) {
      console.error(err.message)
      res.status(500).send('Server error')
    }
  }
)

module.exports = router
