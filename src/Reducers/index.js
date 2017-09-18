import { combineReducers } from 'redux'
import { reducer as fromReducer } from 'redux-form'
import PostReducer from './PostsReducer'
import CommentsReducer from './CommentsReducer'
import CategoriesReducer from './CategoriesReducer'

const rootReducer = combineReducers({
    posts: PostReducer,
    comments: CommentsReducer,
    categories: CategoriesReducer,
    form:fromReducer
})

export default rootReducer;
