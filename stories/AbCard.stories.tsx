import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AbCard } from '../src/';

export default {
  title: 'componentes/AbCard',
  component: AbCard,
} as ComponentMeta<typeof AbCard>;

const Template: ComponentStory<typeof AbCard> = (args) => <AbCard {...args} />;

export const Card = Template.bind({});

Card.args = { children: 'Seu cartão!' };
