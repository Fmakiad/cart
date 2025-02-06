import { Button, Typography, Spinner, Badge, Tooltip, IconButton } from "@material-tailwind/react"
import { ShoppingCart, ShoppingBag, Plus } from "lucide-react"
import Cart from "./Cart"
import { toast } from 'react-toastify'
import axios from "axios"
import { useContext, useState, useEffect } from "react"
import { CartContext } from "../context/cart"

const Products = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const [showModel, setShowModel] = useState(false)
    const {cartItems, addToCart } = useContext(CartContext)

    const toggle = () =>{
      setShowModel(!showModel)
    }

    useEffect(() => {
      const getProducts = async () => {
        try{
          const response = await axios.get("https://dummyjson.com/products")
          setProducts(response.data.products || [])
        }catch(error){
          toast.error(
            setError('Failed to load products')
          )
        }finally{
          setLoading(false)
        }
      }
      getProducts();
    }, []);

    if (loading) return <Spinner/>

  return (
    <div className="flex flex-col justify-center bg-green-100/10 pb-10">
      <div className="flex justify-between items-center bg-gray-500/10 mb-4 px-20 py-5">
        <div className="flex items-center justify-center">
          <ShoppingBag color="#D2691E" />
          <Typography variant="h6" className="text-[#d78850]">
            Stella
          </Typography>
        </div>
        {!showModel && (
          <Tooltip>
            <Tooltip.Trigger>
              <button variant="ghost" className="bg-none focus:outline-none p-2" onClick={toggle}>
              <Badge>
                <Badge.Content>
                  <IconButton color="secondary">
                    <ShoppingCart
                      color="#D78850"
                      className="h-4 w-4 stroke-2"
                    />
                  </IconButton>
                </Badge.Content>
                <Badge.Indicator className="bg-[#D78850] border-none">
                  <p>{cartItems.length}</p>
                </Badge.Indicator>
              </Badge>
              </button>
            </Tooltip.Trigger>
            <Tooltip.Content className="bg-[#D78850]">My Cart</Tooltip.Content>
          </Tooltip>
          // <Tooltip>
          // <Tooltip.Trigger><Button
          //   color=""
          //   className="relative flex items-center justify-center gap-2 px-4 py-2 bg-[#d78850] font-bold uppercase rounded-full h-16 w-16 hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
          //   onClick={toggle}
          // >
          //   <ShoppingCart color="#fff" />{" "}
          //   <p className="text-white">
          //     {cartItems.length}
          //   </p>
          // </Button> </Tooltip.Trigger>
          // <Tooltip.Content className="bg-gray-700">
          //   My Cart
          // </Tooltip.Content>
          // </Tooltip>
        )}
      </div>

      <div className="grid sm:grid-cols-2 mg:grind-cols-3 lg:grid-cols-4 gap-4 px-10">
        {products.map((product) => (
          <div key={product.id} className="bg-white shadow-md rounded-lg p-5">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="rounded-lg h-48"
            ></img>
            <div className="mt-4">
              <Typography
                variant="h5"
                className="uppsercase font-bold text-gray-700"
              >
                {product.title}
              </Typography>
              <p className="mt-2 text-gray-600">
                {product.description.slice(0, 50)}....
              </p>
              <p className="mt-2 textgray-600">ZMK{product.price}</p>
            </div>
            <div className="flex justify-between items-center py-5">
              <Button
                variant="outline"
                color="#D78850"
                size="sm"
                className="px-4 py-2 text-white text-xs font-bold rounded bg-[#D78850] hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                onClick={() => addToCart(product)}
              >
                Add to cart
                <Plus className="h-4" />
              </Button>
            </div>
          </div>
        ))}
      </div>
      <Cart showModel={showModel} toggle={toggle} />
    </div>
  );
}

export default Products
