import styled from "styled-components";

export const ButtonStyleded = styled.button`
  font-family: "Montserrat-Regular", "Montserrat", sans-serif;
  text-align: center;
  border: none;
  border-radius: 50%;
  background-color: ${(props) => props.bg};
  color: ${(props) => props.color};
  min-width: 170px;
  min-height: 40px;
  border-radius: 100px;
  margin: 20px auto 20px auto;
`;
