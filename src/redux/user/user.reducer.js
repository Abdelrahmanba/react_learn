const INIT_STATE = {
    currentUser: null

}


const userReducer = (currState = INIT_STATE, action) => {
    switch (action.type) {
        case 'SET_CURRENT_USER':
            return{
             ...currState,
             currentUser: action.payload
            }
        default:
            return currState;
    }
}

export default userReducer;