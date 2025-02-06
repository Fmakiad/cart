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
          autoClose={2000}
          hideProgressBar={false}
          closeOnClick
          pauseOnHover
          // toastStyle={{backgroundColor: '#555', color: '#fff', fontSize: '12px', padding: "12px 14px"}}
        />
      </div>
      </>
  )
}

export default App
