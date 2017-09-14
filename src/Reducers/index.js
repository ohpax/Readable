import { combineReducers } from 'redux'
import { reducer as fromReducer } from 'redux-form'
import PostReducer from './PostsReducer'
import CommentsReducer from './CommentsReducer'

const rootReducer = combineReducers({
    posts: PostReducer,
    comments: CommentsReducer,
    form:fromReducer
})

export default rootReducer;
