import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Route } from "react-router-dom";
import { history } from "../redux/configStore";
import styled from 'styled-components';
import axios from "axios";
import { config } from "./config";
const hello = () => {
  axios({
    method: 'get',
    url:`${config.api}/api/hello`,
  }).then((res) => {
    console.log(res.data);
  })

}


function App() {
 
  return (
    <React.Fragment>
      <button onClick={hello}>서버 요청</button>
    </React.Fragment>
  );
}
export default App;
