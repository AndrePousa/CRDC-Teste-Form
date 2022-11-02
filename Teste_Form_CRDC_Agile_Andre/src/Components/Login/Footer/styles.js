import styled from "styled-components";

export const Container = styled.footer`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 20px 0;
`;

export const Link = styled.a`
  box-sizing: border-box;
  font-family: "Montserrat-Thin", "Montserrat Thin", "Montserrat", sans-serif;
  font-weight: 200;
  color: rgba(255, 255, 255, 0.85);
  text-align: left;
  line-height: normal;
  cursor: pointer;
  outline: none;
  text-decoration: none;

  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Title = styled.h3`
  box-sizing: border-box;
  font-family: "Montserrat-Regular", "Montserrat", sans-serif;
  color: #555555;
  text-align: center;
  line-height: normal;
`;
export const Desc = styled.p`
  box-sizing: border-box;
  font-family: "Montserrat-Thin", "Montserrat Thin", "Montserrat", sans-serif;
  font-weight: 200;
  color: #555555;
  text-align: left;
  line-height: normal;
  margin-top: 8px;
`;
