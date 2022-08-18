import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { __updateTodos } from "redux/modules/todosSlice";
import Button from "components/elements/Button";
import TodoTextarea from "../elements/Input";

function DetailEditor({ list, setIsEdit }) {
  const dispatch = useDispatch();
  const [content, setContent] = useState(list.content);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(__updateTodos({ id: list.id, content: content }));
    setIsEdit();
  };
  const onChangeHandler = (e) => {
    setContent(e.target.value);
  };
  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <InputArea >
          <h3>{list.title}</h3>
          <TodoTextarea
            name="content"
            value={content}
            changeHandler={onChangeHandler}
            minLength={"2"}
            maxLength={"999"}
          />
        </InputArea>
        <BtnArea>
          <Button type="submit" size={"medium"}>
            작성완료
          </Button>
        </BtnArea>
      </form>
    </div>
  );
}

export default DetailEditor;
const InputArea = styled.div`
  width: 100%;
  margin: auto;
`;

const BtnArea = styled.div`
  margin: 100px auto 80px;
  display: flex;
  justify-content: center;
`;
