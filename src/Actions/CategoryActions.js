import * as Type from './types'
import * as API from '../Util/CategoryApi'

export const getGategories = (categories) => ({
    type: Type.GET_CATEGORIES,
    categories: categories,
});

export const fetchCategories = () => dispatch => (
    API
    .fetchCategories()
    .then(categories => {dispatch(getGategories(categories))})
);


