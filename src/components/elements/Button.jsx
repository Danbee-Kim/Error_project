import styled, { css } from "styled-components";
import { faTrash, faHouse, faPencil } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Button = ({ children, size, variant, type, clickHandler }) => {
  return (
    <StButton size={size} variant={variant} type={type} onClick={clickHandler}>
      {children}
      {variant === "delete" && <FontAwesomeIcon icon={faTrash} size="1x" />}
      {variant === "home" && <FontAwesomeIcon icon={faHouse} size="2x" />}
      {variant === "revise" && <FontAwesomeIcon icon={faPencil} size="1x" />}
    </StButton>
  );
};

Button.defaultProps = {
  children: "",
  size: "",
  variant: "",
  type: "button",
  clickHandler: null,
};

export default Button;

const StButton = styled.button`
  ${(props) => {
    return (
      props.size === "medium" &&
      css`
        font-size: 30px;
        padding: 5px 12px;
        border: 2px solid #b8b0dd;
        background-color: #ffff;
        height: 90px;
        border-radius: 8px;
        width: 300px;
        cursor: pointer;
        :hover {
          background-color: #b8b0dd;
        }
      `
    );
  }}
  ${(props) => {
    return (
      props.size === "small" &&
      css`
        font-size: 0.875rem;
        border: 2px solid #7092bf;
        background-color: #ffff;
        height: 40px;
        border-radius: 8px;
        width: 100px;
        cursor: pointer;
        :hover {
          border: 4px solid #7092bf;
        }
      `
    );
  }}
${(props) => {
    return (
      props.variant === "delete" &&
      css`
        color: #ffff;
        background-color: #7092bf;
        border: 1px solid #7092bf;
        border-radius: 3px;
        padding: 3px 8px;
        font-size: 16px;
        cursor: pointer;
      `
    );
  }}

${(props) => {
    return (
      props.variant === "revise" &&
      css`
        color: #ffff;
        background-color: #7092bf;
        border: 1px solid #7092bf;
        border-radius: 3px;
        padding: 3px 7px;
        font-size: 16px;
        cursor: pointer;
      `
    );
  }}
`;
