import { ADD_NOTE, EDIT_NOTE, REMOVE_NOTE } from "../actions/actionsTypes";
var initialState = [
  {
    id: 1,
    note: "learn redux"
  }
];

const NoteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NOTE:
      return [...state, action.newNote];
    case REMOVE_NOTE:
      return state.filter(el => el.id !== action.id);
    case EDIT_NOTE:
      return state.map(el =>
        el.id === action.updatedNote.id ? action.updatedNote : el
      );
    default:
      return state;
  }
};

export default NoteReducer;
