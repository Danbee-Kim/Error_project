import React from 'react'
import Button from './elements/Button'
import Input from './elements/Input'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import BigLogo from "../src_assets/biglogo.png"
import useInput from 'hooks/UseInput'
import { useDispatch } from 'react-redux'
import { __postLogin } from 'redux/modules/loginSlice'


function Login() {
  const navigate= useNavigate()
  const [inputId,getChangedId]=useInput("")
  const[inputPass,getChagedPass]=useInput("")
  const dispatch= useDispatch()
  
  const handleSubmit=(e)=>{
    e.preventDefault();
    if (inputId===""|| inputPass===""){return alert("아이디와 비밀번호를 입력해주세요!")}

    const regId = /^(?!((?:[A-Za-z]+)|(?:[~!@#$%^&*()_+=]+)|(?=[0-9]+))$)[A-Za-z\d~!@#$%^&*()_+=]{10,}$/;
    if(!regId.test(inputId)) {return alert("아이디를 영문, 숫자, 특수문자 중 2가지 이상 조합하여 10자리 이내로 입력해주세요.")}
      
   const regPass=/^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/
    if(!regPass.test(inputPass)) {return alert("비밀번호를 영문, 숫자, 특수기호 조합으로 8-25자리 이상 입력해주세요.")}
  
    dispatch(__postLogin(inputId,inputPass))
  }
  
  const clickHandler=()=>{
    navigate("/signup")
  }
  return (
    <LoginBackground>
      <LoginLogo src={BigLogo} alt="logo" />
    <FormWrap onSubmit={handleSubmit}>
      <FormBox>
        <NameTag>
        <LabelTag  htmlFor='id'>ID:</LabelTag>
        <Input id="id" width="300px" changeHandler={getChangedId} value={inputId}/>
        </NameTag>
        <NameTag>
        <LabelTag htmlFor='pw'>PW:</LabelTag>
        <Input id="pw "type="password" width="300px" changeHandler={getChagedPass} value={inputPass}/>
        </NameTag>
        <Setbtns>
        <Button size="small" type="submit">로그인</Button>
        <Button size="small" clickHandler={clickHandler}>회원가입</Button>
        </Setbtns>
      </FormBox>
    </FormWrap>
    </LoginBackground>
  )
}

export default Login

const LoginBackground=styled.div`
  background-color: #B8B0DD;
  height:100vh;

`
const LoginLogo= styled.img`
  height:60%;
`

const FormWrap=styled.div`

  width:25%;
  min-width:400px;
  padding:30px 40px;
  border-radius:10px;
  position:fixed;
  left:40%;
  top:45%;
  background-color:#ffff;
  box-shadow: 5px 5px 5px 5px grey;
  

`
const FormBox=styled.form`
  display:flex;
  flex-direction:column;
  margin:0px auto;
  gap:35px;

`
const LabelTag=styled.label`
width:30px;
text-align:center;

`
const NameTag=styled.div`
  display: flex;
  margin:auto;
  align-items:center;
  
`

const Setbtns= styled.div`
  display:flex;
  gap: 10px;
  margin:auto;

`
