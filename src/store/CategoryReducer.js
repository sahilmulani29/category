const INITIAL_STATE = {
    category : []
}
function categoryReducer (state=INITIAL_STATE , action){
    switch(action.type){
        case 'SET_CATEGORY' : {
            return {...state , category : action.data}
        }
        default : 
            return state;
    }
}

export default categoryReducer;