import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(
    -118.47757259871835deg,
    #533771 10.251866273770064%,
    #004b7f 59.0716713357797%,
    #1688bc 97.43008959878728%
    
  );

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.div`
  width: 1079px;
  height: 566px;
  padding: 2px 2px 2px 2px;
  border-radius: 6px;
  background-color: #ffffff;
  box-sizing: border-box;
  display:flex;
`;

export const CRDCBrand = styled.img`
  width:25vh;
  margin-bottom:40px;
`;

export const RowAround = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top:25px;

  @media (max-width: ${(props) => props.breakIn}px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Link = styled.a`
  box-sizing: border-box;
  font-family: "Montserrat-Thin", "Montserrat Thin", "Montserrat", sans-serif;
  color: rgba(255, 255, 255, 0.85);
  text-align: left;
  line-height: normal;
  cursor: pointer;
  outline: none;
  text-decoration: none;
  font-weight: bold;
  margin-left:8px;

  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ContainerSignInDesc = styled.p`
  background-color: rgba(255, 255, 255, 0);
  box-sizing: border-box;
  font-family: "Montserrat-Light", "Montserrat Light", "Montserrat", sans-serif;
  font-weight: 200;
  color: #ffffff;
  text-align: center;
  line-height: 22px;
`;

export const Column = styled.div`
  display: flex;
  flex-direction:column; 
  //background-color: #00ff;
  width: 50%;
  height: 100%;
`;

export const VerticalLine = styled.hr`
  margin-top:50px;
  height:80%;
  width:1px;
  background-image: -webkit-radial-gradient(center, #d3d3d3, #ffff );
`;

export const InitialRegistration = styled.div`
  width: 460px;
  height: 31px;
  //background-color: #ffc222;
  font-family: 'Roboto-Thin', 'Roboto Thin', 'Roboto', sans-serif;
  color: #5f6b75;
  text-align: left;
  font-size:22px;
  margin:40px;
  margin-bottom:10px
 `;

 export const RegistrationText = styled.div`
  width: 460px;
  height: 42px;
  //background-color: #ffc222;
  font-family: 'Roboto-Thin', 'Roboto Thin', 'Roboto', sans-serif;
  color: #555555;
  text-align: left;
  font-size:15px;
  margin-left:40px;
 `;

 export const Label = styled.div`
  width: 460px;
  height: 25px;
  //background-color: #ffc222;
  font-family: 'Roboto-Thin', 'Roboto Thin', 'Roboto', sans-serif;
  color: #555555;
  text-align: left;
  font-size:15px;
  margin-left:40px;
  margin-top:40px;
  font-weight: bold;
  padding-bottom:10px;
 `;

 export const Input = styled.input`
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

 export const Row = styled.div`
  margin-right:33px;
  display:flex;
  justify-content:space-between;
 `;

 export const Proceed = styled.button`
  display:flex;
  align-items:center;
  justify-content:center;
  margin-top:40px;
  width: 201px;
  height: 45px;
  padding: 2px 2px 2px 2px;
  border-radius: 100px;
  background-color: #efa157;
  box-sizing: border-box;
  font-family: 'Montserrat-Medium', 'Montserrat Medium', 'Montserrat', sans-serif;
  color: #ffffff;
  margin-left:300px;
  font-weight: bold;
  border:none;
  
  &:hover {
    text-shadow: 0 0 4px #fff;
    background-image:linear-gradient(
    #004b7f 59.0716713357797%,
    #1688bc 97.43008959878728%
    )
  }
 `;

 export const BasicData = styled.div`
  display:flex;
  width:40px;
  height:40px;
  align-items:center;
  justify-content:center;
  color:#fff;
  background-image: linear-gradient(
    -118.47757259871835deg,
    #533771 10.251866273770064%,
    #004b7f 59.0716713357797%,
    #1688bc 97.43008959878728%
    
  );
  border-radius:50%
 `;

 export const DadosBasicos = styled.div`
  display:flex;
  align-items:center;
  width:140px;
  height:40px;
  margin-left:10px;
  color:#004b7f;
  //background-color:#533771;
 `;

 export const Head = styled.div`
  width: 460px;
  height: 35px;
  margin-right:33px;
  display:flex;
  background-color:#fff;
  //background-color:#168;
  margin-top:10px;
  margin-left:40px;
 `;

 export const SpanRed = styled.span`
  color:red;
`; 




