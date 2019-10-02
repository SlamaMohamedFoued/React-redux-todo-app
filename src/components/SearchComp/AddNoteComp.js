import React, { Component } from "react";
import { connect } from "react-redux";
import { addNote } from "../../js/actions/noteActions";

class AddNoteComp extends Component {
  state = { note: "" };

  handleChange = e => {
    this.setState({ note: e.target.value });
  };

  addItem = () => {
    this.props.addNewNote({ ...this.state, id: Math.random() });
    this.setState({
      note: ""
    });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Type note here..."
          onChange={this.handleChange}
          value={this.state.note}
        />
        <button onClick={this.addItem}>Add</button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addNewNote: newNote => dispatch(addNote(newNote))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(AddNoteComp);
