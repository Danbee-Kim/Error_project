import Button from './elements/Button'
import Input from './elements/Input'
import styled from 'styled-components'
import BigLogo from "../src_assets/biglogo.png"
import useInput from 'hooks/UseInput'
import { useDispatch } from 'react-redux'
import { __postCheckId, __postInfo } from 'redux/modules/loginSlice'
import { useNavigate } from 'react-router-dom'

function Signup() {
  const [newId,getNewId]=useInput('');
  const [inputNewPass,getNewPass]=useInput('');
  const [inputValiPass,getValipass]=useInput('');

  const dispatch=useDispatch();
  const navigate=useNavigate();

  const onClickCheck=()=>{
    dispatch(__postCheckId(newId))

  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    const regId = /^(?!((?:[A-Za-z]+)|(?:[~!@#$%^&*()_+=]+)|(?=[0-9]+))$)[A-Za-z\d~!@#$%^&*()_+=]{5,10}$/;
    if(!regId.test(newId)) {return alert("아이디를 영문, 숫자, 특수문자 중 2가지 이상 조합하여 5-10자리 이하 입력해주세요.")}
      
   const regPass=/^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/
    if(!regPass.test(inputNewPass)) {return alert("비밀번호를 영문, 숫자, 특수기호 조합으로 8-25자리 이하 입력해주세요.")}

    if (inputNewPass!==inputValiPass){return alert("비밀번호가 불일치합니다.")}

    dispatch(__postInfo(newId,inputNewPass))
  }
const onClickHandler=()=>{
  navigate("/login")
}

  return (
    <LoginBackground>
      <LoginLogo src={BigLogo} alt="logo" />
    <FormWrap>
      <FormBox onSubmit={handleSubmit}>
        <NameTag>
        <LabelTag htmlFor='id'>ID:</LabelTag>
        <Input
         id="id" width="250px"placeholder="아이디" type="text"value={newId} changeHandler={getNewId}/><Button clickHandler={onClickCheck} size="mini">중복확인</Button>
        </NameTag>
        <NameTag>
        <LabelTag htmlFor='pw'>PW:</LabelTag>
        <Input 
        id="pw" width="300px" placeholder="비밀번호" type="password" value={inputNewPass} changeHandler={getNewPass}/>
        </NameTag>
        <NameTag>
        <LabelTag htmlFor='pw2'>PW:</LabelTag>
        <Input 
        id="pw2" width="300px" placeholder="비밀번호 확인" type="password" value={inputValiPass} changeHandler={getValipass}/>
        </NameTag>
        <Setbtns>
        <Button size="small" clickHandler={onClickHandler}>뒤로가기</Button>
        <Button type="submit"size="small">회원가입</Button>
        </Setbtns>
      </FormBox>
    </FormWrap>
    </LoginBackground>
  )
}

export default Signup

const LoginBackground=styled.div`
  background-color: #B8B0DD;
  height:100vh;
`
const LoginLogo= styled.img`
  height:60%;
`

const FormWrap=styled.div`
  width:30%;
  min-width:400px;
  padding:30px 40px;
  border-radius:10px;
  position:fixed;
  left:40%;
  top:45%;
  background-color:white;
  box-shadow:5px 5px 5px 5px grey;
  

`
const FormBox=styled.form`
  display:flex;
  flex-direction:column;
  margin:0px auto;
  gap:25px;

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