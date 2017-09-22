import * as Type from '../Actions/types'


function CategoriesReducer(state = {}, action) {
    switch (action.type) {
        case Type.GET_CATEGORIES:
            return {...action.categories};
        default:
            return state;
    }
}

export default CategoriesReducer;