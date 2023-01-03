 import { createSlice,AsyncThunk, createAsyncThunk } from "@reduxjs/toolkit";
 import cartItems from '../../cartItems'

 const url = 'https://course-api.com/react-useReducer-cart-project';

 const initialState = {
    cartItems : [],
    amount:1,
    total:0,
    isLoading:true,
 }

 export const getCartItems = createAsyncThunk('cart/getCartItems',()=>{
   return fetch(url)
        .then((resp)=>resp.json())
        .catch((err)=> console.log(err))
 })

 const cartSlice = createSlice({
   //name of the slice
    name:'cart',
    //initialstate
    initialState,
    //reducers methods which we will utilise it to call from 
    // component
    reducers:{
      clearCart : (state)=>{
         state.cartItems = [];
      },
      removeItem:(state,action)=>{
        // we actually dont have to return anything because
        // redux immery do that for us
        const itemID = action.payload;
        state.cartItems = state.cartItems.filter((item)=>{
             return item.id !== itemID
        })
      },
      increase:(state,{payload})=>{
        const cartItem = state.cartItems.find((item)=> item.id === payload.id)
        cartItem.amount += 1;
      },
      decrease:(state,{payload})=>{
        const cartItem = state.cartItems.find((item)=> item.id === payload.id)
        cartItem.amount -= 1;
      },
      calculateTotalAmount:(state,action)=>{
        let amount = 0;
        let total = 0;
        state.cartItems.forEach((item)=>{
         amount += item.amount;
         total += item.amount*item.price;
        })
        state.amount = amount;
        state.total = total

      }
    },
    extraReducers:{
      [getCartItems.pending]:(state)=>{
        state.isLoading = true;
      },
       [getCartItems.fulfilled]:(state,action)=>{
        console.log(action)
        state.isLoading = false;
        state.cartItems = action.payload
      },
       [getCartItems.rejected]:(state)=>{
        state.isLoading = false;
      },
    }
 })

//   console.log(cartSlice)
export const { clearCart ,removeItem ,increase,decrease , calculateTotalAmount} = cartSlice.actions

export default cartSlice.reducer