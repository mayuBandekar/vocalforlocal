import {combineReducers} from 'redux'
import login from './login'
import ProductList from './Products';
import shopReducer from "./shopping_types";

const reducers = combineReducers({
  user: login,
  Product : ProductList,
  shop : shopReducer

})
export default reducers;