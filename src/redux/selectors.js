// import { createSelector } from "@reduxjs/toolkit";

export const selectUserLoading = state => state.auth.isLoading;
export const selectUserError = state => state.auth.error;
export const selectToken = state => state.auth.token;
export const selectUserData = state => state.auth.userData;
export const selectAuthentificated = state => state.auth.authentificated;


export const selectUserContacts = state => state.contacts.contacts;
export const selectContactsLoading = state => state.contacts.isLoading;
export const selectContactError = state => state.contacts.error;

export const selectFilter = state => state.filter;

// export const selectFilteredContacts = createSelector(
//     [selectUserContacts, selectFilter],
//     (contacts, filter) => {
//         const formattedFilter = filter.toLowerCase();
//         return contacts.length > 0
//         ? (contacts.filter(contact => contact.name.toLowerCase().includes(formattedFilter)))
//         : [];
//     }
// )
