import Button from '../button/button.component'
import { CartDropdownContainer, CartItems } from './cart-dropdown.style'

import CartItem from '../../components/cart-item/cart-item.component'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/cart.context'
import { useContext } from 'react'

const CartDropdown = () => {

    const { cartItem } = useContext(CartContext);
    return (
        <CartDropdownContainer >
            <CartItems >
                {cartItem.map(item => <CartItem key={item.id} cartItem={item} />)}
            </CartItems>


            <Link to='/checkout'>
                <Button >GO TO CHECKOUT</Button>
            </Link>

        </CartDropdownContainer>
    )
}

export default CartDropdown;
