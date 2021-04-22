import React from "react";
import styled from "styled-components";
import { Post } from "../components";

const PostDetail = (props) => {
 
 const postId = props.match.params.id;
 console.log(postId)
 return (
  <React.Fragment>
   <Post/>
  </React.Fragment>
 )
}

export default PostDetail;
