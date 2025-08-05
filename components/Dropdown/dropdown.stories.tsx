import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import Dropdown from './dropdown';
import { City } from '../../types/types';

const meta: Meta<typeof Dropdown> = {
  title: 'Components/Dropdown',
  component: Dropdown,
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '400px', height: '100vh' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Dropdown>;

const mockCities: City[] = [
  {
    name: 'London',
    country: 'UK',
    date: '2024-10-01',
    cfpDate: '2024-08-01',
    description: 'London event',
    img: '',
    address: '123 London St',
    mapUrl: '',
    sponsors: { eventSponsors: [] },
    freeEntry: true,
    cfp: null,
    recordings: null,
    playlist: null,
  },
  {
    name: 'Paris',
    country: 'France',
    date: '2024-11-01',
    cfpDate: '2024-09-01',
    description: 'Paris event',
    img: '',
    address: '456 Paris Ave',
    mapUrl: '',
    sponsors: { eventSponsors: [] },
    freeEntry: false,
    cfp: null,
    recordings: null,
    playlist: null,
  },
  {
    name: 'Munich',
    country: 'Germany',
    date: '2024-12-01',
    cfpDate: '2024-10-01',
    description: 'Munich event',
    img: '',
    address: '789 Munich Rd',
    mapUrl: '',
    sponsors: { eventSponsors: [] },
    freeEntry: true,
    cfp: null,
    recordings: null,
    playlist: null,
  },
];

export const DropdownCard: Story = {
  args: {
    city: mockCities[0],
    cities: mockCities,
    setCity: () => {},
    handleSpeakers: (cityName: string) => alert(`Speakers for ${cityName} selected!`),
  },
};