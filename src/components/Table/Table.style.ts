import styled from "styled-components";

export const TableWrapperS = styled.div`
  background: transparent;
  border-radius: 3px;
  box-shadow: 0px 0px 10px darkgrey;
`;

export const TableContentS = styled.table`
  width: 100%;
  .head,
  .body {
    display: grid;

    grid-template-columns: 10% 36% 10% 14% 14% 14%;
    width: 100%;
    height: 100%;

    background: white;

    border-bottom: 1px solid rgb(0, 0, 0, 0.1);
  }
  .head {
    color: #909391;
    th {
      padding: 25px 12px;
      text-align: left;
    }
    .clickeable {
      cursor: pointer;
      :hover {
        color: blue;
      }
    }
  }
  .body {
    td {
      padding: 15px 12px;
    }
    :hover {
      background: transparent;
    }
  }
`;
