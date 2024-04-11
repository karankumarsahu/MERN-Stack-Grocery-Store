import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    loading: true,
    cartItems: [],
    subtotal: 0,
    shippingCharges: 0,
    tax: 0,
    total: 0,
    billingAddress: {
        email: "",
        state: "",
        city: "",
        district: "",
        pincode: "",
        address: "",
    }
}

export const cartReducer = createSlice({
    name: "cartReducer",
    initialState,
    reducers: {
        addToCart : (state, action) => {
            state.loading = true;

            const index = state.cartItems.findIndex(item => item.id === action.payload.id)

            if (index !== -1) {
                state.cartItems[index].quantity += action.payload.quantity;
            }

            else {
                state.cartItems.push(action.payload),
                    state.loading = false
            }
        },

        removeCartItem: (state, action) => {
            state.loading = true;
            state.cartItems = state.cartItems.filter((i) => i.id !== action.payload
            );
            state.loading = false;
        },

        calculatePrice: (state) => {
            state.subtotal = state.cartItems.reduce((acc, item) => acc + item.discountedPrice * item.quantity, 0);
            state.tax = state.subtotal * 0.09;
            state.shippingCharges = 100;
            state.total = Math.round(state.subtotal + state.tax + state.shippingCharges);
            state.loading = false;
        },

        saveShippingInfo: (state, action) => {
            state.shippingInfo = action.payload;
          },
          resetCart: () => initialState,
    }
})

export const { addToCart, removeCartItem, calculatePrice, saveShippingInfo, resetCart } = cartReducer.actions;