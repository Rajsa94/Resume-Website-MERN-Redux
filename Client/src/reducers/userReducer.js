import { LOGOUT_DELETE_FAIL, LOGOUT_DELETE_REQUEST, LOGOUT_DELETE_SUCCESS, USER_CONTACT_FAIL, USER_CONTACT_REQUEST, USER_CONTACT_SUCCESS, USER_EXPEIIENCE_FAIL, USER_EXPEIIENCE_REQUEST, USER_EXPEIIENCE_SUCCESS, USER_Login_FAIL, USER_Login_REQUEST, USER_Login_SUCCESS, USER_LOGOUT, USER_PROJECT_FAIL, USER_PROJECT_REQUEST, USER_PROJECT_SUCCESS } from "../constant/userConstant";

export const userContactReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_CONTACT_REQUEST:
            return { loading: true }
        case USER_CONTACT_SUCCESS:
            return { loading: false, userInfo: action.payload };
        case USER_CONTACT_FAIL:
            return { loading: false, error: action.payload };

        default:
            return state;
    }

}
export const userLoginReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_Login_REQUEST:
            return { loading: true }
        case USER_Login_SUCCESS:
            return { loading: false, userInfoA: action.payload };
        case USER_Login_FAIL:
            return { loading: false, error: action.payload };
        case USER_LOGOUT:
            return {};

        default:
            return state;
    }

}

export const userLogoutReducer = (state = {}, action) => {
    switch (action.type) {
      case LOGOUT_DELETE_REQUEST:
        return { loading: true };
      case LOGOUT_DELETE_SUCCESS:
        return { loading: false, success: true };
      case LOGOUT_DELETE_FAIL:
        return { loading: false, error: action.payload, success: false };
  
      default:
        return state;
    }
  };
  export const userExperienceReducer = (state = {}, action) => {
    switch (action.type) {
      case USER_EXPEIIENCE_REQUEST:
        return { loading: true };
      case USER_EXPEIIENCE_SUCCESS:
        return { loading: false, userInfo: action.payload };
      case USER_EXPEIIENCE_FAIL:
        return { loading: false, error: action.payload };
  
      default:
        return state;
    }
  };
  export const userProjectReducer = (state = {}, action) => {
    switch (action.type) {
      case USER_PROJECT_REQUEST:
        return { loading: true };
      case USER_PROJECT_SUCCESS:
        return { loading: false, userInfo: action.payload };
      case USER_PROJECT_FAIL:
        return { loading: false, error: action.payload };
  
      default:
        return state;
    }
  };