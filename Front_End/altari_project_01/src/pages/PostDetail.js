import React from "react";
import styled from "styled-components";
import { Post } from "../components";
import { useSelector, useDispatch } from 'react-redux';
import { history } from '../redux/configStore';

const PostDetail = (props) => {
 
 const postId = props.match.params.id;
 const postList = useSelector((state) => state.post.list);
 const post = postList.find((p)=> p.id === Number(postId));

return (
  <React.Fragment>
  <Post post={post}/>
  </React.Fragment>
 )
}

export default PostDetail;
