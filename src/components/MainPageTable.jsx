import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "components/elements/Button";
import styled from "styled-components";
import Write from "components/Write";

function MainPageTable() {
  const navigate = useNavigate();
  const [isShowForm, setIsShowForm] = useState(false);

  let data = [
    {
      id: 0,
      created_date: "2022.08.12",
      username: "태민",
      title: "자바 오류",
      isDone: false,
    },
    {
      id: 1,
      created_date: "2022.08.12",
      username: "단비",
      title: "리엑트 오류",
      isDone: true,
    },
    {
      id: 2,
      created_date: "2022.08.12",
      username: "명순",
      title: "스프링 배열 오류",
      isDone: false,
    },
  ];

  console.log(isShowForm);

  return (
    <React.Fragment>
      {isShowForm ? (
        <Write setIsShowForm={setIsShowForm} />
      ) : (
        <div>
          <BtnArea>
            <Button clickHandler={() => setIsShowForm(true)} size={"medium"}>
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
                {data.map((article) => {
                  return (
                    <tr
                      key={article.id}
                      onClick={() => navigate(`/detail/${article.id}`)}
                    >
                      <td>{article.created_date}</td>
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
      )}
      {/* 글 레이아웃 Container */}
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
