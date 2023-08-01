import React from 'react';
import SocialCounter from './SocialCounter'; // Adjust the import path based on your project structure

export default {
  title: 'SocialCounter',
  component: SocialCounter,
};

// Story for each social media type
export const Facebook = () => <SocialCounter type="facebook" />;
export const Twitter = () => <SocialCounter type="twitter" />;
export const YouTube = () => <SocialCounter type="youtube" />;
export const Instagram = () => <SocialCounter type="instagram" />;
export const Twitch = () => <SocialCounter type="twitch" />;
export const RSS = () => <SocialCounter type="rss" />;
export const Error = () => <SocialCounter />;
