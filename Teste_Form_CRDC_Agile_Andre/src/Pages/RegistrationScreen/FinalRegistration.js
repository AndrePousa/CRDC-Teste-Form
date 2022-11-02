import React,{useState} from 'react';
import { BasicData, Column, Container, ContainerSignInDesc, CRDCBrand, DadosBasicos, Form, Head, InitialRegistration, Input, Label, Link, Proceed, RegistrationText, Row, RowAround, SpanRed, VerticalLine } from './styles';
import CRDCBrandImage from "../../assets/logos/crdc_lg.png";
import {useHistory} from 'react-router-dom';
import PrivacyPolicy from '../../Components/Modais/PrivacyPolicy';


function FinalRegistration () {

  let finalHistory = useHistory( );

  const HandleRegistrationScreen = () => {
    finalHistory.goBack( );
  };

  const [modalVisible, setModalVisible] = useState(false);

  const handleModal = () =>{
    setModalVisible(true);
  }

  return(
    <>
      <Column>
        <Head>
          <BasicData style={{opacity:0.5}}>
            1
          </BasicData>

          <DadosBasicos 
          style={{
            color:"#aaaa"
          }}>
          <strong>Dados Basicos</strong>
          </DadosBasicos>

          <DadosBasicos 
            style={{
              height:"3px",
              width:"80px",
              marginTop:"18px",
              marginRight:"10px",
              backgroundColor:"#aaaa",
            }}/>

          <BasicData>
            2
          </BasicData>

          <DadosBasicos>
            <strong>Dados de Endereço</strong>
          </DadosBasicos>
        </Head>
        
        <Label>
            Digite o Cep <SpanRed>*</SpanRed>
        </Label>
          <Input placeholder="Digite aqui"/>

        <Row> 
          <Label style={{width:"255px"}}>
            Número <SpanRed>*</SpanRed>
          </Label>             
          <Label>
            Complemento <SpanRed>*</SpanRed>
          </Label> 
        </Row>
        <Row>
          <Input style={{width:"150px"}} placeholder="Digite aqui"/>
          <Input  placeholder="Digite aqui"/>
        </Row>
        <Label style={{marginTop:"20px"}}>
          Av Itapevi-Moema, São Paulo - SP
        </Label>

        <Proceed onClick={handleModal}>
          Prosseguir
        </Proceed>

        <PrivacyPolicy
          visible={modalVisible}
          setVisible={setModalVisible}
          />
      </Column>
    </>
  )
}

export default FinalRegistration;