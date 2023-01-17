import axios from "axios";
import { GET_CONTACT_FAIL, GET_CONTACT_REQUEST, GET_CONTACT_SUCCESS, GET_EXPEIIENCE_FAIL, GET_EXPEIIENCE_REQUEST, GET_EXPEIIENCE_SUCCESS, GET_PROJECT_FAIL, GET_PROJECT_REQUEST, GET_PROJECT_SUCCESS } from "../constant/getDataConstant";
import {BASE_URL} from "../helper"

export const listExprience = () => async (dispatch) => {
    try {
      dispatch({
        type: GET_EXPEIIENCE_REQUEST,
      });
  
     
  
      const { data } = await axios.get(`${BASE_URL}/getexprience`);
     
  
      dispatch({
        type: GET_EXPEIIENCE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({
        type: GET_EXPEIIENCE_FAIL,
        payload: message,
      });
    }
  };
  export const listProject = () => async (dispatch) => {
    try {
      dispatch({
        type: GET_PROJECT_REQUEST,
      });
      const config = {
        headers: {
          'Content-Type': 'image/jpeg',
        },
      };
  
     
  
      const { data } = await axios.get(`${BASE_URL}/getproject`,config);
      console.log(data)
  
      dispatch({
        type: GET_PROJECT_SUCCESS,
        payload: data,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({
        type: GET_PROJECT_FAIL,
        payload: message,
      });
    }
  };
  export const listContact = () => async (dispatch) => {
    try {
      dispatch({
        type: GET_CONTACT_REQUEST,
      });
  
     
  
      const { data } = await axios.get(`${BASE_URL}/getcontact`);
      console.log(data)
  
      dispatch({
        type: GET_CONTACT_SUCCESS,
        payload: data,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({
        type: GET_CONTACT_FAIL,
        payload: message,
      });
    }
  };