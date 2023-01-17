import { GET_CONTACT_FAIL, GET_CONTACT_REQUEST, GET_CONTACT_SUCCESS, GET_EXPEIIENCE_FAIL, GET_EXPEIIENCE_REQUEST, GET_EXPEIIENCE_SUCCESS, GET_PROJECT_FAIL, GET_PROJECT_REQUEST, GET_PROJECT_SUCCESS } from "../constant/getDataConstant";


export const getExprienceReducer = (state = { exprience: [] }, action) => {
    switch (action.type) {
      case GET_EXPEIIENCE_REQUEST:
        return { loading: true };
      case GET_EXPEIIENCE_SUCCESS:
        return { loading: false, exprience: action.payload };
      case GET_EXPEIIENCE_FAIL:
        return { loading: false, error: action.payload };
  
      default:
        return state;
    }
  };
  export const getProjectReducer = (state = { project: [] }, action) => {
    switch (action.type) {
      case GET_PROJECT_REQUEST:
        return { loading: true };
      case GET_PROJECT_SUCCESS:
        return { loading: false, project: action.payload };
      case GET_PROJECT_FAIL:
        return { loading: false, error: action.payload };
  
      default:
        return state;
    }
  };
  export const getContactReducer = (state = { contact: [] }, action) => {
    switch (action.type) {
      case GET_CONTACT_REQUEST:
        return { loading: true };
      case GET_CONTACT_SUCCESS:
        return { loading: false, contact: action.payload };
      case GET_CONTACT_FAIL:
        return { loading: false, error: action.payload };
  
      default:
        return state;
    }
  };