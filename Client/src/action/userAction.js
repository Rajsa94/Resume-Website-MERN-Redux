import axios from "axios";
import { LOGOUT_DELETE_FAIL, LOGOUT_DELETE_REQUEST, LOGOUT_DELETE_SUCCESS, USER_CONTACT_FAIL, USER_CONTACT_REQUEST, USER_CONTACT_SUCCESS, USER_EXPEIIENCE_FAIL, USER_EXPEIIENCE_REQUEST, USER_EXPEIIENCE_SUCCESS, USER_Login_FAIL, USER_Login_REQUEST, USER_Login_SUCCESS, USER_LOGOUT, USER_PROJECT_FAIL, USER_PROJECT_REQUEST, USER_PROJECT_SUCCESS } from "../constant/userConstant";
import {BASE_URL} from "../helper"

export const contact = (name, email, phone, message ) => async (dispatch) => {
    try {
      dispatch({ type: USER_CONTACT_REQUEST });
  
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
  
      const { data } = await axios.post(
        `${BASE_URL}/contact`,
        { name, email, phone, message },
        config
      );
  
      dispatch({ type: USER_CONTACT_SUCCESS, payload: data });
  
      
  
      localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error) {
      dispatch({
        type: USER_CONTACT_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

  export const Login = ( email,password ) => async (dispatch) => {
    try {
      dispatch({ type: USER_Login_REQUEST });
  
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
  
      const { data } = await axios.post(
        `${BASE_URL}/login`,
        { email,password},
        config
      );
  
      dispatch({ type: USER_Login_SUCCESS, payload: data });
  
      
  
      localStorage.setItem("userInfoA", JSON.stringify(data));
    } catch (error) {
      dispatch({
        type: USER_Login_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

  export const logout = () => async (dispatch) => {
    localStorage.removeItem("userInfoA");
    dispatch({ type: USER_LOGOUT });
    try {
      dispatch({ type: LOGOUT_DELETE_REQUEST });
  
      const config = {
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
        },
        credentials:"include"
      };
  
      const { data } = await axios.get(
        `${BASE_URL}/logout`,
        
       
        config
      );
      
  
      dispatch({ type: LOGOUT_DELETE_SUCCESS, payload: data });
  
      dispatch({ type: LOGOUT_DELETE_FAIL, payload: data });
  
      localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error) {
      dispatch({
       
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

  export const Exprience = (post, company, desc, date ) => async (dispatch) => {
    try {
      dispatch({ type: USER_EXPEIIENCE_REQUEST });
  
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
  
      const { data } = await axios.post(
        `${BASE_URL}/exprience`,
        {post, company, desc, date},
        config
      );
  
      dispatch({ type: USER_EXPEIIENCE_SUCCESS, payload: data });
  
      
  
      localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error) {
      dispatch({
        type: USER_EXPEIIENCE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
  export const Project = (title, desc, tech, sourceurl, previewurl,image ) => async (dispatch) => {
    try {
      dispatch({ type: USER_PROJECT_REQUEST });
  
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        "Accept": "application/json",
        "type": "formData"
        },
      };
  
      const { data } = await axios.post(
        `${BASE_URL}/project`,
        {title, desc, tech, sourceurl, previewurl,image},
        config
      );
  
      dispatch({ type: USER_PROJECT_SUCCESS, payload: data });
  
      
  
      localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error) {
      dispatch({
        type: USER_PROJECT_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };