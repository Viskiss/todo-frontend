import styled from "styled-components";

export default styled.section`
  display: flex;
  justify-content: center;
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: fit-content;
    padding: 20px 7px;
  }

  .todos-list {
    display: flex;
    flex-direction: column;
    padding: 0;
  }
  .todos-list_block {
    display: flex;
  }
`;
