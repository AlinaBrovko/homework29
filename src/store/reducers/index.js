import {
  ACTION_FETCH_CONTACTS,
  ACTION_ADD_CONTACT,
  ACTION_REMOVE_CONTACT,
} from "../actions/contacts";

const initialState = {
  contacts: [],
};
const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ACTION_FETCH_CONTACTS:
      return { ...state, contacts: payload };
    case ACTION_ADD_CONTACT:
      return { ...state, contacts: [...state.contacts, payload] };
    case ACTION_REMOVE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter((item) => {
          return item.id !== payload;
        }),
      };
    default:
      return state;
  }
};

export default rootReducer;
