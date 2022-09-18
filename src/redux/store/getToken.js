
import { useDispatch } from "react-redux";
import { store } from "../store";

export default function getProtectedThing() {
  // grab current state

   https://api.fishkha.com/

  axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
  const state = store.getState();


 
 

  console.log(state);
  if (state.user.user_details.accessToken) {
    let token = state.user.user_details.accessToken;
    if (token) {
        axios.defaults.headers.common['Authorization'] = token;
    } else {
        axios.defaults.headers.common['Authorization'] = null;
        /*if setting null does not remove `Authorization` header then try     
          delete axios.defaults.headers.common['Authorization'];
        */
    }
  }
}
