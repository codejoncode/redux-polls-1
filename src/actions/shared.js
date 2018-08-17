import {getInitialData} from '../utils/api'
import {receiveUsers} from '../actions/users'
import {recievePolls} from '../actions/polls'
import {setAuthedUser} from '../actions/authedUser'
import {showLoading, hideLoading} from 'react-redux-loading'

const AUTHED_ID = 'dan_abramov';
const ERROR = 'ERROR'; 

export function handleInitialData() {
    return (dispatch) => {
        dispatch(showLoading())
        return getInitialData() 
        .then(({users,polls}) => {
            dispatch(receiveUsers(users))
            dispatch(recievePolls(polls))
            dispatch(setAuthedUser(AUTHED_ID))
            dispatch(hideLoading())
        })
        .catch(error => {
            dispatch({type: ERROR});
            dispatch(hideLoading())
        })
    }
}