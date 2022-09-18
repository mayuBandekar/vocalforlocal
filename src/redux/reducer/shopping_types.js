import {
    ADD_TO_CART,
    REMOVE_FROM_CART,
    ADJUST_QTY,
    LOAD_CURRENT_ITEM,
    PRODUCTS_ALL
} from "../action/vocal";

const initialState = {
    products: [],
    cart: [],
    currentitem: null,
};

export default function shopReducer(state = initialState, action) {
    switch (action.type) {
        case PRODUCTS_ALL:
            return {
                ...state,
                products: action.payload,
            };
        case ADD_TO_CART:
            const item = state.products.find(prod => prod.id === action.payload.id);
            console.log(item);
            const inCart = state.cart.find(item => item.id === action.payload.id ? true : false);
            console.log(inCart);

            return {
                // cart: [],
                ...state,
                cart: inCart ? state.cart.map((item) => item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item) : [...state.cart, { ...item, qty: 1 }]
            };
        case REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter((item) => item.id !== action.payload.id),
            };
        case ADJUST_QTY:
            return {
                ...state,
                cart: state.cart.map(item => item.id === action.payload.id ? { ...item, qty: action.payload.qty } : item)
            };
        case LOAD_CURRENT_ITEM:
            return {
                ...state,
                currentItem: action.payload,

            };
        default:
            return state;
    }
}

