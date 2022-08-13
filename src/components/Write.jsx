import React from "react";
import styled from "styled-components";
import Button from "components/elements/Button";
import TodoTextarea from "components/elements/Textarea";
import Input from "components/elements/Input";

function Write({ setIsShowForm }) {
  return (
    <div>
      <InputArea>
        <h3>제목</h3>
        <Input />
        <h3>작성자</h3>
        <TodoTextarea />
      </InputArea>
      <BtnArea>
        <Button clickHandler={() => setIsShowForm(false)} size={"medium"}>
          작성완료
        </Button>
      </BtnArea>
    </div>
  );
}

export default Write;

const InputArea = styled.div`
  width: 1280px;
  margin: auto;
`;

const BtnArea = styled.div`
  margin: 100px auto 80px;
  display: flex;
  justify-content: center;
`;
