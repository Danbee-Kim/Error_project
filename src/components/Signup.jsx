import Button from "./elements/Button";
import Input from "./elements/Input";
import styled from "styled-components";
import BigLogo from "../src_assets/biglogo.png";
import { useDispatch, useSelector } from "react-redux";
import { __postCheckId, __postInfo, __postToken } from "redux/modules/loginSlice";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Signup() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [info, setInfo] = useState({
    newId: "",
    newPass: "",
    valiPass: "",
  });

  const { newId, newPass, valiPass } = info;

  //유효성 검사
  const [idVali, setIdVali] = useState("");
  const [passVali, setPassVali] = useState("");
  const [passCheck, setPassCheck] = useState("");
  const onChangeHandler = (e) => {
    const { value, name } = e.target;
    setInfo({
      ...info,
      [name]: value,
    });
    const regId =
      /^(?!((?:[A-Za-z]+)|(?:[~!@#$%^&*()_+=]+)|(?=[0-9]+))$)[A-Za-z\d~!@#$%^&*()_+=]{5,10}$/;
    if (name === "newId")
      !regId.test(value)
        ? setIdVali(
            "아이디를 영문, 숫자, 특수문자 중 2가지 이상 조합하여 5-10자리 이하 입력해주세요."
          )
        : setIdVali("");
    const regPass = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
    if (name === "newPass")
      !regPass.test(value)
        ? setPassVali(
            "비밀번호를 영문, 숫자, 특수기호 조합으로 8-25자리 이하 입력해주세요."
          )
        : setPassVali("");
    if (name === "valiPass")
      newPass !== value
        ? setPassCheck("비밀번호가 불일치 합니다")
        : setPassCheck("");
  };

  const checkDone= useSelector((state)=>state.response.ok)
  const [idChecked,setIdChecked]=useState("false")
  const onClickCheck = () => {
    if (!checkDone){return alert("이미 사용 중인 아이디입니다")}
    // dispatch(__postCheckId({username:newId}))
    // dispatch(__postToken())
    if(checkDone){setIdChecked(true)}
    navigate("/")
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(idChecked){
    dispatch(__postInfo({username:newId,password:newPass}))}
  };
  const onClickHandler = () => {
    navigate("/login");
  };

  return (
    <LoginBackground>
      <LoginLogo src={BigLogo} alt="logo" />
      <FormWrap>
        <FormBox onSubmit={handleSubmit}>
          <NameTag>
            <LabelTag htmlFor="id">ID:</LabelTag>
            <Input
              id="id"
              width="250px"
              name="newId"
              placeholder="아이디"
              type="text"
              value={newId}
              autoFocus={"autoFocus"}
              changeHandler={onChangeHandler}
              maxLength="10"
            />
            <Button clickHandler={onClickCheck} size="mini">
              중복확인
            </Button>
          </NameTag>
          <ValiBox>
            <ValiCheck>{idVali}</ValiCheck>
          </ValiBox>
          <NameTag>
            <LabelTag htmlFor="pw">PW:</LabelTag>
            <Input
              id="pw"
              width="300px"
              name="newPass"
              placeholder="비밀번호"
              type="password"
              value={newPass}
              changeHandler={onChangeHandler}
              maxLength="25"
            />
          </NameTag>
          <ValiBox>
            <ValiCheck>{passVali} </ValiCheck>
          </ValiBox>
          <NameTag>
            <LabelTag htmlFor="pw2">PW:</LabelTag>
            <Input
              id="pw2"
              width="300px"
              name="valiPass"
              placeholder="비밀번호 확인"
              type="password"
              value={valiPass}
              changeHandler={onChangeHandler}
              maxLength="25"
            />
          </NameTag>
          <ValiBox>
            <ValiCheck>{passCheck} </ValiCheck>
          </ValiBox>
          <Setbtns>
            <Button size="small" clickHandler={onClickHandler}>
              뒤로가기
            </Button>
            <Button type="submit" size="small">
              회원가입
            </Button>
          </Setbtns>
        </FormBox>
      </FormWrap>
    </LoginBackground>
  );
}

export default Signup;

const LoginBackground = styled.div`
  background-color: #b8b0dd;
  height: 100vh;
`;
const LoginLogo = styled.img`
  height: 60%;
`;

const FormWrap = styled.div`
  width: 30%;
  min-width: 400px;
  padding: 30px 40px;
  border-radius: 10px;
  position: fixed;
  left: 40%;
  top: 45%;
  background-color: white;
  box-shadow: 5px 5px 5px 5px grey;
`;
const FormBox = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0px auto;
  /* gap:25px; */
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
  font-size: 10px;
  margin-left: 40px;
`;
