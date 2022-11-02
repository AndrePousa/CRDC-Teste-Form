import styled from "styled-components";

export const Row = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: ${(props) => props.breakIn}px) {
    display: flex;
    flex-direction: column;
  }
`;
export const RowBetween = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${(props) => props.breakIn}px) {
    display: flex;
    flex-direction: column;
  }
`;
export const RowAround = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  @media (max-width: ${(props) => props.breakIn}px) {
    display: flex;
    flex-direction: column;
  }
`;
export const Column = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: ${(props) => props.breakIn}px) {
    display: flex;
    flex-direction: column;
  }
`;
export const ColumnBetween = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: ${(props) => props.breakIn}px) {
    display: flex;
    flex-direction: column;
  }
`;
export const ColumnAround = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  @media (max-width: ${(props) => props.breakIn}px) {
    display: flex;
    flex-direction: column;
  }
`;
