import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import Venue from './venue';
import { City } from '../../types/types';

const meta: Meta<typeof Venue> = {
  title: 'Components/Venue',
  component: Venue,
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '320px' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Venue>;

const defaultCity: City = {
  name: 'Paris',
  country: 'France',
  date: '2025-06-10',
  cfpDate: '2025-05-01',
  description: 'A beautiful city for the conference.',
  img: '/img/locations/paris.webp',
  address: '123 Paris St, Paris, France',
  mapUrl: 'https://maps.google.com',
  sponsors: {
    eventSponsors: [
      {
        image: '/img/logos/asyncapi-logo--white.png',
        websiteUrl: 'https://asyncapi.com',
      },
    ],
  },
  freeEntry: true,
  cfp: 'https://cfp.asyncapi.com',
  recordings: null,
  playlist: null,
};

export const VenueCard: Story = {
  args: {
    city: defaultCity,
  },
};
