import { useContext } from 'react'

import { CartContext } from '../../components/context/cart.context'


import { ShoppingIcon, CartIconContainer, ItemCount } from './cart-icon.styles'


const CartIcon = () => {
    const { cartItem, isCartOpen, setIsCartOpen } = useContext(CartContext)

    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen)
    return (
        <CartIconContainer  onClick={toggleIsCartOpen}>
            <ShoppingIcon className="shopping-icon" />
            <ItemCount className="item-count">{cartItem.reduce((acc, v) => { return acc + v.quantity }, 0)}</ItemCount>
        </CartIconContainer>
    )

}

export default CartIcon