import React from 'react';
import { render } from '@testing-library/react-native';
import Profile from '../Profile';

describe('Profile screen', () => {
  it('renders profile information correctly', () => {
    const route = {
      params: {
        firstName: 'John',
        lastName: 'Doe',
        name: 'John Doe',
        phoneNumber: '+1234567890',
      },
    };
    const { getByText } = render(<Profile route={route} />);
    
    // Check if profile information is rendered correctly
    expect(getByText('John')).toBeTruthy();
    expect(getByText('Doe')).toBeTruthy();
    expect(getByText('John Doe')).toBeTruthy();
    expect(getByText('+1234567890')).toBeTruthy();
  });

  it('renders call buttons', () => {
    const { getByLabelText } = render(<Profile />);
    
    // Check if call buttons are rendered
    expect(getByLabelText('phone-alt')).toBeTruthy(); // Check for phone call button
    expect(getByLabelText('message1')).toBeTruthy(); // Check for message button
    expect(getByLabelText('video-account')).toBeTruthy(); // Check for video call button
  });

  it('renders call logs', () => {
    const { getByText } = render(<Profile />);
    
    // Check if call logs are rendered
    expect(getByText('Call logs')).toBeTruthy();
    expect(getByText('Incoming Call')).toBeTruthy();
    expect(getByText('Missed Call')).toBeTruthy();
    // Add more assertions for call logs as needed
  });
});
