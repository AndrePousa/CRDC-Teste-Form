import styled from "styled-components";

export const ModalBackground = styled.div`
  position:fixed;
  left:0;
  top:0;
  right:0;
  bottom:0;
  z-index:90;
  background-color:rgba(0,0,0,0.7);
  display:flex;
  justify-content:center;
  align-items:center;
`;

export const ModalArea = styled.div`
  width: 600px;
  height: 570px;
  margin-top:50px;
  background-color: #ffffff;
  border-radius:10px;
`;

export const PrivacyPolicyHead = styled.div`
  padding-top:20px;
  width:100%;
  height:80px;
  border-radius:10px;
  border-bottom:solid;
  color:#aaa;
  //background-color:#aaaa;
`;

export const Content = styled.div`
   width:100%;
  height:325px;
  overflow:auto;
  //background-color:#ff0;
  padding:20px;
`;

export const Select = styled.select`
  width: 460px;
  height: 35px;
  margin-left:40px;
  margin-top:0;
  padding:20px;
  border-radius:10px;
  outline: none;
  border-style:ridge;
  border-color:#e9e9e9
 `;
