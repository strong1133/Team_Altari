import { createAction, handleActions } from "redux-actions";
import { config } from "../../shared/config";
import { produce } from "immer";
import axios from "axios";

const SET_USER = 'SET_USER';

const setUser = createAction(SET_USER, (user) => ({ user }));

const initialState = {
  user:null,
};

export default handleActions({

 [SET_USER]: (state, action) => produce(state, (draft) => {
  
 }),

}, initialState);

const actionCreators = {

};

export { actionCreators };