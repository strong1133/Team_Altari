import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { BrowserRouter, Route } from "react-router-dom";
import { history } from "../redux/configStore";
import styled from 'styled-components';
import axios from "axios";
import { config } from "./config";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import '../scss/main.scss';
import {Login,Signup,PostList,PostWrite,PostDetail} from '../pages';
import { Header } from '../components';



function App() {
 
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
