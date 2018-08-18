import {RECEIVE_USERS} from '../actions/users';
import {ADD_POLL} from '../actions/polls'
import {ADD_ANSWER} from '../actions/answers'

export default function users (state = {}, action ) {
    switch(action.type) {
        case RECEIVE_USERS:
            return {
                ...state,
                ...action.users,
            }
        case ADD_POLL:
            const poll = action.poll
            const {author, id} = poll 
            return {
                ...state, 
                [author]: {
                    ...state[author],
                    polls: state[author].polls.concat([id])
                }
                //Michael M. mentioned this today in the one on one.. 8-17-18
                //the code spreads in the state except for the author
                //  it spreads in the properties of the author except for the polls in which it wants to change. 
            }
        case ADD_ANSWER :
            const user = state[action.authedUser]

            return {
                ...state,
                [action.authedUser]: {
                    ...user,
                    answers: user.answers.concat([user])
                }
            }
        default: 
            return state
    }
}