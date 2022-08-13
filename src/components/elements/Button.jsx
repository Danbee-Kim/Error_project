import styled, { css } from 'styled-components';
import { faTrash, faHouse, faPencil } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const Button = ({ children, size, variant, type, onClick,color}) => {
  return (
    <StButton size={size} variant={variant} type={type} onClick={onClick} color={color} >
      {children}
      {variant === 'delete' && <FontAwesomeIcon icon={faTrash} size="1x" />}
      {variant === 'home' && <FontAwesomeIcon icon={faHouse} size="2x" />}
      {variant === 'revise' && <FontAwesomeIcon icon={faPencil} size="1x" />}
    </StButton>
  );
};

Button.defaultProps = {
  children: '',
  size: '',
  variant: '',
  type: 'button',
  clickHandler: null,
};

export default Button;

const StButton = styled.button`
  ${(props) => {
    return (
      props.size === 'medium' &&
      css`
        font-size: 0.875rem;
        border: 2px solid #7092BF;
        background-color: #ffff;
        height: 46px;
        border-radius: 20px;
        width: 130px;
        cursor: pointer;
        :hover {backgound-color:#7092BF}
      `
    );
  }}
  ${(props) => {
    return (
      props.size === 'small' &&
      css`
        font-size: 0.875rem;
        border: 2px solid #7092BF;
        background-color: #ffff;
        height: 35px;
        border-radius: 20px;
        width: 100px;
        cursor: pointer;
        :hover {background-color:#7092BF}
      `
    );
  }}
  ${(props) => {
    return (
      props.size === 'mini' &&
      css`
        font-size: 0.3rem;
        border: 2px solid #7092BF;
        background-color: #ffff;
        height: 35px;
        border-radius: 20px;
        width: 40px;
        cursor: pointer;
        :hover {background-color:#7092BF}
      `
    );
  }}
  
${(props) => {
    return (
      props.variant === 'delete' &&
      css`
        color: #ffff;
        background-color: #7092BF;
        border: 1px solid #7092BF;
        border-radius: 3px;
        font-size: 16px;
        cursor: pointer;
      `
    );
  }}

${(props) => {
    return (
      props.variant === 'revise' &&
      css`
        color: #ffff;
        background-color: #7092BF;
        border: 1px solid #7092BF;
        border-radius: 3px;
        font-size: 16px;
        cursor: pointer;
      `
    );
  }}

`;