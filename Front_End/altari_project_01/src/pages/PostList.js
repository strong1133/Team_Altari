import React from "react";
import Swal from "sweetalert2";
import styled from "styled-components";
import { Button } from '../elements';
import { PostTable,Pagination } from '../components';
import { history } from '../redux/configStore';
import { useSelector, useDispatch } from 'react-redux';
import post, { actionCreators as postAction } from '../redux/modules/post';
const PostList = (props) => {
 

  const dispatch = useDispatch();

  React.useEffect(() => {
    
    dispatch(postAction.getMaxPageDB());

  }, []);

  const [currentPage, setCurrentPage] = React.useState(1);
  const [postPerPage, setPostPerPage] = React.useState(5);
  /*const postList = [{
    id: 1,
    author: 'youngeun',
    title: '알타리 할 수 있어!!',
    createAt: '2021-04-21',
  },
    {
    id: 2,
    author: 'youngeun',
    title: '잘해보자!',
    createAt: '2021-04-21',
    },
    {
    id: 3,
    author: 'atom',
    title: '맛있는 거 먹고 힘내자!',
    createAt: '2021-04-21',
    },
    {
    id: 4,
    author: 'youngeun',
    title: '실전프로젝트 화이팅!!!',
    createAt: '2021-04-20',
    },
    {
    id: 5,
    author: 'atom52',
    title: '잘 할 수 잇돠~~',
    createAt: '2021-04-20',
    },
    {
    id: 6,
    author: 'hyunseok',
    title: '끝나면 채팅도 만들어봐야지!',
    createAt: '2021-04-20',
  },
  {
    id: 7,
    author: 'dahea12',
    title: '답글은 어떻게 만들까!',
    createAt: '2021-04-19',
    },
  {
    id: 8,
    author: 'youngeun',
    title: '페이지네이션부터',
    createAt: '2021-04-19',
    },
  {
    id: 9,
    author: 'atom52',
    title: '굿굿!',
    createAt: '2021-04-19',
    },
  {
    id: 10,
    author: 'youngeun',
    title: '간드아!',
    createAt: '2021-04-19',
    },
  {
    id: 11,
    author: 'atom52',
    title: '잘해보자!',
    createAt: '2021-04-18',
    },
  {
    id: 12,
    author: 'youngeun',
    title: '힘내! 응원해 알타리',
    createAt: '2021-04-18',
  },
  ]
*/
  
  const postList = useSelector((state) => state.post.list);
  

  const indexOfLsat = currentPage * postPerPage;
  const indexOfFirst = indexOfLsat - postPerPage;
  function currentPost(tmp) {
    let currentPost = 0;
    currentPost = tmp.slice(indexOfFirst, indexOfLsat);
    return currentPost;
  }



 return (
  <ContainerBox>
   <ContentBox>
       <PostTable post={currentPost(postList)} />
       {/* <Pagination postPerpage={postPerPage} totalPost={postList.length} paginate={setCurrentPage}/> */}
         <Pagination/>
       <BtnBox>
    <Button width='120px' padding='10px' _onClick={() => {history.push('/write') }}>글쓰기</Button>
   </BtnBox>
   </ContentBox>
  </ContainerBox>
 )
}

export default PostList;

const ContainerBox = styled.div`
 width:90vw;
 margin:0 auto;
 display: flex;
 justify-content: space-between;

@media ${props => props.theme.mobile}{
 width:97vw;
}
`

const ContentBox = styled.div`
 min-width: 80vw;
 margin:80px auto 0px auto;
 display: flex;
 justify-content: center;
 align-items: center;
 flex-direction: column;

 @media ${props => props.theme.mobile}{
   width:95vw;
 }

`
const BtnBox = styled.div`
  width:100%;
  text-align: right;
  padding:15px 10px 0px 0px;
`