
import React, { useState } from 'react';
import { Title } from '../../Pages/Login/styles';
import { Proceed } from '../../Pages/RegistrationScreen/styles';
import { Link } from '../Login/Footer/styles';
import { Content, ModalArea, ModalBackground, PrivacyPolicyHead } from './styles';
import {useHistory} from 'react-router-dom';
import Terms from './Terms';

function PrivacyPolicy(props){

  let history = useHistory()

  const handleBack = () => {
    history.goBack( );
  }

  const [modalVisibleTerms, setModalVisibleTerms] = useState(false);

  const handleModalAreaClose = () =>{
    props.setVisible(false);
    setModalVisibleTerms(true);
  }

  return(
    <>
      {props.visible === true && 
      <ModalBackground>
        <ModalArea>
          <PrivacyPolicyHead>
            <Title style={{marginTop:"0"}}><strong>Política de privacidade</strong></Title>
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
            onClick = {handleModalAreaClose}>
            Li e Aceito
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
       <Terms
         visibleTerms={modalVisibleTerms}
         setVisibleTerms={setModalVisibleTerms}
        /> 
    </>
  )
}

export default PrivacyPolicy;