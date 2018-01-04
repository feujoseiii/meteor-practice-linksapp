import { Meteor } from 'meteor/meteor';
import history from './history';

export default ensure = (type) => {
    if (type.toLowerCase() === 'public') {
        if (Meteor.userId()) {
            history.push('/links');
        }
    } else if (type.toLowerCase() === 'private') {
        if (!Meteor.userId()) {
            history.push('/');
        }
    } else {
        throw new Error('Invalid auth.ensure type');
    }
};