import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import CommentList from "components/comments/CommentList";
import Header from "components/Header";
import DetailViewer from "./DetailViewer";
import DetailEditor from "./DetailEditor";

function DetailBox() {
  const param = useParams();
  const lists = useSelector((state) => state.todos.todos);
  const list = lists.find((list) => list.id === parseInt(param.id));

  const [isEdit, setIsEdit] = useState(false);
  console.log(isEdit);
  return (
    <React.Fragment>
      <Header />
      <DetailContainer>
        {/* <DetailViewer list={list} setIsEdit={setIsEdit}/> */}
        {isEdit ? (
          <DetailEditor list={list} setIsEdit={() => setIsEdit(!isEdit)} />
        ) : (
          <DetailViewer list={list} setIsEdit={() => setIsEdit(!isEdit)} />
        )}
        <CommentList />
      </DetailContainer>
    </React.Fragment>
  );
}

export default DetailBox;

const DetailContainer = styled.div`
  width: 80vw;
  height: 400px;
  background-color: #f0efe9;
  margin: 80px auto 20px;
  border-radius: 10px;
  box-shadow: 5px 5px 5px #eee;
`;
