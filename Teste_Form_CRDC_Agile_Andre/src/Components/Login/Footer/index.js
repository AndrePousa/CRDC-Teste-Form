import React from "react";
import { Column, Row, RowAround } from "../../../styles/flex";
import { Container, Link, Desc, Title } from "./styles";
import PhoneIcon from "../../../assets/icons/PhoneIcon.svg";

function Footer() {
  return (
    <Container>
      <Row style={{ alignItems: "flex-end" }}>
        <RowAround style={{ width: "40%" }}>
          <Link>Política de privacidade</Link>
          <Link>Termos de uso</Link>
        </RowAround>
        <Column style={{ width: "60%", alignItems: "center" }}>
          <Title>PROBLEMAS COM ACESSO?</Title>
          <Desc>Entre em contato com a central de atendimento</Desc>
          <RowAround
            style={{ width: "100%", alignItems: "center", marginTop: 15 }}
          >
            <Link style={{ color: "#555" }} href="tel:62999999999">
              <img
                alt=""
                src={PhoneIcon}
                style={{ wid: 15, height: 15, marginRight: 15 }}
              />
              (xx) xxxx-xxxx
            </Link>
            <Link style={{ color: "#555" }} href="malito:suport@email.com.br">
              <img
                alt=""
                src={PhoneIcon}
                style={{ wid: 15, height: 15, marginRight: 15 }}
              />
              suporte@email.com.br
            </Link>
          </RowAround>
        </Column>
      </Row>
    </Container>
  );
}

export default Footer;
