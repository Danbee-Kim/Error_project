import React from "react";
import styled from "styled-components";
import { __deleteTodos } from "redux/modules/todosSlice";
import { useDispatch } from "react-redux";
import Button from "components/elements/Button";
import Input from "components/elements/Input";
import { useNavigate } from "react-router-dom";

function DetailViewer({ list, setIsEdit, setCheck }) {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const onClickEditHandler = () => {
    setIsEdit();
  };

  const onCheckHandler = () => {
    setCheck();
  };

  const onClickDeleteHandler = (id) => {
    dispatch(__deleteTodos(id));
    console.log("id", id);
  };

  return (
    <div>
      <DetailHeader>
        <Title>{list.title}</Title>
        <HeaderRight>
          <CreatedDate>{list.createdDate}</CreatedDate>
          <CreateUser>{list.username}</CreateUser>
        </HeaderRight>
        <HeaderLeft>
          {/* <Input type="checkbox" changeHandler={onCheckHandler}>
            해결여부
          </Input> */}
        </HeaderLeft>
      </DetailHeader>
      <DetailBody>{list.content}</DetailBody>
      <BtnArea>
        <Button size="small" clickHandler={onClickEditHandler}>
          수정하기
        </Button>
        <Button
          size="small"
          clickHandler={() => {
            onClickDeleteHandler(list.id);
            navigate("/main");
          }}
        >
          삭제하기
        </Button>
      </BtnArea>
    </div>
  );
}

export default DetailViewer;

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

const HeaderLeft = styled.div`
  float: left;
  padding-left: 40px;
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

const BtnArea = styled.div`
  margin: 100px auto 80px;
  display: flex;
  justify-content: center;
`;
