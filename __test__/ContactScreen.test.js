// ContactScreen.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import ContactScreen from './ContactScreen';
import configureStore from 'redux-mock-store';

const mockStore = configureStore([]);

describe('ContactScreen', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      contacts: {
        contacts: [
          { id: 1, firstName: 'John', lastName: 'Doe', name: 'John Doe', phoneNumber: '1234567890' },
          { id: 2, firstName: 'Jane', lastName: 'Doe', name: 'Jane Doe', phoneNumber: '0987654321' }
        ],
        loading: false,
        error: null
      }
    });
  });

  test('renders loading message when loading', () => {
    store = mockStore({
      contacts: {
        contacts: [],
        loading: true,
        error: null
      }
    });

    const { getByText } = render(
      <Provider store={store}>
        <ContactScreen />
      </Provider>
    );

    expect(getByText('Loading...')).toBeDefined();
  });

  test('renders error message when there is an error', () => {
    store = mockStore({
      contacts: {
        contacts: [],
        loading: false,
        error: 'Error fetching contacts'
      }
    });

    const { getByText } = render(
      <Provider store={store}>
        <ContactScreen />
      </Provider>
    );

    expect(getByText('Error: Error fetching contacts')).toBeDefined();
  });

  test('renders contact details correctly', () => {
    const { getByText } = render(
      <Provider store={store}>
        <ContactScreen />
      </Provider>
    );

    expect(getByText('John')).toBeDefined();
    expect(getByText('Doe')).toBeDefined();
    expect(getByText('John Doe')).toBeDefined();
    expect(getByText('1234567890')).toBeDefined();
    expect(getByText('Jane')).toBeDefined();
    expect(getByText('Doe')).toBeDefined();
    expect(getByText('Jane Doe')).toBeDefined();
    expect(getByText('0987654321')).toBeDefined();
  });

  test('searches contacts correctly', () => {
    const { getByPlaceholderText, getByText } = render(
      <Provider store={store}>
        <ContactScreen />
      </Provider>
    );

    const searchInput = getByPlaceholderText('search for contact');
    fireEvent.changeText(searchInput, 'John');

    expect(getByText('John')).toBeDefined();
    expect(getByText('Doe')).toBeDefined();
    expect(getByText('John Doe')).toBeDefined();
    expect(getByText('1234567890')).toBeDefined();

    expect(queryByText('Jane')).toBeNull();
    expect(queryByText('Doe')).toBeNull();
    expect(queryByText('Jane Doe')).toBeNull();
    expect(queryByText('0987654321')).toBeNull();
  });
});
