import React from "react";
import styled from "styled-components";
import { history } from '../redux/configStore';
import { Text, Button, Grid } from '../elements';
import { useSelector, useDispatch } from 'react-redux';
import Swal from "sweetalert2";

const Post = (props) => {
 const dispatch = useDispatch();
 return (
  <ContainerBox>
     <ContentsBox>
      <Text size='21px'>{props.post?.title}</Text>
      <Text size='18px' margin='14px 0px 0px 0px'>{props.post?.author}</Text>
      <Content>
       <Text>{props.post?.comment}</Text>
      </Content>
      <BtnBox>
       <Grid padding='0px 0px 0px 5px'>
             <Button width='100px' padding='5px' margin='0px 5px 0px 0px' bg={(props) => props.theme.main_white} borderColor='2px solid #3D825A' color='#3D825A' _onClick={() => {
               history.push(`/write/${props.post.id}`);
             }}>수정</Button>
             <Button width='100px' padding='5px' bg={(props) => props.theme.main_white} borderColor='2px solid #3D825A' color='#3D825A'_onClick={() => {
                Swal.fire({
                text: '게시글을 삭제하겠습니까?',
                showCancelButton: true,
                confirmButtonColor: '#FFC075',
                cancelButtonColor: '#9C9A93',
                confirmButtonText: '삭제',
                cancelButtonText:'취소',
                }).then((result) => {
                  if (result.isConfirmed) {
                    
                   console.log('확인!')

                  }
                })
             }
             }>삭제</Button>
      </Grid>
      <Grid padding='0px 5px 0px 0px'>
       <Button width='100px' padding='5px' bg={(props) => props.theme.main_color}  _onClick={()=>history.goBack()}>돌아가기</Button>
      </Grid>
      </BtnBox>
     </ContentsBox>
   </ContainerBox>
 )


}

export default Post;


const ContainerBox = styled.div`
 max-width: ${(props)=>props.theme.max_size};
 margin:0 auto;
`
const ContentsBox = styled.div`
 
 max-width: 50%;
 margin: 40px auto 0px auto;
 
`
const Content = styled.div`
 width:100%;
 min-height: 200px;
 background-color: #F8F5E7;
 margin:15px 0px 0px 0px;
 box-sizing: border-box;
 border-radius: 10px;
 padding:15px;
`
const BtnBox = styled.div`
 display: flex;
 justify-content: space-between;
 margin-top: 12px;
 padding-right: 2px;
`