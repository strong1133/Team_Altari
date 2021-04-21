import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from "react-redux";
import { history } from '../redux/configStore';

const PostTable = (props) => {

 return (
  
   <Table>
      <thead>
       <tr>
        <th>글쓴이</th>
        <th>글제목</th>
        <th>생성일</th>
       </tr>
       </thead>
    <tbody>
     
     <tr>
      <td>youngeun</td>
      <td>사실 김치는 깍두기가 제일 좋아.</td>
      <td>2021.04.21</td>
     </tr>
        {/* {postList.map((p) => {
         console.log(p)
         return (
          <tr key={p.id} onClick={()=> history.push(`/post/${p.id}`)}>
           <td>{p.no}</td>
           <td>{p.author}</td>
           <td>{p.title}</td>
         </tr>
         )

        })} */}
        
      </tbody>
      </Table>
  
 )


}

export default PostTable;


const Table = styled.table`
 width: 100%;
 margin: 0 auto;

 & tr{

  &:hover{
   background-color: #F9F7EF;
  }
  :nth-child(1):hover{
   background-color: none;
  }
 }

& th{
 font-weight: 600;
 background-color: ${(props) => props.theme.main_color};
}

& td {
 border-bottom: 1px solid #C9C9C9;
 text-align: center;
 cursor: pointer;
}

 & th,td{
  padding:15px;
  
  &:nth-child(1){
    width:15%;
    
   }
  

  &:nth-child(3){
   width:12%;
  } 
 }

 @media ${props => props.theme.mobile}{
   font-size: 0.9rem;

   & td{
     &:nth-child(1){
      width:20%;
     }
 }
 }
`