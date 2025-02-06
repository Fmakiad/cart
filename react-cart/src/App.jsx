// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from './components/Products'
import CartProvider from './context/cart'
import "./index.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (

      <>
       <CartProvider>
      <Products/>
    </CartProvider>
    
    <div>
        <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar={false}
          closeOnClick
          pauseOnHover
        />
      </div>
      </>
  )
}

export default App
