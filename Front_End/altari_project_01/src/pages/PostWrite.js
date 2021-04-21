import React from "react";
import Swal from "sweetalert2";
import styled from "styled-components";
import { Button, Input } from '../elements';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import '../scss/editor.scss';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import { history } from '../redux/configStore';
const PostWrite = (props) => {

 const [title, setTitle] = React.useState('');
 const [contents, setContents] = React.useState('');
 console.log(contents);




 return (
  <ContainerBox>
         <Input placeholder='제목을 입력해주세요.' padding='10px' _onChange={(e) => { setTitle(e.target.value) }} value={title}/>
   <CKEditor
   editor={ ClassicEditor }
   data=""
   onReady={ editor => {
       // You can store the "editor" and use when it is needed.
       console.log( 'Editor is ready to use!', editor );
   } }
   onChange={ ( event, editor ) => {
       const data = editor.getData();
       setContents(data);
       
   } }
   onBlur={ ( event, editor ) => {
       console.log( 'Blur.', editor );
   } }
   onFocus={ ( event, editor ) => {
       console.log( 'Focus.', editor );
   } }
        />
   <BtnBox>
             <Button padding='10px' width='120px' margin='0px 8px 0px 0px' bg='#BBB8B4' borderColor='#BBB8B4' size='14px' _onClick={() => {history.goBack()}}>돌아가기</Button>
   <Button padding='10px' width='120px' size='14px'>글 작성하기</Button>
   </BtnBox>
  </ContainerBox>
 )



}

export default PostWrite;

const ContainerBox = styled.div`
 width:90vw;
 margin:30px auto 0px auto;
 
@media ${props => props.theme.mobile}{
 width:97vw;
}
`
const BtnBox = styled.div`
 margin:10px;
 text-align: right;
`