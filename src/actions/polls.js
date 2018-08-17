export const RECEIVE_POLLS = 'RECEIVE_POLLS'

export function recievePolls (polls) {
    return {
        type: RECEIVE_POLLS, 
        polls, 

    }
}