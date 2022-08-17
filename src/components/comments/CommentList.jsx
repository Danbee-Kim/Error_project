import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { __readComments } from "redux/modules/commentsSlice";
import Comment from "./Comment";
import AddCommentForm from "./AddCommentForm";

function CommentList() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [isShow, setisShow] = useState(false);
  const data = useSelector((state) => state.comments.comments);

  useEffect(() => {
    if (isShow) {
      dispatch(__readComments());
    }
  }, []);

  return (
    <StContainer isShow={isShow}>
      <StToggleContainer
        onClick={() => {
          setisShow((pre) => !pre);
        }}
      >
        <div size="16">{isShow ? "눌러서 댓글내리기" : "눌러서 댓글보기"}</div>
      </StToggleContainer>
      <AddCommentForm />
      <StCommentList>
        {data.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </StCommentList>
    </StContainer>
  );

  // const { comments } = useSelector((state) => state.comments);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   if (isShow) {
  //     dispatch(__readComments(id));
  //   }
  // }, [dispatch, id, isShow]);

  // const handleDeleteComment = () => {
  //   dispatch(__deleteComments(comments.id));
  // };

  // console.log(comments);
  // return (
  //   <CommentListContainer>
  //     {/* <p>배지</p> */}
  //     <p>댓글작성</p>
  //     <Input placeholder="이름" />
  //     <Input placeholder="내용을입력하세요" />

  //     {comments.map((comment) => {
  //       return (
  //         <CommentBox>
  //           <BoxLeft>
  //             <UserName>{comment.username}</UserName>
  //             <CreatedAt>{comment.date}</CreatedAt>
  //             <Content>{comment.comment}</Content>
  //           </BoxLeft>
  //           {/* <BoxRight>
  //             <Button variant={"delete"} clickHandler={handleDeleteComment}>
  //               삭제
  //             </Button>
  //           </BoxRight> */}
  //         </CommentBox>
  //       );
  //     })}
  //   </CommentListContainer>
  // );
}

export default CommentList;

const StContainer = styled.div`
  height: ${({ isShow }) => (isShow ? "400px" : "50px")};
  position: absolute;
  bottom: 0px;
  left: 0px;
  width: 100%;
  background-color: #fff;
  transition: height 400ms ease-in-out;
`;

const StToggleContainer = styled.div`
  height: 50px;
  padding: 0 12px;
  border-top: 1px solid #eee;
`;

const StCommentList = styled.div`
  height: 350px;
  overflow: scroll;
`;

// const CommentListContainer = styled.div``;
// const CommentBox = styled.div`
//   height: auto;
//   border-bottom: 1px solid gray;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
// `;
// const UserName = styled.div`
//   font-size: 18px;
//   font-weight: bold;
//   padding-top: 10px;
// `;
// const CreatedAt = styled.div``;
// const Content = styled.div`
//   margin-top: 5px;
//   padding-bottom: 15px;
// `;

// const BoxLeft = styled.div``;
// const BoxRight = styled.div``;
