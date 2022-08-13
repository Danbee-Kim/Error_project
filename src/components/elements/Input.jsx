import styled, { css } from "styled-components";

const Input = ({
  value,
  defaultValue,
  id,
  name,
  placeholder,
  width,
  changeHandler,
  minLength,
  maxLength,
}) => {
  return (
    <FormInputContainer>
      <FormInput
        type="text"
        id={id}
        name={name}
        value={value}
        defaultValue={defaultValue}
        placeholder={placeholder}
        width={width}
        onChange={changeHandler}
        minLength={minLength}
        maxLength={maxLength}
      />
    </FormInputContainer>
  );
};

Input.defaultValue = {
  value: "",
  defaultValue: "",
  id: "",
  name: "",
  placeholder: "",
  width: "",
  labelText: "",
  isHide: false,
  changeHandler: null,
  minLength: 0,
  maxLength: 200,
};

export default Input;

const FormInputContainer = styled.div``;

const FormInput = styled.input`
  outline: none;
  ${(props) => {
    return (
      props.type === "text" &&
      css`
        font-size: 18px;
        width: ${(props) => props.width || "90%"};
        padding: 10px;
        margin: 10px;
        border: 1px solid #679fb6;
        border-radius: 3px;
      `
    );
  }}
`;
