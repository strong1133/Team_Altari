import React from "react";
import Swal from "sweetalert2";
import styled from "styled-components";
import { Button } from '../elements';
import { PostTable } from '../components';
import { history } from '../redux/configStore';

const PostList = (props) => {
 
 return (
  <ContainerBox>
   <ContentBox>
   <PostTable />
   <BtnBox>
    <Button width='120px' padding='10px' _onClick={() => {history.push('/write') }}>글쓰기</Button>
   </BtnBox>
   </ContentBox>
  </ContainerBox>
 )
}

export default PostList;

const ContainerBox = styled.div`
 width:90vw;
 margin:0 auto;
 display: flex;
 justify-content: space-between;

@media ${props => props.theme.mobile}{
 width:97vw;
}
`

const ContentBox = styled.div`
 min-width: 80vw;
 margin:80px auto 0px auto;
 display: flex;
 justify-content: center;
 align-items: center;
 flex-direction: column;

 @media ${props => props.theme.mobile}{
   width:95vw;
 }

`
const BtnBox = styled.div`
  width:100%;
  text-align: right;
  padding:15px 10px 0px 0px;
`