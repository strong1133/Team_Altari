import { createAction, handleActions } from "redux-actions";
import { setCookie, getCookie, deleteCookie } from "../../shared/Cookie";
import { config } from "../../shared/config";
import { produce } from "immer";
import axios from "axios";

const SET_USER = 'SET_USER';
const LOG_OUT = 'LOG_OUT';

const setUser = createAction(SET_USER, (user) => ({ user }));
const logOut = createAction(LOG_OUT, (user) => ({ user }));


const initialState = {
  user:null,
};

const signupDB = (id, pwd) => {
 return function (dispatch, getState, { history }) {
  

 }
}

const loginDB = (id, pwd) => {
 return function (dispatch, getState, { history }) {
  

 }
}

const loginCheckDB = () => {
 return function (dispatch, getState, { history }) {
  

 }
}

const logoutDB = () => {
 return function (dispacth, getState, { history }) {
  
  
 }
}

export default handleActions({

 [SET_USER]: (state, action) => produce(state, (draft) => {
  
 }),

}, initialState);

const actionCreators = {
 logoutDB,
 loginCheckDB,
 loginDB,
 signupDB
};

export { actionCreators };