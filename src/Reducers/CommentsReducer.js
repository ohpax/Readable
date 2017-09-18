import _ from 'lodash'
import {
    GET_COMMENTS,
    CREATE_COMMENT,
    DELETE_COMMENT,
    EDIT_COMMENT,
    UP_VOTE_COMMENT,
    DOWN_VOTE_COMMENT
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
        case EDIT_COMMENT:
        tempState = _.map(state,(comment) => {
                if (comment.id === action.comment.id) {
                    comment = action.comment;                  }
                return comment;
            })
            tempState = {
                ..._.mapKeys(tempState, 'id')
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
            case UP_VOTE_COMMENT: 
            return {
                ...state,
                ..._.mapKeys(state, (value, key) => {
                    if (key === action.commentId) {
                        value.voteScore++
                    }
                    return key;
                })
            }

        case DOWN_VOTE_COMMENT: 
        return {
            ...state,
            ..._.mapKeys(state, (value, key) => {
                if (key === action.commentId) {
                    value.voteScore--
                }
                return key;
            })
        }
        default:
            return state;
    }
}

export default CommentsReducer;