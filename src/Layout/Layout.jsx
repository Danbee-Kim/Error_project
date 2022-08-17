import styled from "styled-components";

const Layout = (props) => {
  return <LayoutContainer>{props.children}</LayoutContainer>;
};

const LayoutContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  min-width: 800px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export default Layout;
