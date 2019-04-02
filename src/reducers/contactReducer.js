import { GET_CONTACTS } from "../actions/types";

const initalState = {
  contacts: [
    {
      id: 1,
      name: "Jordy Stabèl",
      email: "Jordy.Stabel@hotmail.com",
      phone: "555-555-5555"
    },
    {
      id: 2,
      name: "Henk",
      email: "henk@gmail.com",
      phone: "444-444-4444"
    },
    {
      id: 3,
      name: "Jeroen",
      email: "JeroenNietDoen@gmail.com",
      phone: "333-333-333"
    }
  ]
};

export default function(state = initalState, action) {
  switch (action.type) {
    case GET_CONTACTS:
      return {
        ...state
      };
    default:
      return state;
  }
}
