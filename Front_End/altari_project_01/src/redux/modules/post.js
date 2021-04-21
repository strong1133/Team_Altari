import { createAction, handleActions } from "redux-actions";
import { config } from "../../shared/config";
import { produce } from "immer";
import axios from "axios";
import Swal from 'sweetalert2';


const SET_POST = 'SET_POST';
const ADD_POST = 'ADD_POST';

const setPost = createAction(SET_POST, (postList) => ({ postList }));
const addPost = createAction(ADD_POST, (post) => ({ post }));


const initialState = {
 list: [],
 isLoading: false,
};

//몇개씩 줄 것??
const getPostDB = (pageNum) => {
 return function (dispatch, getState, { history }) {
  
  if (!pageNum) {
   return false;
  }

  axios({
   method: 'get',
   url: `${config.api}/api/article/all?page=${pageNum}`
  }).then((res) => {
   
   let _postList = res.data;
   let postList = [];
   _postList.forEach((p) => {
    
    let post = {
     id: p.id,
     title: p.title,
     contents: p.contents,
     author: p.author,
     createAt : p.createdAt,
    }
    postList.push(post);
  });

   dispatch(setPost(postList));
   
  }).catch((err) => console.log(err));
 }
}



export default handleActions({
 [SET_POST]: (state, action) => produce(state, (draft) => {
  draft.list = action.payload.postList;
  draft.isLoading = false;
 }),
 [ADD_POST]:(state, action) => produce(state, (draft) => {
  draft.list.push(action.payload.post);
 }), 
},initialState);

const actionCreators = {
 getPostDB,
};

export { actionCreators };
