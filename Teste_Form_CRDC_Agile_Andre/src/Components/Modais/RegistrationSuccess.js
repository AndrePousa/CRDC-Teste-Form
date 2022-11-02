
import React, { useState } from 'react';
import { Title } from '../../Pages/Login/styles';
import { Input, Label, Proceed, RegistrationText, Row } from '../../Pages/RegistrationScreen/styles';
import { Link } from '../Login/Footer/styles';
import { Content, ModalArea, ModalBackground, PrivacyPolicyHead, Select } from './styles';
import {useHistory} from 'react-router-dom';

function RegistrationSuccess (props){

  let history = useHistory()

  const handleBack = () => {
    history.goBack( );
  }

  const handleModalAreaClose = () =>{
    props.setVisibleSuccess(false);
  }

  return(
    <>
      {props.visibleSuccess === true && 
      <ModalBackground>
        <ModalArea style={{height:"650px", width:"580px"}}>
          <PrivacyPolicyHead style={{backgroundColor:"#77dd77",border:"none"}}>
            <Title style={{marginTop:"0",color:"#ffff"}}><strong>Parabéns Rodrigo</strong>,
             seu cadastro foi realizado com sucesso</Title>
          </PrivacyPolicyHead>
            <Content style={{height:"400px"}}>
              <RegistrationText style={{textAlign:"center",padding:"5px"}}>
                 Para começar a utilizar o sistema 
                 você precisa cadastrar um<strong> usuário master.</strong>
              </RegistrationText>

              <RegistrationText style={{textAlign:"center",padding:"5px",marginTop:"5px"}}>
                O usuário Master será o usuário principal da sua empresa,
                podendo gerenciar usuários, perfis de acesso e criar Worflows.
              </RegistrationText>

              <Row> 
                <Label>
                  Nome Completo *
                </Label>             
                <Label>
                  E-mail *
                </Label> 
              </Row>
              <Row>
                <Input placeholder="Digite aqui"/>
                <Input placeholder="Digite aqui"/>
              </Row>
              <Label>
                Perfil de usuário *
              </Label>
                <Select type='text' placeholder="Digite aqui"/>
            </Content>
          <Proceed
           style={{
            backgroundColor:"#004e92",
            marginTop:"20px",
            marginLeft:"200px"
            }}
            onClick = {handleModalAreaClose}>
            CADASTRAR MASTER
          </Proceed>
          <PrivacyPolicyHead style={{ 
            marginTop:"45px",
             height:"60px", 
             textAlign:"center", 
             backgroundColor:"#e5e4e2",
             color:"#48494d",
             }}>
           Dúvidas ? Acesse nosso FAQ
          </PrivacyPolicyHead>
        </ModalArea>
      </ModalBackground>
      }     
    </>
  )
}

export default RegistrationSuccess;