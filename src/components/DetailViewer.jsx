import React from 'react'
import styled from "styled-components";
import Button from './elements/Button';

function DetailViewer({setIsEdit,list}) {
    const onClickHandler=()=>{
      setIsEdit()
    }
    console.log(list)
  return (
    <div>
      <DetailHeader>
          <Title>{list.title}</Title>
          <HeaderRight>
            <CreatedDate>{list.createdDate}</CreatedDate>
            <CreateUser>{list.username}</CreateUser>
          </HeaderRight>
        </DetailHeader>
        <DetailBody>{list.content}</DetailBody>
        <Button size="medium" clickHandler={onClickHandler}>수정하기</Button>
    </div>
  )
}

export default DetailViewer

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
