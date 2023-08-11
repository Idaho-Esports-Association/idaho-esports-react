import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

const meta: Meta<typeof Button> = {
  title: 'Buttons',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],

};

export default meta;


export const Primary = {
  args: {
  ButtonSize: "md",
  ButtonType: "primary",
  ButtonLink: "https://www.google.com",
  ButtonText: "Primary Button",
  ButtonIcon: "fas fa-arrow-right",
  ButtonIconSpot: "right",
  TargetType: "_blank",
  },
};