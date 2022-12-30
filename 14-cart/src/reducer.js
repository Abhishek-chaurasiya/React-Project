import React from 'react'

const reducer = (state,action) => {
  if(action.type === 'CLEAR_CART'){
    return {...state, cart : []}
  }

  if(action.type === 'REMOVE'){
    const cart = state.cart.filter((cartItem)=> cartItem.id !== action.payLoad)
    console.log(cart)
    return  {...state , cart}
  }

  if(action.type === 'INCREASE'){
  
    return  {...state ,cart :state.cart.map((cartItem)=>{
      if(cartItem.id === action.payLoad){
        return{...cartItem,amount:cartItem.amount+1}
      }
      return cartItem
    })}
  }

  if(action.type === 'DECREASE'){
  
    return  {...state ,cart :state.cart.map((cartItem)=>{
      if(cartItem.id === action.payLoad){
        return{...cartItem,amount:cartItem.amount-1}
      }
      return cartItem
    }).filter((cartItem)=> cartItem.amount !== 0)}
  }

  if(action.type === 'GET_TOTALS'){
     let {total,amount} = state.cart.reduce(
      (cartTotal,cartItem)=>{
        const {price,amount} = cartItem
        const itemTotal = price*amount
        
        cartTotal.total += itemTotal;
        cartTotal.amount += amount
        console.log(price,amount)
        return cartTotal
     },
     {
       total:0,
       amount:0
     })
     
     total = parseFloat(total.toFixed(2))
    return {...state,total,amount}
  }

  if(action.type === 'LOADING'){
    return {...state,loading:true}
  }
  if(action.type === 'DISPLAY_ITEMS'){
    return {...state,cart:action.payLoad,loading:false}
  }

 throw new Error('no mathching action type')
}

export default reducer