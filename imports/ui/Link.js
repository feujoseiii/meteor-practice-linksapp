import React from 'react';
import { Accounts } from 'meteor/accounts-base';
import ensure from '../util/auth';

export default class Link extends React.Component {
    constructor(props) {
        super(props);

        this.logoutOnClick = this.logoutOnClick.bind(this);
    }

    componentWillMount() {
        ensure('private');
    }

    logoutOnClick (e) {
        e.preventDefault();
        Accounts.logout();
    }

    render() {
        return (
            <div>
                Links page
                <button onClick={this.logoutOnClick}>Logout</button>
            </div>
        );
    }

}