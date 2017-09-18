import { GET_CATEGORIES} from '../Actions'


function CategoriesReducer(state = {}, action) {
    switch (action.type) {
        case GET_CATEGORIES:
            return {...action.categories};
        default:
            return state;
    }
}

export default CategoriesReducer;