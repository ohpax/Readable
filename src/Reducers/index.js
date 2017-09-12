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
// import _ from 'lodash'
// import {
//     GET_POST, 
//     GET_POSTS, 
//     UP_VOTE_POST, 
//     DOWN_VOTE_POST, 
//     GET_COMMENTS,
//     sortOldToNew,
//     sortNewToOld, 
//     sortHighestScoreToLowest, 
//     sortLowestScoreToHighest

// } from '../Actions'

// const initState = {
//     posts : {},
//     comments: {},
//     categories: {}
// }

// function post(state=initState, action){

//     switch(action.type){
//         case GET_POSTS :
//             let tempSorts =  [... state.posts, ... action.posts]

//             if (action.sortType === sortOldToNew) {
//                 tempSorts = _.sortBy(tempSorts, 'timestamp')
//             }
//             else if (action.sortType === sortNewToOld) {
//                 tempSorts = _.sortBy(tempSorts, 'timestamp').reverse()
//             }
//             else if(action.sortType === sortHighestScoreToLowest){
//                 tempSorts = _.sortBy(tempSorts, 'voteScore').reverse()
//             }
//             else if(action.sortType === sortLowestScoreToHighest){
//                 tempSorts = _.sortBy(tempSorts, 'voteScore')
//             }
//             return {
//                 ...state,
//                 posts:  _.mapKeys(tempSorts, 'id')
//             }
//         case GET_POST:
//             return {
//                 ...state,
//                 posts: { ...state.posts, [action.post.id]: action.post }
//             }
//         case GET_COMMENTS :
//             return {
//                 ...state,
//                 comments: _.mapKeys(action.comments, 'id')
//             }
//         case UP_VOTE_POST: 
//             return {
//                 ...state,
//                 posts: _.mapKeys(state.posts, (value, key) => {
//                     if (key === action.postId) {
//                         value.voteScore++
//                     }
//                     return key;
//                 })
//             }
//         case DOWN_VOTE_POST: 
//         return {
//             ...state,
//             posts: _.mapKeys(state.posts, (value, key) => {
//                 if (key === action.postId) {
//                     value.voteScore--
//                 }
//                 return key;
//             })
//         }

//         default :
//             return state;
//     }
// }

// export default post;