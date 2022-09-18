import axios from "axios";
export const LOGIN = "LOGIN";
export const LOGIN_BEGIN = "LOGIN_BEGIN";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";
export const PRODUCTS_ALL = "PRODUCTS_ALL";
export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const ADJUST_QTY = "ADJUST_QTY";
export const LOAD_CURRENT_ITEM = "LOAD_CURRENT_ITEM";


const APIURL = "http://localhost:8000/userLogin";


export const login = (email, password) => {
  return (dispatch) => {
    dispatch({
      type: LOGIN_BEGIN,
    });

    axios
      .post(APIURL, {
        email: email,
        password: password,
      })
      .then((res) => {
        // console.log(res);
        dispatch({
          type: LOGIN_SUCCESS,
          payload: res.data.data
        });
        localStorage.setItem("email", JSON.stringify(email))

      })
      .catch((err) => {
        console.log(err.response.data.notice);
        dispatch({
          type: LOGIN_FAIL,
          payload: err.response.data.notice
        });
        localStorage.setItem("fail", JSON.stringify(err.response.data.notice))

        // localStorage.setItem("loader", JSON.stringify(email))

      });

  };
};

export const products = (data) => {
  return (dispatch) => {
    dispatch({
      type: PRODUCTS_ALL,
      payload: data
    });
  }
}

export const addToCart = (itemID) => {
  return (dispatch) => {
    dispatch({
      type: ADD_TO_CART,
      payload: {
        id: itemID
      }
    });

  }
}

export const removeFromCart = (itemID) => {
  return (dispatch) => {
    dispatch({
      type: REMOVE_FROM_CART,
      payload: {
        id: itemID
      }
    });
  }
}

export const adjustQty = (itemId, value) => {
  return (dispatch) => {
    dispatch({
      type: ADJUST_QTY,
      payload: {
        id: itemId,
        qty: value
      }
    });
  }
}

export const loadCurrentItem = (item) => {
  return (dispatch) => {
    dispatch({
      type: LOAD_CURRENT_ITEM,
      payload:item
    })
  }
}