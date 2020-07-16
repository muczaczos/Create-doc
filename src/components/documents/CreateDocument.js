import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createDocument } from '../../store/actions/documentActions';
import { Redirect } from 'react-router-dom';

export class CreateDocument extends Component {
  state = {
    title: '',
    content: '',
  };

  handleChange = (e) => {
    this.setState({
      //whatever target element will change, we update the value
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    //console.log(this.state);
    this.props.createDocument(this.state);
    this.props.history.push('/');
  };

  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to="/signin" />;

    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Create new document</h5>
          <div className="input-field">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="content">Project document</label>
            <textarea
              id="content"
              className="materialize-textarea"
              onChange={this.handleChange}
            ></textarea>
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Create</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createDocument: (doc) => dispatch(createDocument(doc)),
  };
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    documents: state.firestore.ordered.documents,
    auth: state.firebase.auth,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateDocument);
