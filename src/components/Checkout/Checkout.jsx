import React, { useContext } from 'react'
import { Outlet } from 'react-router-dom';
import { CartContext } from '../context/cart.context'
import './checkout.style.scss'


const Checkout = () => {

    const { total, deleteCartItem, subtractQuantityFromCart, addItemToCart, cartItem } = useContext(CartContext);


    return (
        <>
            <Outlet />
            <div className="checkout-container">

                {

                    cartItem.map(checkItem =>
                        <div className="checkout-item-container" key={checkItem.id}>
                            <div className="image-container">
                                <img src={checkItem.imageUrl} alt={`${checkItem.name}`} />
                            </div>
                            <div className="name">
                                <h3>{checkItem.name}</h3>
                            </div>
                            <div className="quantity">
                                <button className='btn-checkout' onClick={() => subtractQuantityFromCart(checkItem)}>-</button>
                                {checkItem.quantity}
                                <button className='btn-checkout' onClick={() => addItemToCart(checkItem)}>+</button>
                            </div>
                            <div className="price">
                                {checkItem.price}
                            </div>
                            <div className='remove-button'>
                                <button className='btn-checkout' onClick={() => deleteCartItem(checkItem)}>X</button>
                            </div>
                        </div>
                    )
                }
                <div className="total">Total : $ {total.reduce((sum, item) => { return sum + item }, 0)}</div>
            </div>
        </>

    )
}

export default Checkout
