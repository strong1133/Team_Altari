import React from "react";
import Swal from "sweetalert2";
import styled from "styled-components";
import { Grid, Text, Input, Button } from '../elements';

const Login = (props) => {
 
 const [id,setId] = React.useState('');
 const [pw, setPw] = React.useState('');

 const Login = () => {
  
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
   <LoginBox>
    <LoginImg/>
    <Text bold margin='16px 0px 0px 0px' color='#353535' size='18px'>어서오세요, 당신은 알타리입니다.</Text>
    <InputBox>
     <Input padding='14px 10px' _onChange={(e) => { setId(e.target.value)}} placeholder='아이디를 입력해주세요.' value={id}/>
     <Input margin='7px 0px 0px 0px' _onChange={(e) => { setPw(e.target.value)}} padding='14px 10px' type='password' placeholder='비밀번호를 입력해주세요.' value={pw}/>
     <Button margin='10px 0px 0px 0px' _onClick={Login}>로그인</Button>
     <Button margin='5px 0px 0px 0px' bg='#FFD53B' color='#544836' borderColor='#FFD53B'>Kakao</Button>
    </InputBox>
    </LoginBox>
  </ContainerBox>
 )


};

export default Login;

const ContainerBox = styled.div`
 width:90vw;
 margin:0 auto;
 display: flex;
 justify-content: space-between;

@media ${props => props.theme.mobile}{
 width:97vw;
}
`
const LoginBox = styled.div`
 min-width: 50vw;
 margin:80px auto 0px auto;
 display: flex;
 justify-content: center;
 align-items: center;
 flex-direction: column;

`

const LoginImg = styled.div`
 width:160px;
 height: 160px;
 border-radius:50%;
 background-image: url('https://cdn.crowdpic.net/list-thumb/thumb_l_501E2A433D01836DF14D28788E3F38B0.jpg');
 background-position: 50% 50%;
 background-size: cover;
`

const InputBox = styled.div`
 margin:20px 0px 0px 0px;
 max-width: 380px;
`