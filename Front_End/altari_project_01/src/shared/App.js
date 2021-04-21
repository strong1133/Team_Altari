import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { BrowserRouter, Route } from "react-router-dom";
import { history } from "../redux/configStore";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import '../scss/main.scss';
import {Login,Signup,PostList,PostWrite} from '../pages';
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
        
    </ConnectedRouter>
    
    </React.Fragment>
  );
}
export default App;
