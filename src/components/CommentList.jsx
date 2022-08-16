import React from "react";
import styled from "styled-components";
import Button from "components/elements/Button";
import { useSelector, useDispatch } from "react-redux";
import { __deleteComments } from "redux/modules/commentsSlice";

function CommentList() {
  const { comments } = useSelector((state) => state.comments);
  const dispatch = useDispatch();

  const handleDeleteComment = () => {
    dispatch(__deleteComments(comments.id));
  };

  return (
    <CommentListContainer>
      {comments.map((comment) => {
        return (
          <CommentBox>
            <BoxLeft>
              <UserName>{comment.username}</UserName>
              <CreatedAt>{comment.date}</CreatedAt>
              <Content>{comment.comment}</Content>
            </BoxLeft>
            <BoxRight>
              <Button variant={"delete"} clickHandler={handleDeleteComment}>
                삭제
              </Button>
            </BoxRight>
          </CommentBox>
        );
      })}
    </CommentListContainer>
  );
}

export default CommentList;

const CommentListContainer = styled.div``;
const CommentBox = styled.div`
  height: auto;
  border-bottom: 1px solid gray;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const UserName = styled.div`
  font-size: 18px;
  font-weight: bold;
  padding-top: 10px;
`;
const CreatedAt = styled.div``;
const Content = styled.div`
  margin-top: 5px;
  padding-bottom: 15px;
`;

const BoxLeft = styled.div``;
const BoxRight = styled.div``;
