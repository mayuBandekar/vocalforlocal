import {
    PRODUCTS_ALL
} from "../action/vocal";

const initialState = {
    products: []
};

export default function ProductList(state = initialState, action) {
    switch (action.type) {

        case PRODUCTS_ALL:
            return {
                ...state,
                products: action.payload,
            };

        default:
            return state;
    }
}