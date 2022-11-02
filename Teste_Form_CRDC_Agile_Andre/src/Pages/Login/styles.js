import styled from "styled-components";
import { Form as unForm } from "@unform/web";

export const Container = styled.div`
  background-color: #fff;
  width: 60%;
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h2`
  font-family: "Montserrat-Medium", "Montserrat Medium", "Montserrat",
    sans-serif;
  font-weight: normal;
  color: #004e92;
  text-align: center;
  line-height: normal;
  margin: 30px auto;
`;

export const Form = styled(unForm)`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const RecoveryPasswordText = styled.p`
  background-color: rgba(255, 255, 255, 0);
  box-sizing: border-box;
  font-family: "Montserrat-Light", "Montserrat Light", "Montserrat", sans-serif;
  font-weight: 200;
  color: #333333;
  text-align: left;
  line-height: normal;
  cursor: pointer;
`;
