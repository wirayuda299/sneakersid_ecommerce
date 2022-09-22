import { useRef } from "react"
import { Link } from 'react-router-dom';
import { AiOutlineMinus, AiOutlinePlus, AiOutlineShoppingCart, } from 'react-icons/ai';
import { useStateContext } from '../../../context/StateContext';
import { urlFor } from '../../../lib/client';

const Cart = () => { 

  const formatToRupiah = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
  });
  
  const { totalPrice, cartItems, tax, updateCartQuantity } = useStateContext();
  
  return (
    <div
      className='modal fade modal-lg'
      id='cart'
      tabIndex='-1'
      aria-labelledby='cartModalLabel'
      aria-hidden='true'>
      <div className='modal-dialog modal-dialog-centered modal-dialog-scrollable'>
        <div className='modal-content'>
          <div className='modal-header border-0 bg-dark'>
            <button
              type='button'
              className='btn-close text-white'
              data-bs-dismiss='modal'
              aria-label='Close'></button>
          </div>
          <div className='modal-body bg-dark'>
            <div>
              {cartItems.length === 0 ? (
                <div className='container-fluid d-flex flex-column justify-content-center align-items-center py-3'>
                  <AiOutlineShoppingCart size={150} className='text-white' />
                  <h3 className='py-2 text-white'>Ups!! your cart is empty </h3>
                  <Link className='btn btn-danger pt-2' to='/products'>Shop now!</Link>
                </div>
              ) : (

                <div>
                  {cartItems.map((product) => (
                    <div className="row justify-content-between align-items-center text-white" key={product._id}>
                      <div className="col-md-8 my-3">
                        <img src={urlFor(product?.image[0])} alt={product.name} height='300' width='300' />
                      </div>
                      <div className="col-md">
                        <div>
                          <h4 className='fw-bold py-3'>{product.name}</h4>
                          <p className='pb-3'>{formatToRupiah.format(product.price)}</p>
                          <div className='btn-group'>
                            <button className='btn btn-danger rounded-1' onClick={() => updateCartQuantity(product._id, 'increment')}><AiOutlinePlus /></button>
                            <h5 className='px-3'>{product.quantity}</h5>
                            <button className='btn btn-danger rounded-1' onClick={() => updateCartQuantity(product._id, 'decrement')}> <AiOutlineMinus /> </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}

                  <div className='modal-footer'>
                    <div className='container d-flex flex-column py-2 text-white'>
                      <h6>Subtotal :{formatToRupiah.format(totalPrice)}</h6>
                      <h6>Total Harga :{formatToRupiah.format(Math.floor(totalPrice + (totalPrice * tax)))}</h6>
                      <button className='btn btn-danger btn-lg py-2 w-100 mt-3'>
                        Checkout
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
export default Cart