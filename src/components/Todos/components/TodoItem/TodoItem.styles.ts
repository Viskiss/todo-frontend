import styled from "styled-components";

export default styled.li<{ completed: boolean }>`
  display: flex;
  border-radius: 10px;
  border: 2px solid #efefef;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  transition: transform 0.3s, box-shadow 0.5s;
  backdrop-filter: blur(0.8px);

  &:not(:nth-child(0)) {
    margin-bottom: 10px;
  }
  .todo-item_input {
    text-decoration: ${({ completed }) =>
      completed ? "line-through 2px red" : ""};
  }
  .todo-item_input {
    width: 35%;
    border: none;
    background-color: inherit;
    padding: 5px 10px;
    font-weight: bold;
  }
`;
