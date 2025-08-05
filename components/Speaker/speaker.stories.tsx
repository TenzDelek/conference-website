import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import Speaker from './speaker';
import { Speaker as SpeakerType } from '../../types/types';

const meta: Meta<typeof Speaker> = {
  title: 'Components/Speaker',
  component: Speaker,
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '320px' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Speaker>;

const sampleSpeaker: SpeakerType = {
  name: 'Ankit Dash',
  title: 'Senior Developer Advocate at AsyncAPI',
  img: '/img/speaker-images/london/Ankit.webp',
  id: 1,
  city: ['London'],
};

export const SpeakerCard: Story = {
  args: {
    details: sampleSpeaker,
    location: 'London, UK',
  },
};
