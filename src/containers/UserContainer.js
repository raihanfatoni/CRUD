import React, { Component } from "react";
import UsersComponent from "../components/UsersComponent";
import { connect } from "react-redux";
import { getUsersList, deleteDataUser } from '../actions/userAction'

class UserContainer extends Component {
  componentDidMount() {
    this.props.dispatch(getUsersList());
    // this.props.dispatch(deleteDataUser());
  }

  render() {
    
    return (
      <div>
        <UsersComponent />
      </div>
    );
  }
}

export default connect()(UserContainer);
