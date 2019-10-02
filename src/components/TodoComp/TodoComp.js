import React from "react";
import "./TodoComp.css";
import { connect } from "react-redux";
import AddNoteComp from "../SearchComp/AddNoteComp";
import NoteComp from "../NoteComp/NoteComp";

const TodoComp = ({ notes }) => {
  return (
    <div className="">
      <h2>To Do App </h2>
      <AddNoteComp />
      <div className="">
        <ul>
          {notes.map((item, i) => (
            <div key={i}>
              <NoteComp item={item} />
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    notes: state.NoteReducer
  };
};

export default connect(mapStateToProps)(TodoComp);
