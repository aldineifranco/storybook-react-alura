import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { AbCard } from '../src/components/AbCard/index';

export default {
  title: 'Componentes/AbCard',
  component: AbCard,
} as ComponentMeta<typeof AbCard>;

export const AbCardComponent = () => {
  return (
    <AbCard>
      <h1>Olá, eu sou um card</h1>
    </AbCard>
  );
};
