import {key, url} from "./ApiTools"


export function fetchCategories(catgory) {
    return fetch(`${url}/categories`, { headers: { 'Authorization': key } })
        .then((res) => res.json())
        .then((data) => data.categories)
}
