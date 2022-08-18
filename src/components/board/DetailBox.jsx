import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "components/Header";
import CommentList from "components/comments/CommentList";
import DetailViewer from "./DetailViewer";
import DetailEditor from "./DetailEditor";
import { __readTodos } from "redux/modules/todosSlice";

function DetailBox() {
  const dispatch = useDispatch();
  const param = useParams();
  const lists = useSelector((state) => state.todos.todos);
  const list = lists.find((list) => list.id === parseInt(param.id));
  const [isEdit, setIsEdit] = useState(false);
  const [check, setCheck] = useState();

  useEffect(() => {
    dispatch(__readTodos());
  }, [dispatch]);

  return (
    <React.Fragment>
      <Header />
      <DetailContainer>
        {isEdit ? (
          <DetailEditor list={list} setIsEdit={() => setIsEdit(!isEdit)} />
        ) : (
          <DetailViewer
            list={list}
            setIsEdit={() => setIsEdit(!isEdit)}
            check={check}
            setCheck={() => setCheck(!check)}
          />
        )}
        {/* <CommentList /> */}
      </DetailContainer>
    </React.Fragment>
  );
}

export default DetailBox;

const DetailContainer = styled.div`
  width: 80vw;
  /* height: 400px; */
  background-color: #f0efe9;
  margin: 80px auto 20px;
  border-radius: 10px;
  box-shadow: 5px 5px 5px #eee;
`;
