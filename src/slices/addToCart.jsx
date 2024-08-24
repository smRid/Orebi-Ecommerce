import { createSlice } from '@reduxjs/toolkit'

export const addToCart = createSlice({
  name: 'cartadd',
  initialState: {
    cart:[],
    cartOpen:""
  },
  reducers: {
    addCart: (state,action) => {

        if(state.cart.length>0){
            let arr=[]
            state.cart.map(item=>{
                if(item.title==action.payload.title){
                    item.quantity++
                    arr.push(item.title)
    
                }
            })
            if(arr.indexOf(action.payload.title)==-1){
                state.cart.push(action.payload)
            }

        }else{
            state.cart.push(action.payload)

        }
        
       
        
    },
    increment:(state,action)=>{
      state.cart.map(item=>{
        if(item.title==action.payload.title){
          item.quantity++
        }
      })
    },
    decrement:(state,action)=>{
      state.cart.map(item=>{
        if(item.title==action.payload.title){
          if(item.quantity>1){
            item.quantity--
            

          }else if(item.quantity>=1){
            state.cart.map((item,index)=>{
              if(item.title==action.payload.title){
                state.cart.splice(index,1)
              }
            })
          }
        }
      })
    },
    remoneButton:(state,action)=>{
      state.cart.map((item,index)=>{
        if(item.title==action.payload.title){
          state.cart.splice(index,1)
        }
      })
      
    }, 
    cartOpen:(state,action)=>{
      state.cartOpen=action.payload
      // console.log(state.cartOpen);
  },
  },
})

export const { addCart,increment,decrement,remoneButton,cartOpen } = addToCart.actions

export default addToCart.reducer