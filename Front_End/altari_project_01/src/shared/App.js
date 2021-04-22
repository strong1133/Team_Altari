import React, { useEffect } from "react";
import { ConnectedRouter } from "connected-react-router";
import { BrowserRouter, Route } from "react-router-dom";
import { history } from "../redux/configStore";
import styled from 'styled-components';
import '../scss/main.scss';
import {Login,Signup,PostList,PostWrite,PostDetail} from '../pages';
import { Header } from '../components';
import { useDispatch } from 'react-redux';
import { getCookie } from './Cookie';
import { actionCreators as userAction } from '../redux/modules/user';


function App() {
 
  const dispatch = useDispatch();
  const token = getCookie('token') ? true : false;
  
  React.useEffect(() => {
    
    if (token) {
      dispatch(userAction.loginCheckDB());
    }

  }, []);

  return (
    <React.Fragment>
    <Header/>
    <ConnectedRouter history={history}>
        <Route path='/' exact component={PostList} />
        <Route path='/login' exact component={Login} />
        <Route path='/signup' exact component={Signup} />
        <Route path='/write' exact component={PostWrite} />
        <Route path='/post/:id' exact component={PostDetail} />
        
    </ConnectedRouter>
    
    </React.Fragment>
  );
}
export default App;
