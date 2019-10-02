import { ADD_NOTE, EDIT_NOTE, REMOVE_NOTE } from "./actionsTypes";

export const addNote = newNote => {
  return {
    type: ADD_NOTE,
    newNote
  };
};

export const deleteNote = id => {
  return {
    type: REMOVE_NOTE,
    id
  };
};

export const updateNote = updatedNote => {
  return {
    type: EDIT_NOTE,
    updatedNote: {
      note: prompt("Please enter your note:", updatedNote.note),
      id: updatedNote.id
    }
  };
};
