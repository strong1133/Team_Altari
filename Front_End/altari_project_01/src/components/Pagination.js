import React from 'react';
import styled from 'styled-components';

const Pagination = ({ postPerpage,totalPost,paginate}) => {
 
 const pageNumber = [];
 for (let i = 1; i <= Math.ceil(totalPost / postPerpage); i++) {
  pageNumber.push(i);
 }

 return (
  <ContainerBox>
   <PageBox>
    <PageUl>
     {pageNumber.map(number => {
      return (
       <PageLi key={number} onClick={() => {
        paginate(number);      
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