import { createAction, createActions, handleActions } from "redux-actions";
import { config } from "../../shared/config";
import { produce } from "immer";
import axios from "axios";
import Swal from 'sweetalert2';


const SET_POST = 'SET_POST';
const ADD_POST = 'ADD_POST';
const SET_MAXPAGE = 'MAX_PAGE';

const setPost = createAction(SET_POST, (postList) => ({ postList }));
const addPost = createAction(ADD_POST, (post) => ({ post }));
const maxPage = createAction(SET_MAXPAGE, (page) => ({ page }));

const initialState = {
 list: [],
 isLoading: false,
 maxpage: null,
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

const addPostDB = (title, contents) => {
  return function (dispatch, getState, { history }) {
    
    console.log(contents)
    if (!title || !contents) {
      return false;
    }
    axios({
      method: 'post',
      url: `${config.api}/api/article`,
      data: {
        title: title,
        contents:contents,
      },
    }).then((res) => {
      
     

      let _post = {
        id: res.data.id,
        author: res.data.author,
        title: res.data.title,
        contents: res.data.contents,
        createAt : res.data.createAt,
      }

      dispatch(addPost(_post));
      history.push('/');
    }).catch((err) => { console.log(err)})
 }
}

const getMaxPageDB = () => {
  return function (dispatch, getState, { history }) {
    
    axios({
      method: 'get',
      url: `${config.api}/api/article/maxpage`,
    }).then((res) => {
      dispatch(maxPage(res.data));
    }).then(
      dispatch(getPostDB(1))
    )


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
 [SET_MAXPAGE]: (state, action) => produce(state, (draft) => {
  draft.maxpage = action.payload.page;
  }),
},initialState);

const actionCreators = {
  getPostDB,
  addPostDB,
  getMaxPageDB
};

export { actionCreators };
