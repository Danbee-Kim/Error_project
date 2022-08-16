import React, { useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { __postTodos } from "../redux/modules/todosSlice";
import { useNavigate } from "react-router-dom";
import Button from "./elements/Button";
import TodoTextarea from "./elements/Textarea";
import Input from "./elements/Input";
import { __postToken } from "redux/modules/loginSlice";

function Form() {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const posts = useSelector((state) => state.todos.todos);
  const [post, setPost] = useState({});

  const { title, content } = post;

  const changeHandler = (e) => {
    const { value, name } = e.target;
    setPost({
      ...post,
      [name]: value,
    });
  };

  const onSubmitHandler = () => {
    dispatch(__postTodos(post));
    dispatch(__postToken())
    navigate("/");
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <InputArea>
        <h3>제목</h3>
        <Input
          type="text"
          name="title"
          changeHandler={changeHandler}
          value={title || ""}
        />
        <h3>내용</h3>
        <TodoTextarea
          name="content"
          value={content || ""}
          changeHandler={changeHandler}
        />
      </InputArea>
      <BtnArea>
        <Button size={"medium"}>작성완료</Button>
      </BtnArea>
    </form>
  );
}

export default Form;

const InputArea = styled.div`
  width: 1280px;
  margin: auto;
`;

const BtnArea = styled.div`
  margin: 100px auto 80px;
  display: flex;
  justify-content: center;
`;
