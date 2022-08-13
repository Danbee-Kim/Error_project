import React from "react";
import CommentList from "components/CommentList";
import Header from "components/Header";
import styled from "styled-components";

function DetailBox() {
  return (
    <React.Fragment>
      <Header />
      <DetailContainer>
        <DetailHeader>
          <Title>리액트 컴파일 오류</Title>
          <HeaderRight>
            <CreatedDate>2022-08-12</CreatedDate>
            <CreateUser>배지</CreateUser>
          </HeaderRight>
        </DetailHeader>
        <DetailBody>제 코드가 이렇게 에러가 나네요ㅠㅠㅠ</DetailBody>
        <CommentList />
      </DetailContainer>
    </React.Fragment>
  );
}

export default DetailBox;

const DetailContainer = styled.div`
  width: 1280px;
  height: 400px;
  background-color: #f0efe9;
  margin: 80px auto 20px;
  border-radius: 10px;
  box-shadow: 5px 5px 5px #gray;
`;

const DetailHeader = styled.div``;

const Title = styled.div`
  display: flex;
  justify-content: center;
  font-size: 32px;
  font-weight: bold;
  padding-top: 20px;
`;
const HeaderRight = styled.div`
  float: right;
  padding-right: 40px;
  display: flex;
  font-weight: bold;
  font-size: 18px;
`;
const CreatedDate = styled.div``;
const CreateUser = styled.div`
  margin-left: 20px;
`;

const DetailBody = styled.div`
  padding: 40px 25px 20px;
  margin-bottom: 400px;
  font-size: 20px;
  max-width: 1200px;
`;
