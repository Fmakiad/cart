import { useContext } from "react";
import propTypes from "prop-types";
import { X } from "lucide-react";
import { CartContext } from "../context/cart";
import {
  Button,
  Typography,
  Drawer,
  IconButton,
} from "@material-tailwind/react";

const Cart = ({ isOpen, setIsOpen }) => {
  const { cartItems, addToCart, removeFromCart, clearCart, cartTotal } =
    useContext(CartContext);
  return (
    <Drawer open={isOpen} onClose={() => setIsOpen(false)}>
      <Drawer.Overlay>
        <Drawer.Panel className="h-[80vh] overflow-y-auto w-[50vw] mx-auto max-w-[100vw] transition-all duration-200 px-3">
          <div className="flex items-center justify-center gap-4">
            <Typography className="text-xl text-centertext-gray-800">My Items</Typography>
            
            <IconButton
              size="sm"
              variant="ghost"
              color="secondary"
              className="absolute right-2 top-2"
              isCircular
              onClick={() => setIsOpen(false)}
            >
              <X className="h-5 w-5" color="red" />
            </IconButton>
          </div>

          <div className="flex flex-col gap-4">
            {cartItems.map((item) => (
              <div className="flex justify-between items-center" key={item.id}>
                <div className="flex justify-between items-center gap-4 px-4">
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
                <div className="flex items-center gap-2">
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
              <Typography variant="small" className="font-semi text-gray-700">
                Total: ZMK {cartTotal(cartItems)}
              </Typography>
              <Button
                color="secondary"
                className="px-4 py-2 bg-red-600 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700 "
                onClick={() => clearCart()}
              >
                Clear Cart
              </Button>
            </div>
          ) : (
            <Typography className="text-lg font-bold text-center mt-10">
              Your cart is empty, add something up 😊😊
            </Typography>
          )}

          {/* Cart paginnation comes here */}
        </Drawer.Panel>
      </Drawer.Overlay>
    </Drawer>
  );
};

Cart.propTypes = {
  isOpen: propTypes.bool,
  setIsOpen: propTypes.func,
};
export default Cart;
