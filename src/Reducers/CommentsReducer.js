import _ from 'lodash'
import {
    GET_COMMENTS,
    CREATE_COMMENT,
    DELETE_COMMENT
} from '../Actions'


function CommentsReducer(state = {}, action) {
    let tempState = {}
    switch (action.type) {
        case GET_COMMENTS:
            tempState = _.sortBy(action.comments, 'timestamp').reverse() 
            tempState = {
                ..._.mapKeys(tempState, 'id')
            }
            return tempState
        case CREATE_COMMENT:
            tempState = {
                [action.comment.id]: action.comment,
                ...state
                
            } 
            return tempState
        case DELETE_COMMENT:
            tempState =  _.sortBy(state, 'timestamp').reverse()
            tempState = _.map(tempState,(comment) => {
                    if (comment.id === action.commentId) {
                        comment.deleted = true;                  }
                    return comment;
                })
                tempState = {
                    ..._.mapKeys(tempState, 'id')
                }
            return tempState
           
        default:
            return state;
    }
}

export default CommentsReducer;