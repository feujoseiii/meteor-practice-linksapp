import React from 'react';
import { Meteor } from 'meteor/meteor';
import ensure from '../util/auth';
import history from '../util/history';

export default class Login extends React.Component {

    constructor(props) {
      super(props);

      this.onSubmit = this.onSubmit.bind(this);

      this.state = {
        error: ''
      };

    }

    componentWillMount() {
      ensure('public');
    }

    onSubmit(e) {
      e.preventDefault();
      let email = this.refs.email.value;
      let password = this.refs.password.value;

      Meteor.loginWithPassword({email}, password, (err) => {
        if (err) {
          this.setState({error: err.reason});
        } else {
          this.setState({});
          history.push('/links');
        }
      });

    }

    render() {
      return (
        <div>
          <h1>Login</h1>
          <form onSubmit={this.onSubmit}>
            { this.state.error ? <p>{this.state.error}</p> : undefined }
            <input type="email" ref="email" name="email" placeholder="enter email" />
            <input type="password" ref="password" name="email" placeholder="enter password" />
            <button type="submit">Login</button>
          </form>
        </div>
      );
    }

}