import React from 'react';
import { Accounts } from 'meteor/accounts-base';

export default class Signup extends React.Component {
  
    constructor(props) {
      super(props);

      this.onSubmit = this.onSubmit.bind(this);

      this.state = { 
        error: ''
      };
    }

    onSubmit(e) {
      e.preventDefault();
      
      let email = this.refs.email.value.trim();
      let password = this.refs.password.value.trim();

      Accounts.createUser({email, password}, (err) => {
        if (err) {
          this.setState({error: err.reason});
        } else {
          this.setState({});
          history.push('/login');
        }
      });

    }
  

    render() {
      return (
        <div>
          <h1>Signup</h1>
          <form onSubmit={this.onSubmit}>
            {this.state.error ? <p>{this.state.error}</p> : undefined }
            <input type="text" ref="email" name="email" placeholder="Enter email" />
            <input type="password" ref="password" name="password" placeholder="Enter password" />
            <button type="submit">Signup</button>
          </form>
        </div>
      );
    }


}