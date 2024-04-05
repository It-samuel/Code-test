// AddContacts.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import AddContacts from './AddContacts';
import configureStore from 'redux-mock-store';

const mockStore = configureStore([]);

describe('AddContacts', () => {
  let store;

  beforeEach(() => {
    store = mockStore({});
  });

  test('renders correctly', () => {
    const { getByPlaceholderText, getByText } = render(
      <Provider store={store}>
        <AddContacts />
      </Provider>
    );

    expect(getByPlaceholderText('Name')).toBeDefined();
    expect(getByPlaceholderText('+233-5628-773-434')).toBeDefined();
    expect(getByText('New Contact')).toBeDefined();
    expect(getByText('Cancel')).toBeDefined();
    expect(getByText('Save')).toBeDefined();
  });

  test('inputs update correctly', () => {
    const { getByPlaceholderText } = render(
      <Provider store={store}>
        <AddContacts />
      </Provider>
    );

    const nameInput = getByPlaceholderText('Name');
    const phoneNumberInput = getByPlaceholderText('+233-5628-773-434');

    fireEvent.changeText(nameInput, 'John Doe');
    fireEvent.changeText(phoneNumberInput, '1234567890');

    expect(nameInput.props.value).toBe('John Doe');
    expect(phoneNumberInput.props.value).toBe('1234567890');
  });

  test('cancel button navigates back to ContactScreen', () => {
    const mockNavigation = { navigate: jest.fn() };

    const { getByText } = render(
      <Provider store={store}>
        <AddContacts navigation={mockNavigation} />
      </Provider>
    );

    fireEvent.press(getByText('Cancel'));

    expect(mockNavigation.navigate).toHaveBeenCalledWith('ContactScreen');
  });

  
});
