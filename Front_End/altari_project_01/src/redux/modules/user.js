import { createAction, handleActions } from "redux-actions";
import { setCookie, getCookie, deleteCookie } from "../../shared/Cookie";
import { config } from "../../shared/config";
import { produce } from "immer";
import axios from "axios";
import Swal from 'sweetalert2';

const SET_USER = 'SET_USER';
const LOG_OUT = 'LOG_OUT';

const setUser = createAction(SET_USER, (user) => ({ user }));
const logOut = createAction(LOG_OUT, () => ({  }));


const initialState = {
  user: null,
  isLogin: false,
};

const signupDB = (id, pwd) => {
 return function (dispatch, getState, { history }) {
  
    axios({
     method: 'post',
     url: `${config.api}/api/signup`,
     data: {
       username: id,
       password: pwd,
     },
   }).then((res) => {
     console.log(res.data);
     if (res.data.Success) {
       Swal.fire({
         text: `${res.data.Success}`,
         confirmButtonColor: "#3D825A",
       }).then((result) => {
         if (result.isConfirmed) {
           history.push('/login');
         }
       });
     } 
   }).catch((err) => {

     Swal.fire({
       //서버에서 JSON으로 넘겨준게 msg여서 axios에서 자동변환.
       text: `${err.response.data.msg}`,
         icon: 'warning',
         confirmButtonColor: "#3D825A",
     })
   });
   

 }
}
//로그인 성공여부 status 코드로? 
const loginDB = (id, pwd) => {
 return function (dispatch, getState, { history }) {
  
   console.log(id,pwd)
   if (!id || !pwd) {
     return false;
   }
   axios({
     method: 'post',
     url: `${config.api}/login`,
     data: {
       username: id,
       password: pwd,
     },
   }).then((res) => {
     
     const userInfo = {
       username: id,
     }
     dispatch(setUser(userInfo));
     let token = res.headers.authorization;
     setCookie('token',token );
     
     axios.defaults.headers.common['authorization'] = token;
     
     Swal.fire({
       text: '어서오세요, 알타리가 되셨습니다!',
       confirmButtonColor: "#3D825A",
     })
     history.push('/');

   }).catch((err) => {
     console.log(err);
   })
  
 }
}

const loginCheckDB = () => {
 return function (dispatch, getState, { history }) {
  
   const token = getCookie('token');
   axios.defaults.headers.common['Authorization'] = token;

   axios({
     method: 'get',
     url: `${config.api}/api/user/cur_user`,
   }).then((res) => {
     
     dispatch(setUser({
       username: res.data.username,
     }));
     
   }).catch((err) => {
     console.log('로그인 체크 에러: ',err);
   })

 }
}

const logoutDB = () => {
 return function (dispatch, getState, { history }) {
  
   deleteCookie('token');
   axios.defaults.headers.common['Authorization'] = null;
   delete axios.defaults.headers.common['Authorization'];
   Swal.fire({
     text: '잘가요, 당신은 알타리에서 해방되었숩니다..',
     confirmButtonColor: "#3D825A",
   })
   dispatch(logOut());
   history.replace('/');
 }
}

export default handleActions({

 [SET_USER]: (state, action) => produce(state, (draft) => {
   draft.user = action.payload.user;
   draft.isLogin = true;
 }),
  [LOG_OUT]: (state, action) => produce(state, (draft) => {
    draft.user = null;
    draft.isLogin = false;
  }),
 
}, initialState);

const actionCreators = {
 logoutDB,
 loginCheckDB,
 loginDB,
 signupDB
};

export { actionCreators };