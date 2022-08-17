import React, { useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { __readTodos } from "../../redux/modules/todosSlice";
import { useDispatch, useSelector } from "react-redux";
import Button from "../elements/Button";

function MainPageTable() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { todos } = useSelector((state) => state.todos);

  useEffect(() => {
    dispatch(__readTodos());
  }, [dispatch]);

  return (
    <React.Fragment>
      <div>
        <BtnArea>
          <Button clickHandler={() => navigate("/write")} size={"medium"}>
            작성하기
          </Button>
        </BtnArea>
        <MainContainer>
          <Table>
            <TableHead>
              <tr>
                <th>작성일자</th>
                <th>제목</th>
                <th>작성자</th>
                <th>해결여부</th>
              </tr>
            </TableHead>
            <TableBody>
              {todos.map((article) => {
                return (
                  <tr
                    key={article.id}
                    onClick={() => navigate(`/detail/${article.id}`)}
                  >
                    <td>{article.createdDate}</td>
                    <td>{article.title}</td>
                    <td>{article.username}</td>
                    <td>{article.isDone ? "해결완료" : "해결중"}</td>
                  </tr>
                );
              })}
            </TableBody>
          </Table>
        </MainContainer>
      </div>
    </React.Fragment>
  );
}

export default MainPageTable;

const MainContainer = styled.div``;

const BtnArea = styled.div`
  margin: 100px auto 80px;
  display: flex;
  justify-content: center;
`;

const Table = styled.table`
  width: 90vw;
  margin: auto;
  border-top: 1px solid #444444;
  border-collapse: collapse;
  overflow: auto;
`;

const TableHead = styled.thead`
  font-size: 40px;
  height: 60px;
  border-bottom: 1px solid black;
  background-color: #b8b0dd;
`;

const TableBody = styled.tbody`
  td {
    height: 40px;
    font-size: 18px;
    border-bottom: 1px solid #444444;
  }
`;
