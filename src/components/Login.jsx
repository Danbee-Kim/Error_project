import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { setRefreshTokenToCookie } from "../actions/Cookie";
import axios from "axios";
import BigLogo from "../src_assets/biglogo.png";
import Button from "./elements/Button";
import Input from "./elements/Input";

function Login() {
  const navigate = useNavigate();

  const [login, setLogin] = useState({
    newId: "",
    newPass: "",
  });
  const { newId, newPass } = login;

  //유효성검사
  const [idVali, setIdVali] = useState("");
  const [passVali, setPassVali] = useState("");

  const postLogin = async () => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_BASE_URL}/login`,
        { username: newId, password: newPass }
      );
      console.log(response);
      setRefreshTokenToCookie(response.headers.authorization);

      alert(response.data);
      navigate("/");
    } catch (error) {
      alert(error);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    newId.trim() === "" ? setIdVali("아이디를 입력해주세요!") : setIdVali("");
    newPass.trim() === ""
      ? setPassVali("비밀번호를 입력해주세요!")
      : setPassVali("");
    postLogin({ username: newId, password: newPass });
  };
  const onChangeHandler = (e) => {
    const { value, name } = e.target;
    setLogin({
      ...login,
      [name]: value,
    });
  };

  const onClickHandler = () => {
    navigate("/signup");
  };

  return (
    <LoginBackground>
      <LoginLogo src={BigLogo} alt="logo" />
      <FormWrap onSubmit={handleSubmit}>
        <FormBox>
          <NameTag>
            <LabelTag htmlFor="id">ID:</LabelTag>
            <Input
              id="id"
              width="300px"
              name="newId"
              minLength="5"
              maxLength="10"
              autoFocus={"autoFocus"}
              changeHandler={onChangeHandler}
              value={newId}
            />
          </NameTag>
          <ValiBox>
            <ValiCheck>{idVali}</ValiCheck>
          </ValiBox>
          <NameTag>
            <LabelTag htmlFor="pw">PW:</LabelTag>
            <Input
              id="pw "
              type="password"
              name="newPass"
              minLength="8"
              maxLength="25"
              width="300px"
              changeHandler={onChangeHandler}
              value={newPass}
            />
          </NameTag>
          <ValiBox>
            <ValiCheck>{passVali}</ValiCheck>
          </ValiBox>
          <Setbtns>
            <Button size="small" type="submit">
              로그인
            </Button>
            <Button size="small" clickHandler={onClickHandler}>
              회원가입
            </Button>
          </Setbtns>
        </FormBox>
      </FormWrap>
    </LoginBackground>
  );
}

export default Login;

const LoginBackground = styled.div`
  background-color: #b8b0dd;
  height: 100vh;
`;
const LoginLogo = styled.img`
  height: 60%;
`;

const FormWrap = styled.div`
  width: 25%;
  min-width: 400px;
  padding: 30px 40px;
  border-radius: 10px;
  position: fixed;
  left: 40%;
  top: 45%;
  background-color: #ffff;
  box-shadow: 5px 5px 5px 5px grey;
`;
const FormBox = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0px auto;
`;
const LabelTag = styled.label`
  width: 30px;
  text-align: center;
`;
const NameTag = styled.div`
  display: flex;
  margin: auto;
  align-items: center;
`;

const Setbtns = styled.div`
  display: flex;
  gap: 10px;
  margin: auto;
`;
const ValiBox = styled.div`
  height: 20px;
`;

const ValiCheck = styled.div`
  color: red;
  font-size: 12px;
  margin-left: 60px;
`;
