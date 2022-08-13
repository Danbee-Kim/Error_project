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
  type
}) => {
  return (
    <FormInputContainer>
      <FormInput
        type={type}
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
      css`
        font-size: 14px;
        width: ${(props) => props.width || "100%"};
        border-radius: 20px;
        border: 2px solid #7092bf;
        height: 35px;
      `
    );
  }}
`;
