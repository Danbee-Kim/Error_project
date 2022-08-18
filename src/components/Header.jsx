import React,{useEffect} from "react";
import styled from "styled-components";
import Logo from "../src_assets/logo.png";
import {getRefreshToken, logout} from "../actions/Cookie"
import { useDispatch } from "react-redux";

function Header() {
  const dispatch=useDispatch();
  const onClickDelete=()=>{
    logout();
    window.location.replace("/");
  };

  useEffect(() => {
    getRefreshToken()
  }, []);

  return (
    <HeaderWrap>
      <HeaderContainer>
        <a href="/main"><HeaderLogo src={Logo} alt="logo" /></a>
      </HeaderContainer>
      <HeaderTitle>
        <HeaderLogout onClick={onClickDelete}>로그아웃</HeaderLogout>
      </HeaderTitle>
    </HeaderWrap>
  );
}


export default Header;
const HeaderWrap = styled.div`
  padding: 10px 50px;
  background-color: #b8b0dd;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 200px;
`;
const HeaderLogo = styled.img`
  height: 100%;
`;
const HeaderTitle = styled.div`
  display: flex;
  justify-content: right;
  gap: 30px;
  
`;
const HeaderLogout = styled.div`
  cursor: pointer;
  
`;
