import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { __createTodos } from "../../redux/modules/todosSlice";
import { useNavigate } from "react-router-dom";
import Button from "../elements/Button";
import TodoTextarea from "../elements/Textarea";
import Input from "../elements/Input";
import { __postToken } from "redux/modules/loginSlice";

function Form() {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const [post, setPost] = useState({
    title: "",
    content: "",
  });

  const { title, content } = post;

  const changeHandler = (e) => {
    const { value, name } = e.target;
    setPost({
      ...post,
      [name]: value,
    });
  };

  const onSubmitHandler = () => {
    // dispatch(__postToken());
    dispatch(__createTodos(post));
    navigate("/main");
  };

  return (
    <InputForm onSubmit={onSubmitHandler}>
      <InputArea>
        <h3>제목</h3>
        <Input
          type="text"
          name="title"
          changeHandler={changeHandler}
          value={title}
          maxLength="40"
          minLength="2"
          width="80%"
        />
        <h3>내용</h3>
        <TodoTextarea
          name="content"
          value={content}
          changeHandler={changeHandler}
          maxLength="200"
          minLength="2"
          width="80%"
        />
      </InputArea>
      <BtnArea>
        <Button size={"medium"} type="submit">
          작성완료
        </Button>
      </BtnArea>
    </InputForm>
  );
}

export default Form;
const InputForm = styled.form`
  margin:40px auto;

`;


const InputArea = styled.div`
  width: 1000px;
  margin: auto;
`;

const BtnArea = styled.div`
  margin: 50px auto 80px;
  display: flex;
  justify-content: center;
`;
