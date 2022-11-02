import React from "react";
import {
  Container,
  CRDCBrand,
  ContainerSignIn,
  ContainerSignInTitle,
  ContainerSignInDesc,
} from "./styles";
import CRDCBrandImage from "../../../assets/logos/crdc_lg.png";
import Button from "../../Forms/Button";
import { useHistory } from 'react-router-dom';


function AsideLogin( ) {

  let history = useHistory();

  const handleRegistration = () => {
    history.push('/RegistrationScreen');
  };

  return (
    <Container>
      <CRDCBrand src={CRDCBrandImage} />
      <ContainerSignIn>
        <ContainerSignInTitle>Não possui um cadastro?</ContainerSignInTitle>
        <ContainerSignInDesc>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
          interdum ex vitae tellus pretium, eget tincidunt ligula molestie.
        </ContainerSignInDesc>
        <Button
          text="CADASTRAR"
          styles={{
            backgroundColor: "transparent",
            border: "2px solid #fff",
            marginTop: 40,       
          }}
          onClick={handleRegistration}
        />
      </ContainerSignIn>
    </Container>
  );
}

export default AsideLogin;
