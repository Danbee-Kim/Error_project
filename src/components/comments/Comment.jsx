import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { __deleteComments } from "redux/modules/commentsSlice";
import Button from "components/elements/Button";

const Comment = ({ comment }) => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const onDeleteButtonHandler = () => {
    dispatch(__deleteComments(id));
  };

  return (
    <StComment>
      <StInputWrapper>
        <p>{comment.username}</p>
        <p>{comment.content}</p>
      </StInputWrapper>
      <StControlGroup>
        <Button size="small" ClickHandler={onDeleteButtonHandler}>
          삭제하기
        </Button>
      </StControlGroup>
    </StComment>
  );
};
export default Comment;

const StComment = styled.div`
  border-bottom: 1px solid #eee;
  height: 70px;
  padding: 0 12px;
`;

const StControlGroup = styled.div`
  flex-shrink: 0;
  gap: 3px;
`;

const StInputWrapper = styled.div`
  width: 70%;
`;
