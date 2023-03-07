import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  getAllContacts,
  addContact,
  deleteContact,
} from 'shared/services/contacts-api';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const data = await getAllContacts();
      return data;
    } catch ({ response }) {
      return thunkAPI.rejectWithValue(response.data);
    }
  }
);

export const fetchAddContact = createAsyncThunk(
  'contacts/addContact',
  async (data, thunkAPI) => {
    try {
      const result = await addContact(data);
      return result;
    } catch ({ response }) {
      return thunkAPI.rejectWithValue(response.data);
    }
  },
  {
    condition: (data, { getState }) => {
      const { contacts } = getState();
      const isContainsContact = contacts.items.some(
        ({ name }) => name.toLowerCase() === data.name.toLowerCase()
      );

      if (isContainsContact) {
        alert(`${data.name} is already in contacts`);
        return false;
      }
    },
  }
);

export const fetchDeleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      await deleteContact(id);
      return id;
    } catch ({ response }) {
      return thunkAPI.rejectWithValue(response.data);
    }
  }
);

// export const fetchAllContacts = () => {
//   const func = async dispatch => {
//     try {
//       dispatch(fetchAllContactsLoading());
//       const data = await getAllContacts();
//       dispatch(fetchAllContactsSuccess(data));
//     } catch ({ response }) {
//       dispatch(fetchAllContactsError(response.data.message));
//     }
//   };
//   return func;
// };

// export const fetchAddContact = data => {
//   const func = async (dispatch, getState) => {
//     try {
//       const { contacts } = getState();
//       const isContainsContact = contacts.items.some(
//         ({ name }) => name.toLowerCase() === data.name.toLowerCase()
//       );

//       if (isContainsContact) {
//         alert(`${data.name} is already in contacts`);
//         return false;
//       }

//       dispatch(fetchAddContactLoading());
//       const result = await addContact(data);
//       dispatch(fetchAddContactSuccess(result));
//     } catch ({ response }) {
//       dispatch(fetchAddContactError(response.data.message));
//     }
//   };
//   return func;
// };

// export const fetchDeleteContact = id => {
//   const func = async dispatch => {
//     try {
//       dispatch(fetchDeleteContactLoading());
//       await deleteContact(id);
//       dispatch(fetchDeleteContactSuccess(id));
//     } catch ({ response }) {
//       dispatch(fetchDeleteContactError(response.data.message));
//     }
//   };
//   return func;
// };
