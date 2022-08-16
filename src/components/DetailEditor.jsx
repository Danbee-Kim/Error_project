import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "./elements/Button";
import styled from "styled-components";
import TodoTextarea from "./elements/Input";
import { __updateTodos } from "redux/modules/todosSlice";

function DetailEditor({ list, setIsEdit}) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [content, setContent] = useState(list.content);


  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(content)
    console.log(list)
    dispatch(__updateTodos({ "id":list.id,"content":content }));
    setIsEdit()
  };
  const onChangeHandler = (e) => {
    setContent(e.target.value);
  };
  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <InputArea>
          <h3>{list.title}</h3>
          <h3>내용</h3>
          <TodoTextarea
            name="content"
            value={content}
            changeHandler={onChangeHandler}
          />
        </InputArea>
        <BtnArea>
          <Button size={"medium"} type="submit">
            작성완료
          </Button>
        </BtnArea>
      </form>
    </div>
  );
}

export default DetailEditor;

const InputArea = styled.div`
  width: 1280px;
  margin: auto;
`;

const BtnArea = styled.div`
  margin: 100px auto 80px;
  display: flex;
  justify-content: center;
`;
