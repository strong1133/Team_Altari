import React from "react";
import Swal from "sweetalert2";
import styled from "styled-components";
import { Button } from '../elements';
import { history } from '../redux/configStore';

const PostList = (props) => {
 
 return (
  <ContainerBox>
   <ContentBox>
    <Button _onClick={() => {history.push('/write') }}>글쓰기</Button>
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
 min-width: 50vw;
 margin:80px auto 0px auto;
 display: flex;
 justify-content: center;
 align-items: center;
 flex-direction: column;

`
