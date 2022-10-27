import React from 'react';
import styled, { css } from 'styled-components';

export interface AbBotaoProps {
  texto?: string;
  tipo?: 'primario' | 'secundario';
  onClick?: () => void;
}

const BotaoEstilizado = styled.button<AbBotaoProps>`
  background: ${(props: AbBotaoProps) =>
    props.tipo === 'primario' ? '#eb9b00' : '#FFF'};
  padding: 16px 32px;
  border: 2px solid #eb9b00;
  color: ${(props: AbBotaoProps) =>
    props.tipo === 'primario' ? '#FFF' : '#eb9b00'};
  font-size: 20px;
  cursor: pointer;

  ${(props: AbBotaoProps) =>
    props.tipo === 'primario'
      ? css`
          &:hover {
            background-color: #bb7900;
            border: 2px solid #bb7900;
          }
        `
      : css`
          &:hover {
            background-color: #fff;
            border: 2px solid #bb7900;
            color: #bb7900;
          }
        `}
`;

export const AbBotao = ({
  texto,
  onClick,
  tipo = 'primario',
}: AbBotaoProps) => {
  return (
    <BotaoEstilizado onClick={onClick} tipo={tipo}>
      {texto}
    </BotaoEstilizado>
  );
};
