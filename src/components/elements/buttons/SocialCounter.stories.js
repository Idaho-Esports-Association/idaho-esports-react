import React from 'react';
import SocialCounter from './SocialCounter'; // Adjust the import path based on your project structure

export default {
  title: 'SocialCounter',
  component: SocialCounter,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
};

// Story for each social media type
export const Facebook = () => <SocialCounter />;
