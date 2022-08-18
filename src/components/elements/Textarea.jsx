import styled from "styled-components";

const TodoTextarea = ({ defaultValue, changeHandler,minLength,maxLength }) => {
  return (
    <TodoTextareaContainer>
      <StyledTextarea
        id="todo-textarea"
        name="content"
        rows="10"
        cols="50"
        placeholder="내용을 입력해주세요 (200자 이내)"
        defaultValue={defaultValue}
        onChange={changeHandler}
        minLength={minLength}
        maxLength={maxLength}
      ></StyledTextarea>
    </TodoTextareaContainer>
  );
};

TodoTextarea.defaultProps = {
  defaultValue: "",
  changeHandler: null,
};

export default TodoTextarea;

const TodoTextareaContainer = styled.div`
  display: flex;
  margin-top: 15px;
`;

const StyledTextarea = styled.textarea`
  width: 80%;
  border: 1px solid #679fb6;
  border-radius: 5px;
  margin-left: 10px;
  padding: 12px;
`;
