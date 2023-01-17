import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from "redux-thunk"
import rootReducer from './reducers/rootReducer';

const userInfoFromStorage = localStorage.getItem("userInfoA")
  ? JSON.parse(localStorage.getItem("userInfoA"))
  : null;

const initialState = {
    userLogin: { userInfoA: userInfoFromStorage },
    
  }

const middleware = [thunk]

const store = createStore(
    rootReducer,
    initialState ,

    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;