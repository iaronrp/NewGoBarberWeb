import React from 'react';

import { Container, Content, Background } from './styles';

import LogoImg from '../../assets/logo.svg';

const Signin: React.FC = () => (
  <Container>
    <Content>
      <img src={LogoImg} alt="GoBarber" />
    </Content>
    <Background />
  </Container>
);

export default Signin;
