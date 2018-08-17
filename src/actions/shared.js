import {getInitialData} from '../utils/api'
import {receiveUsers} from '../actions/users'
import {recievePolls} from '../actions/polls'
import {setAuthedUser} from '../actions/authedUser'

const AUTHED_ID = 'dan_abramov';
const ERROR = 'ERROR'; 

export function handleInitialData() {
    return (dispatch) => {
        return getInitialData() 
        .then(({users,polls}) => {
            dispatch(receiveUsers(users))
            dispatch(recievePolls(polls))
            dispatch(setAuthedUser(AUTHED_ID))
        })
        .catch(error => {
            dispatch({type: ERROR});
        })
    }
}