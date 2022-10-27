import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AbBotao, AbBotaoProps } from '../src';

export default {
  title: 'Componentes/AbBotao',
  component: AbBotao,
} as ComponentMeta<typeof AbBotao>;

const Template: ComponentStory<typeof AbBotao> = args => <AbBotao {...args} />;

export const Primario = Template.bind({});

Primario.args = {
  texto: 'Clique para Enviar',
  tipo: 'primario',
} as AbBotaoProps;

export const Secundario = Template.bind({});

Secundario.args = {
  texto: 'Ab Botão Primário',
  tipo: 'secundario',
} as AbBotaoProps;
