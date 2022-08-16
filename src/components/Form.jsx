import React, { useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, __getTodos, __postTodos } from "../redux/modules/todosSlice";
import { useNavigate } from "react-router-dom";
import Button from "./elements/Button";
import TodoTextarea from "./elements/Textarea";
import Input from "./elements/Input";

function Form() {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const posts = useSelector((state) => state.todos.todos);
  const [post, setPost] = useState({});
  //post.title, post.desc

  console.log(posts);

  const changeHandler = (e) => {
    const { value, name } = e.target;
    setPost({
      ...post,
      [name]: value,
    });
  };

  console.log("post:", post);

  const onSubmitHandler = () => {
    // dispatch(addTodo(post));
    dispatch(__postTodos(post));
    navigate("/");
  };

  console.log(post);

  return (
    <div onSubmit={onSubmitHandler}>
      <InputArea>
        <h3>제목</h3>
        <Input
          type="text"
          name="title"
          changeHandler={changeHandler}
          value={post.title}
        />
        <h3>내용</h3>
        <TodoTextarea
          name="content"
          defaultValue={post.content}
          changeHandler={changeHandler}
        />
      </InputArea>
      <BtnArea>
        <Button clickHandler={() => onSubmitHandler()} size={"medium"}>
          작성완료
        </Button>
      </BtnArea>
    </div>
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
