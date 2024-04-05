// actions.js

import * as types from './actionTypes';

export const fetchContactsRequest = () => ({
  type: types.FETCH_CONTACTS_REQUEST,
});

export const fetchContactsSuccess = (contacts) => ({
  type: types.FETCH_CONTACTS_SUCCESS,
  payload: contacts,
});

export const fetchContactsFailure = (error) => ({
  type: types.FETCH_CONTACTS_FAILURE,
  payload: error,
});

export const addContact = (contact) => ({
  type: types.ADD_CONTACT,
  payload: contact,
});

export const deleteContact = (contactId) => ({
  type: types.DELETE_CONTACT,
  payload: contactId,
});
