import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
import { calculateTotalAmount ,getCartItems} from "./features/cart/cartSlice";
import { useEffect } from "react";
import { useSelector ,useDispatch } from "react-redux";
import Modal from "./components/Modal";

function App() {
  const {cartItems,isLoading} = useSelector((state)=>state.cart)
  const {isOpen} = useSelector((state)=>state.modal)

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(calculateTotalAmount());
  },[cartItems])

  useEffect(()=>{
    dispatch(getCartItems())
  },[])
  
  if(isLoading){
    return <div className="loading">
      <h1>loading...</h1>
    </div>
  }

  return(
    <main>
      { isOpen && <Modal></Modal>}
      <Navbar></Navbar>
      <CartContainer></CartContainer>
    </main>
  )
}
export default App;