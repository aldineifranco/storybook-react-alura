import React from 'react';
import styled from 'styled-components';
import { ReactNode } from 'react';

export interface CardProps {
  children: ReactNode;
}

const CardRoot = styled.div`
  position: absolute;
  width: 551px;
  height: 374px;
  padding: 48px 32px 48px 48px;
  gap: 16px;
  background-color: #fff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
`;

export const AbCard = ({ children }: CardProps) => {
  return <CardRoot>{children}</CardRoot>;
};
