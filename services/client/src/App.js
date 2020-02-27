import React, { Component } from 'react';
import UsersList from './components/UsersList';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    this.getUsers();
  };

  getUsers() {
    axios.get(`${process.env.REACT_APP_USERS_SERVICE_URL}/users`)
    .then((res) => { this.setState({ users: res.data }); })
    .catch((err) => { console.log(err); });
  }

  render() {
    return (
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-one-third">
              <br/>
              <h1 className="title is-1">Users</h1>
              <hr/><br/>
              <UsersList users={this.state.users}/>
            </div>
          </div>
        </div>
      </section>
    )
  }
};

export default App;
