import { createContext, useState, useEffect } from "react"
import {toast} from 'react-toastify'
export const CartContext = createContext()


const CartProvider = ({children}) => {
    const [cartItems, setCartItems] = useState(localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [])

    const addToCart = (item) =>{
        const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id) 
        toast.success(`${item.title}, added to cart.`)
        if(isItemInCart){
            setCartItems(
                cartItems.map((cartItem) =>
                cartItem.id === item.id ? {...cartItem, quantity: cartItem.quantity + 1} : cartItem
        )

            )
        }else{
            setCartItems([...cartItems, {...item, quantity: 1}])
        }
    }


const removeFromCart = (item) =>{
    const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id)
    toast.error('Item is removed from cart.')
    if(isItemInCart.quantity === 1){
        setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id))
    }else{
        setCartItems(
            cartItems.map((cartItem) => 
            cartItem.id === item.id ? {...cartItem, quantity: cartItem.quantity - 1} : cartItem
        )
        )
    }
}

const clearCart = () =>{
    setCartItems([])
}

const cartTotal = (cartItems) =>{
    return parseFloat(
        cartItems.reduce((total, item) => total + Number(item.price) *Number(item.quantity), 0)
    ).toFixed(2)
}

useEffect(()=>{
    localStorage.setItem('cartItems', JSON.stringify(cartItems))
}, [cartItems])

useEffect(()=>{
    const cartItems = localStorage.getItem('cartItems')
    if(cartItems){
        setCartItems(JSON.parse(cartItems))
    }
}, [])

  return (
    <CartContext.Provider
        value={{
            cartItems, 
            addToCart,
            removeFromCart,
            clearCart,
            cartTotal
        }}
    >
    {children}
    </CartContext.Provider>
  )
}

export default CartProvider
