import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  align-items: center;
  justify-content: ${(props) =>
    props.isDetails ? "space-around" : "flex-end"};
  background-color: #ededed;

  button {
    color: #4088cb;
    border: none;
    background-color: transparent;
    font-weight: 500;
    font-size: 18px;
    cursor: pointer;
  }

  img {
    width: 29px;
    height: 29px;
  }

  div {
    display: flex;
    width: ${(props) => (props.isDetails ? "42%" : "50%")};
    align-items: center;
    justify-content: space-between;
    ${(props) => {
      if (!props.isDetails) {
        return "margin-right: 30px;";
      }
    }}
  }
`;
