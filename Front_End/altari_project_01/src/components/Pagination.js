import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
/*const Pagination = ({ postPerpage,totalPost,paginate}) => {*/
import { actionCreators as postActions } from '../redux/modules/post';

const Pagination = () => {
 const dispatch = useDispatch();
 const maxPage = useSelector((state) => state.post.maxpage);
 const pageNumber = [];
 /*for (let i = 1; i <= Math.ceil(totalPost / postPerpage); i++) {
  pageNumber.push(i);
 }
*/
for (let i = 1; i <= maxPage; i++) {
  pageNumber.push(i);
 }
  
 return (
  <ContainerBox>
   <PageBox>
    <PageUl>
     {pageNumber.map(number => {
      return (
       <PageLi key={number} onClick={() => {
          dispatch(postActions.getPostDB(number));
       }}>
        {number}
       </PageLi>
      )})}
    </PageUl>
    </PageBox>
  </ContainerBox>
 )


}

export default Pagination;

const ContainerBox = styled.div`
 width:80vw;
 margin: 20px auto 0px auto;

 @media ${props => props.theme.mobile}{
 width:95vw;
}
`
const PageBox = styled.div`
 text-align: center;
`

const PageUl = styled.ul`
 
`
const PageLi = styled.li`
 display: inline;
 margin-right: 15px;
 cursor: pointer;
`