import * as API from '../Util/api'
import * as Type from './types'

export const getGategories = (categories) => ({
    type: Type.GET_CATEGORIES,
    categories: categories,
});

export const fetchCategories= () => dispatch => (
    API
    .fetchCategories()
    .then(categories => {dispatch(getGategories(categories))})
);


