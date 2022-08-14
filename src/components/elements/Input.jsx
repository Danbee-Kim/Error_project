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
  type,
}) => {
  return (
    <FormInputContainer>
      <FormInput
        id={id}
        name={name}
        value={value}
        defaultValue={defaultValue}
        placeholder={placeholder}
        width={width}
        onChange={changeHandler}
        minLength={minLength}
        maxLength={maxLength}
        type={type}
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
        font-size: 15px;
        width: ${(props) => props.width || "90%"};
        padding: 10px;
        margin: 10px;
        border: 1px solid #679fb6;
        border-radius: 3px;
        :focus{
          border:2px solid #679fb6
        }
        cursor: pointer;
      `
    );
  }}


`;
