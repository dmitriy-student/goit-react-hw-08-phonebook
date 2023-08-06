import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.data;

export const selectFilter = state => state.filter.value;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

export const selectFiltredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) =>
    contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    )
);
