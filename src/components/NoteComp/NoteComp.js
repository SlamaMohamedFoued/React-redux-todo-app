import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteNote, updateNote } from "../../js/actions/noteActions";
import { EDIT_NOTE } from "../../js/actions/actionsTypes";

class NoteComp extends Component {
  state = {
    note: this.props.item.note,
    id: this.props.item.id
  };

  edit = () => {
    this.props.editNote(this.state);
  };
  render() {
    const { item, deleteItem } = this.props;
    return (
      <div>
        <li>
          {item.note}
          {/*here we passed the deleteNote which is the props we got from "mapDispatchToProps" function , this will send the id of the item to delete
          to the reducer function */}
          <button onClick={() => deleteItem(item.id)}>delete</button>
          <input type="button" value="edit" onClick={this.edit} />
        </li>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    // the first "deleteNote" is a props we will pass to the NoteComp , the second one  is the one we have in our reducer
    deleteItem: id => dispatch(deleteNote(id)),
    editNote: updatedNote => dispatch(updateNote(updatedNote))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(NoteComp);
