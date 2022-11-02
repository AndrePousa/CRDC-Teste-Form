import React, { useState } from 'react';
import { Title } from '../../Pages/Login/styles';
import { Proceed } from '../../Pages/RegistrationScreen/styles';
import { Link } from '../Login/Footer/styles';
import { Content, ModalArea, ModalBackground, PrivacyPolicyHead } from './styles';
import {useHistory} from 'react-router-dom';
import RegistrationSuccess from './RegistrationSuccess';


function Terms(props){

  let history = useHistory()
  console.log(props)

  const handleBack = () => {
    history.goBack();
  }

  const [modalVisibleSuccess, setModalVisibleSuccess] = useState(false);

  const handleModalAreaClose = () =>{
    props.setVisibleTerms(false);
    setModalVisibleSuccess(true);
  }

  return(
    <>
      {props.visibleTerms === true && 
      <ModalBackground>
        <ModalArea>
          <PrivacyPolicyHead>
            <Title style={{marginTop:"0"}}><strong>Termos de Uso</strong></Title>
          </PrivacyPolicyHead>
            <Content>
              <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form,
              by injected humour, or randomised words which don't look even slightly believable. 
              If you are going to use a passage of Lorem Ipsum,
              you need to be sure there isn't anything embarrassing hidden in the middle of text.
              All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary,
              making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words,
              combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.
              The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
              </p>
            </Content>
          <Proceed
            style={{
            backgroundColor:"#004e92",
            marginTop:"20px",
            marginLeft:"200px"
            
            }}
           onClick={handleModalAreaClose}>
            Aceitar e Finalizar Cadastro
          </Proceed>
          <Link
            onClick={handleBack}       
            style={{
            color:'#000',
            justifyContent:"center",
            marginTop:"10px",
            fontWeight:'bold',
            }}>Voltar</Link>

        </ModalArea>
      </ModalBackground>
      }
        <RegistrationSuccess
          visibleSuccess={modalVisibleSuccess}
          setVisibleSuccess={setModalVisibleSuccess}
        /> 
    </>
  )
}

export default Terms;