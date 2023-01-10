import { createContext, useEffect, useState } from 'react'


const addCartItem = (cartItems, productToAdd) => {

    const existingCartItem = cartItems.find(item => item.id === productToAdd.id)
    if (existingCartItem) {
        return cartItems.map(cartItem =>
            cartItem.id === productToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        )

    }

    return [...cartItems, { ...productToAdd, quantity: 1 }]

}

const removeCartItem = (cartItems, productToRemove) => {

    return cartItems.filter(item => item.id !== productToRemove.id)

}
const addQuantity = (cartItems, productToAdd) => {


    return cartItems.map(cartItem =>
        cartItem.id === productToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
    )

}

const subtractQuantity = (cartItems, productTosubtract) => {
    return cartItems.map(cartItem =>
        cartItem.id === productTosubtract.id ?
            { ...cartItem, quantity: cartItem.quantity <= 1 ? cartItem.quantity = 1 : cartItem.quantity - 1 } : cartItem
    )
}
const totalPrices = (cartItem) => {
    return cartItem.map(cart => cart.quantity * cart.price)
}

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {

    },
    cartItem: [],
    addItemCartItem: () => { },
    total: [],
    addPriceQuantity: () => { },
})

export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false)
    const [cartItem, setCartItem] = useState([]);
    const [total, setTotal] = useState([]);

    const addItemToCart = (productToAdd) => {
        setCartItem(addCartItem(cartItem, productToAdd))
    }

    const addQuantityToCart = (productToAdd) => {
        setCartItem(addQuantity(cartItem, productToAdd))
    }
    const subtractQuantityFromCart = (productToAdd) => {
        setCartItem(subtractQuantity(cartItem, productToAdd))
    }

    const deleteCartItem = (productToAdd) => {
        setCartItem(removeCartItem(cartItem, productToAdd))
    }
    useEffect(() => {
        setTotal(totalPrices(cartItem))

    }, [cartItem])
    const value = { isCartOpen, setIsCartOpen, addItemToCart, cartItem, addQuantityToCart, subtractQuantityFromCart, total, deleteCartItem }

    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )

}