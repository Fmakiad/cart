import { useContext } from "react"
import propTypes from 'prop-types'
import { X } from "lucide-react";
import { CartContext } from "../context/cart"
import { Button, Typography } from "@material-tailwind/react";


const Cart = ({showModel, toggle}) => {
    const {cartItems, addToCart, removeFromCart, clearCart, CartTotal} = useContext(CartContext)
  return (
    showModel && (
      <div className="flex flex-col items-center bg-white gap-8 p-10 text-black text-xs">
        <Typography variant="h2" className="text-gray-700">
          Cart
        </Typography>

        <div className="absolute right-16 top-10">
          <Button onClick={toggle} className="bg-white/0" variant="ghost">
            <X color="#860909"/>
          </Button>
        </div>

        <div className="flex flex-col gap-4">
          {cartItems.map((item) => (
            <div className="flex justify-between items-center" key={item.id}>
              <div className="flex gap-4 px-4">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="rounded-md h-18"
                />
                <div className="flex flex-col">
                  <p className="text-ls text-gray-800">{item.title}</p>
                  <p className="text-gray-900 ">zmk{item.price}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">

              <Button
                  className="px-4 py-2 bg-gray-700 text-white text-md font-bold uppercase rounded hover:bg-gray-800 focus:outline-none focus:bg-gray-800 "
                  onClick={() => removeFromCart(item)}
                >
                  -
                </Button>

                <p>{item.quantity}</p>
                
                <Button
                  className="px-4 py-2 bg-gray-700 text-white text-xs font-bold uppercase rounded hover:bg-gray-800 focus:outline-none focus:bg-gray-800 "
                  onClick={() => addToCart(item)}
                >
                  +
                </Button>
               
              </div>
            </div>
          ))}
        </div>
        {cartItems.length > 0 ? (
          <div className="flex flex-col justify-between items-center">
            <Typography className="font-bold">Total: ZMK{CartTotal}</Typography>
            <Button
              className="px-4 py-2 bg-red-600 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700 "
              onClick={() => clearCart(item)}
            >
              Clear Cart
            </Button>
          </div>
        ) : (
          <Typography className="text-lg font-bold">
            Your cart is empty
          </Typography>
        )}
      </div>
    )
  );
}

Cart.propTypes = {
    ShowModel: propTypes.bool,
    toggle: propTypes.func
}
export default Cart
