import React from "react";
import Swal from "sweetalert2";
import styled from "styled-components";
import { Grid, Text, Input, Button } from '../elements';

const Signup = (props) => {
 
 const [id,setId] = React.useState('');
 const [pw,setPw] = React.useState('');

 const signup = () => {
  
  if (id.length === 0) {
   
   Swal.fire({
    text: '아이디를 입력해주세요!',
    icon: 'warning',
    confirmButtonColor: '#3D825A',
   })
   return false;
  }

  if (pw.length === 0) {
   Swal.fire({
    text: '비밀번호를 입력해주세요!',
    icon: 'warning',
    confirmButtonColor: '#3D825A',
   })
   return false;
  }

 }


 return (
  <ContainerBox>
   <SignBox>
    <SignImg/>
    <Text size='21px' bold color='#353535' margin='16px 0px 0px 0px'>알타리 회원가입</Text>
    <Text color='#353535' margin='10px 0px 0px 0px' size='18px'>김치가 될 준비가 되었나요?</Text>
   <InputBox>
     <Input padding='14px 10px' placeholder='아이디를 입력해주세요.' _onChange={(e) => { setId(e.target.value) }} value={id}/>
     <Input margin='7px 0px 0px 0px' padding='14px 10px' type='password' placeholder='비밀번호를 입력해주세요.' _onChange={(e) => { setPw(e.target.value) }} value={pw}/>
    
     <Button margin='10px 0px 0px 0px' _onClick={signup}>회원가입</Button>
    
    </InputBox>
   </SignBox>
  </ContainerBox>
 )


}

export default Signup;


const ContainerBox = styled.div`
 width:90vw;
 margin:0 auto;
 display: flex;
 justify-content: space-between;


@media ${props => props.theme.mobile}{
 width:97vw;
}
`
const SignBox = styled.div`
 min-width: 50vw;
 margin:80px auto 0px auto;
 display: flex;
 justify-content: center;
 align-items: center;
 flex-direction: column;

`
const SignImg = styled.div`
 width:160px;
 height: 160px;
 border-radius:50%;
 background-image: url('https://cdn.crowdpic.net/list-thumb/thumb_l_501E2A433D01836DF14D28788E3F38B0.jpg');
 background-position: 50% 50%;
 background-size: cover;
`

const InputBox = styled.div`
 margin:25px 0px 0px 0px;
 max-width: 380px;
`