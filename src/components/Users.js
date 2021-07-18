import React, { Component } from 'react';
import { connect } from 'react-redux';



const mapStateToProps = (state) => {
  return { users: state.users };
};

class Users extends Component {

  createUsers = (users) => {
    return users.map(user => {
      // debugger
     return <li key={user.username}>{user.username}</li>
    });
  }


  render() {
    // debugger
    return (
      <div>
        <ul>
          Users!
          {this.createUsers(this.props.users)}
          
          {this.props.users.length}
        </ul>
      </div>
    )
  }
}



export default connect(mapStateToProps)(Users);
