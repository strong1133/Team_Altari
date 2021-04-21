import React from "react";
import Swal from "sweetalert2";
import styled from "styled-components";
import { Button, Input } from '../elements';
import { Editor } from '../components';
import '../scss/editor.scss';
import { history } from '../redux/configStore';
const PostWrite = (props) => {

 const [title, setTitle] = React.useState('');
 const [contents, setContents] = React.useState('');
 console.log(contents);
    
function onEditorChange(value) {
    setContents(value);
    }
    
const writePost = () => {
    if (title.length === 0) {
     Swal.fire({
        text: '제목을 입력해주세요!',
        icon: 'warning',
        confirmButtonColor: '#3D825A',    
     })
        return false;
    }

    if (contents.length === 0) {
        Swal.fire({
            text: '내용을 입력해주세요!',
            icon: 'warning',
            confirmButtonColor: '#3D825A',    
        })
        return false;
    }
}


 return (
  <ContainerBox>
         <Input placeholder='제목을 입력해주세요.' padding='10px' _onChange={(e) => { setTitle(e.target.value) }} value={title}/>
         <Editor value={contents} onChange={onEditorChange}/>
   <BtnBox>
        <Button padding='10px' width='120px' margin='0px 8px 0px 0px' bg='#BBB8B4' borderColor='#BBB8B4' size='14px' _onClick={() => {history.goBack()}}>돌아가기</Button>
        <Button padding='10px' width='120px' size='14px' _onClick={writePost}>글 작성하기</Button>
   </BtnBox>
  </ContainerBox>
 )



}

export default PostWrite;

const ContainerBox = styled.div`
 width:80vw;
 margin:30px auto 0px auto;
 
@media ${props => props.theme.mobile}{
 width:97vw;
}
`
const BtnBox = styled.div`
 margin:10px;
 text-align: right;

 @media ${props => props.theme.mobile}{
 margin-top:30px;
}
`