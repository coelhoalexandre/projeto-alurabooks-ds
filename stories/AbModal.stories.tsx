import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AbModal, AbModalProps } from '../src';

export default {
  title: 'componentes/AbModal',
  component: AbModal,
} as ComponentMeta<typeof AbModal>;

const Template: ComponentStory<typeof AbModal> = (args) => (
  <AbModal {...args} />
);

export const AbModalComponent = Template.bind({});

AbModalComponent.args = {
  children: <></>,
  titulo: 'Titulo da Modal',
  aberta: true,
  aoFechar: () => console.log(false),
} as AbModalProps;
