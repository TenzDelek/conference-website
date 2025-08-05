import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import SelectDropdown from './select';
import { SelectOptions } from '../../types/types';

const meta: Meta<typeof SelectDropdown> = {
  title: 'Components/SelectDropdown',
  component: SelectDropdown,
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '320px' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof SelectDropdown>;

const options: SelectOptions[] = [
  { label: 'Option 1', value: 'option1' },
  { label: 'Option 2', value: 'option2' },
  { label: 'Option 3', value: 'option3' },
];

export const SelectCard: Story = {
  args: {
    options,
    setValue: () => {},
    multi: undefined,
    dataTest: 'select-dropdown',
  },
};