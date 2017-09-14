import _ from 'lodash'
import {
    GET_COMMENTS
} from '../Actions'


function CommentsReducer(state={}, action){
    
        switch(action.type){
            case GET_COMMENTS :
                return {
                    ...state,
                   ..._.mapKeys(action.comments, 'id')
                }
            default:
                return state;
        }
    }
    
    export default CommentsReducer;