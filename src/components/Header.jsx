import React from "react";
import styled from "styled-components";
import Logo from "../src_assets/logo.png";

function Header() {
  return (
    <HeaderWrap>
      <HeaderContainer>
        <HeaderLogo src={Logo} alt="logo" />
      </HeaderContainer>
      <HeaderTitle>
        <div>로그아웃</div>
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
  /* height: 200px; */
`;
