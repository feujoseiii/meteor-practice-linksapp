import React from 'react';
import { Link } from 'react-router-dom';
import ensure from '../util/auth';

export default class Homepage extends React.Component {

    componentWillMount() {
        ensure('public');
    }

    render() {
        return (
            <div>
                <h1>Homepage</h1>
                <Link to='/login'>Login</Link>
                <Link to='/signup'>Signup</Link>
            </div>
        );
    }

}