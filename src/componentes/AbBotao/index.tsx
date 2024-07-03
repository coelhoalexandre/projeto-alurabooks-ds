import React from 'react';
import styled from 'styled-components';

const BotaoEstilizado = styled.button`
  background: #eb9800;
  padding: 16px 32px;
  border: 2px solid #eb9800;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  &:hover {
    background: #b97900;
    border: 2px solid #b97900;
  }
`;

export const AbBotao = () => {
  return <BotaoEstilizado>Clique aqui!</BotaoEstilizado>;
};
