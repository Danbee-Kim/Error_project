import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Input from "components/elements/Input";
import Button from "components/elements/Button";
import { __createComments } from "redux/modules/commentsSlice";

const AddCommentForm = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const [comment, setComment] = useState({
    username: "",
    content: "",
  });

  const onAddCommentButtonHandler = (e) => {
    e.preventDefault();
    // console.log("aaa");
    dispatch(__createComments({ comment }));
    setComment({
      username: "",
      content: "",
    });
  };

  const onChangeInputHandler = (event) => {
    const { name, value } = event.target;
    setComment({
      ...comment,
      [name]: value,
    });
  };

  return (
    <StForm onSubmit={onAddCommentButtonHandler}>
      <StNameInput>
        <Input
          placeholder="이름 (5자 이내)"
          value={comment.username}
          type="text"
          name="username"
          changeHandler={onChangeInputHandler}
          maxLength={5}
        />
      </StNameInput>
      <Input
        placeholder="댓글을 추가하세요. (100자 이내)"
        value={comment.content}
        name="content"
        type="text"
        changeHandler={onChangeInputHandler}
        maxLength={100}
      />
      <Button type="submit">추가하기</Button>
    </StForm>
  );
};

export default AddCommentForm;

const StNameInput = styled.div`
  width: 150px;
`;

const StForm = styled.form`
  gap: 12px;
  width: 100%;
  padding: 0 12px;
`;
