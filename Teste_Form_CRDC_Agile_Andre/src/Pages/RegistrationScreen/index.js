import React,{useState} from 'react';
import { 
  Container, Form, CRDCBrand, RowAround, Link,ContainerSignInDesc,
  Column, VerticalLine, InitialRegistration, RegistrationText, Label, 
  Input, Row, Proceed, BasicData, Head, SpanRed, DadosBasicos } from './styles';
import CRDCBrandImage from "../../assets/logos/crdc_lg.png";
import { useHistory } from 'react-router-dom';
import FinalRegistration from './FinalRegistration';


function RegistrationScreen () {

  const [free, setFree] = useState(false);

  const [finalRegistration, setFinalRegistration] = useState(false);

  const [free1, setFree1] = useState(false);

  let history = useHistory();

  const handleFinalRegistration = () => {
   // history.push('/FinalRegistration');
   setFinalRegistration(true);
  };

  const handleLogin = () => {
    history.push('/')
  };

  const handleFree = () =>{
    setFree(!free)
    console.log(free)
  }

  return (
    <>
      <Container>
        <CRDCBrand src={CRDCBrandImage}/>
        <Form>
          <Column  style={finalRegistration ? {opacity:0.3} : {}}>
            {finalRegistration ?
             <>
              <InitialRegistration>
                Muito bem, <strong>e como deseja se cadastrar ?</strong>
              </InitialRegistration>
              <RegistrationText>
                  Et rerum dolorem aut voluptas dolores ab quisquam reiciendis. 
                  At tempora dolorum sit voluptas nisi aut nihil.
              </RegistrationText>
              </>
              : 
              <>
            <InitialRegistration>
              Vamos iniciar <strong>seu cadastro ?</strong>
            </InitialRegistration>
              <RegistrationText>
                Et rerum dolorem aut voluptas dolores ab quisquam reiciendis. 
                At tempora dolorum sit voluptas nisi aut nihil.
              </RegistrationText>
              </>
            }
                
              <Label>
                Digite o CNPJ da empresa <SpanRed>*</SpanRed>
              </Label>
                <Input  disabled={!free1 ? free : !free} placeholder="Digite aqui"/>

              <Row> 
                <Label>
                  Digite seu nome <SpanRed>*</SpanRed>
                </Label>             
                <Label>
                  Digite seu CPF <SpanRed>*</SpanRed>
                </Label> 
              </Row>
              <Row>
                <Input disabled={!free1 ? free : !free} placeholder="Digite aqui"/>
                <Input disabled={!free1 ? free : !free} placeholder="Digite aqui"/>
              </Row>
              <Label>
                Razão Social da empresa <SpanRed>*</SpanRed>
              </Label>
                <Input disabled={!free1 ? free : !free} placeholder="Digite aqui"/>

                {!free ? 
                <Proceed onClick={handleFree}>
                    Prosseguir
                </Proceed> 
                : ""}
          </Column>

          <VerticalLine/>

            {finalRegistration ? <> <FinalRegistration/> </> :  

          !free1 && (
          <Column  style={!free ? {opacity:0.3} : {}} >
          <Head>
            <BasicData className="circle">
              1
            </BasicData>

            <DadosBasicos>
              <strong>Dados Basicos</strong>
            </DadosBasicos>

            <DadosBasicos 
            style={{
              height:"3px",
              width:"80px",
              marginTop:"18px",
              marginRight:"10px",
              backgroundColor:"#aaaa"
            }}/>

            <BasicData 
            style={{
            opacity:0.5
            }}>
              2
            </BasicData>

            <DadosBasicos 
            style={{
            color:"#aaa",
            }}>
              <strong>Dados de Endereço</strong>
            </DadosBasicos>

          </Head>
            <Row> 
              <Label style={{marginTop:'20px'}}>
                Inscrição Estadual <SpanRed>*</SpanRed>
              </Label>             
              <Label style={{marginTop:'20px'}}>
                Inscrição Municipal <SpanRed>*</SpanRed>
              </Label> 
            </Row>
            <Row>
              <Input disabled={!free} placeholder="Digite aqui"/>
              <Input  disabled={!free} placeholder="Digite aqui"/>
            </Row>
            <Row> 
              <Label>
                E-mail <SpanRed>*</SpanRed>
              </Label>             
              <Label>
                Confirmação de E-mail <SpanRed>*</SpanRed>
              </Label> 
            </Row>
            <Row>
              <Input  disabled={!free} placeholder="Digite aqui"/>
              <Input  disabled={!free} placeholder="Digite aqui"/>
            </Row>
            <Row> 
              <Label>
                Telefone <SpanRed>*</SpanRed>
              </Label>             
              <Label>
                Celular <SpanRed>*</SpanRed>
              </Label> 
            </Row>
            <Row>
              <Input  disabled={!free} placeholder="Digite aqui"/>
              <Input  disabled={!free} placeholder="Digite aqui"/>
            </Row>
            <Row> 
              <Label>
                Digite uma senha <SpanRed>*</SpanRed>
              </Label>             
              <Label>
                Confirme sua senha <SpanRed>*</SpanRed>
              </Label> 
            </Row>
            <Row>
              <Input disabled={!free} placeholder="Digite aqui"/>
              <Input  disabled={!free} placeholder="Digite aqui"/>
            </Row>
            <Proceed
               style={{marginTop:'30px'}} 
               onClick={handleFinalRegistration} 
               disabled={!free}
               >
                  Prosseguir
              </Proceed> 
          </Column>
          )}
        </Form> 
        <RowAround>
          <ContainerSignInDesc>Já possui Cadastro?</ContainerSignInDesc>
          <Link onClick={handleLogin}>Logue em sua conta</Link>
        </RowAround>   
      </Container>
    </>
  )

}

export default RegistrationScreen;