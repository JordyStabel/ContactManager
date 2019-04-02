import {
  GET_CONTACTS,
  DELETE_CONTACT,
  ADD_CONTACT,
  GET_CONTACT,
  UPDATE_CONTACT
} from "../actions/types";

const initalState = {
  contacts: [], // All contacts
  contact: {} // Current contact
};

export default function(state = initalState, action) {
  switch (action.type) {
    case GET_CONTACTS: // Multiple contacts
      return {
        ...state,
        contacts: action.payload
      };
    case GET_CONTACT: // Single contact
      return {
        ...state,
        contact: action.payload
      };
    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [action.payload, ...state.contacts]
      };
    case UPDATE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.map(contact =>
          contact.id === action.payload.id
            ? (contact = action.payload)
            : contact
        )
      };
    default:
      return state;
  }
}
