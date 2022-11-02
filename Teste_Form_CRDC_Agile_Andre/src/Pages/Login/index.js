import React, { useState } from "react";
import { Container, Form, RecoveryPasswordText, Title } from "./styles";
import { Column, Row, RowBetween } from "../../styles/flex";
import Input from "../../Components/Forms/Input";
import AsideLogin from "../../Components/Login/Aside";
import InputLoginUserIcon from "../../assets/icons/InputLoginUserIcon.svg";
import InputUserLoginUserPassword from "../../assets/icons/InputUserLoginUserPassword.svg";
import EMailIcon from "../../assets/icons/EMailIcon.svg";
import Button from "../../Components/Forms/Button";
import Footer from "../../Components/Login/Footer";

function Login() {
  const [isRecoveryPassword, setIsRecoveryPassword] = useState(false);
  return (
    <>
      <Row>
        <AsideLogin />
        <Container>
          <Column
            style={{
              width: "50%",
              transition: "all 0.5s",
              // marginTop: !isRecoveryPassword ? "0" : -10000000000,
              opacity: !isRecoveryPassword ? 1 : 0,
              zIndex: !isRecoveryPassword ? 10000000 : 0,
              position: "absolute",
              top: "auto",
              bottom: "auto",
              left: "auto",
              right: "auto",
              transitionDelay: 0,
            }}
          >
            <Title>
              Faça seu <strong>Login</strong>
            </Title>
            <Form>
              <Input
                name="username"
                type="text"
                placeholder="Insira seu usuário"
                icon={InputLoginUserIcon}
              />
              <Input
                name="password"
                type={"password"}
                placeholder="Insira sua senha"
                icon={InputUserLoginUserPassword}
                style={{ marginBottom: 0 }}
              />
              <RowBetween
                style={{
                  padding: "40px 0",
                  borderBottom: "1px solid #d7d7d7",
                  marginTop: -20,
                }}
              >
                <RecoveryPasswordText
                  onClick={() => setIsRecoveryPassword(!isRecoveryPassword)}
                >
                  Perdeu a senha?
                </RecoveryPasswordText>
                <Button text="LOGIN" styles={{ margin: 0 }} />
              </RowBetween>
            </Form>
          </Column>
          <Column
            style={{
              width: "50%",
              transition: "all 0.5s",
              // marginTop: !isRecoveryPassword ? "0" : -10000000000,
              opacity: isRecoveryPassword ? 1 : 0,
              zIndex: isRecoveryPassword ? 10000000 : 0,
              position: "absolute",
              top: "auto",
              bottom: "auto",
              left: "auto",
              right: "auto",
              transitionDelay: 0,
            }}
          >
            <Title>
              Recupere sua <strong>senha</strong>
            </Title>
            <Form>
              <Input
                name="username"
                type="email"
                placeholder="Insira seu e-mail"
                icon={EMailIcon}
              />
              <RowBetween
                style={{
                  padding: "40px 0",
                  borderBottom: "1px solid #d7d7d7",
                  marginTop: -20,
                }}
              >
                <RecoveryPasswordText
                  onClick={() => setIsRecoveryPassword(!isRecoveryPassword)}
                >
                  Fazer Login
                </RecoveryPasswordText>
                <Button text="RECUPERAR" styles={{ margin: 0 }} />
              </RowBetween>
            </Form>
          </Column>
        </Container>
      </Row>
      <Footer />
    </>
  );
}

export default Login;
