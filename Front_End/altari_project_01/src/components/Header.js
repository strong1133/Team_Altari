import React from 'react';
import styled from 'styled-components';
import { history } from '../redux/configStore';
import { Grid } from '../elements';
import { useSelector, useDispatch } from 'react-redux';
import {actionCreators as userActions} from "../redux/modules/user";

const Header = (props) => {
 
  const userInfo = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
 return (
  <ContainerBox>
   <ContentBox>
    <Logo onClick={() => { history.push('/') }}>
     심심한 알타리들
    </Logo>
    <Grid flex margin='0px 20px 0px 0px'>
         {userInfo ? (<React.Fragment>
           <Text className='cursor gap' >{userInfo?.username}님</Text>
            <Text className='cursor' onClick={() => { dispatch(userActions.logoutDB())}}>로그아웃</Text>
         </React.Fragment>):
           (<React.Fragment>
            <Text className='cursor gap' onClick={() => { history.push('/signup') }}>회원가입</Text>
            <Text className='cursor' onClick={() => { history.push('/login') }}>로그인</Text>
            </React.Fragment>)}


     
    </Grid>
    </ContentBox>
  </ContainerBox>
 )

}

export default Header;

const ContainerBox = styled.div`
 width: 100vw;
 min-height:35px;
 background-color: ${(props)=>props.theme.main_color};
`
const ContentBox = styled.div`
 width:90vw;
 margin:0 auto;
 min-height: 35px;
 display: flex;
 justify-content: space-between;

@media ${props => props.theme.mobile}{
 width:97vw;
}

`
const Logo = styled.div`
 ${(props) => props.theme.logo}
 padding: 7px 0px 0px 10px;
 cursor: pointer;
`
const Text = styled.p`
 color : ${(props) => props.theme.main_white};
 
 &.cursor{
  cursor: pointer;
 }

 &.gap{
  margin: 0px 18px 0px 0px;
 }
`