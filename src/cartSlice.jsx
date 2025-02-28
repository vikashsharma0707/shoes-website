// import { createSlice } from "@reduxjs/toolkit";



// const cartSlice = createSlice({
//     name:"mycart",
//     initialState:{
//         cart:[]
//     },


//     reducers:{
//         addtoCart:((state,actions)=>{
//             let data = state.cart.filter((item)=>item.id==actions.payload);

//             if(data.length>=1){
//                 alert("data already added")
//             }

//             else{
//                 state.cart.push(actions.payload);
//                 alert("data added sucessfuly")
//             }

//         }),


//         delRec:((state,actions)=>{
//            state.cart= state.cart.filter((key)=>key.id!=actions.payload)
//         }),

//         addqnty:((state,actions)=>{
//             for(var i=0;i<state.cart.length;i++){
//                 if(state.cart[i].id==actions.payload){
//                     state.cart[i].qnty++
//                 }
//             }
//         }),

//         subqnty:((state,actions)=>{
//             for (var i=0;i<state.cart.length;i++){
//                 if(state.cart[i].id==actions.payload){
//                     if(state.cart[i].qnty<=1){
//                         alert("more than one")
//                     }

//                     else{
//                         state.cart[i].qnty--;
//                     }
//                 }
//             }
//         })


//     }
// })

// export default cartSlice.reducer;
// export const {addtoCart,delRec,addqnty,subqnty} =cartSlice.actions;




import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "mycart",
    initialState: {
        cart: []
    },

    reducers: {
        addtoCart: (state, actions) => {
            let data = state.cart.filter((item) => item.id === actions.payload.id);

            if (data.length >= 1) {
                alert("Item already added");
            } else {
                state.cart.push({ ...actions.payload, qnty: 1 }); // Initialize quantity when adding item
                alert("Item added successfully");
            }
        },

        delRec: (state, actions) => {
            state.cart = state.cart.filter((key) => key.id !== actions.payload);
        },

        addqnty: (state, actions) => {
            state.cart.forEach((item) => {
                if (item.id === actions.payload) {
                    item.qnty += 1;
                }
            });
        },

        subqnty: (state, actions) => {
            state.cart.forEach((item) => {
                if (item.id === actions.payload) {
                    if (item.qnty <= 1) {
                        alert("Quantity cannot be less than 1");
                    } else {
                        item.qnty -= 1;
                    }
                }
            });
        }
    }
});

export default cartSlice.reducer;
export const { addtoCart, delRec, addqnty, subqnty } = cartSlice.actions;
