import { SEARCH_INPUT_CHANGED } from '../actions/types';
import Projects from '../../data/projects';

const initialState = {
    searchTerm: '',
    projects: Projects
}

export default function (state = initialState, action) {
    switch (action.type) {
        case SEARCH_INPUT_CHANGED:
            const { searchTerm } = action.payload;
            return {
            ...state,
            searchTerm: searchTerm,
            projects: searchTerm
                ? Projects.filter(
                    projects =>
                    projects.title.toLowerCase().indexOf(searchTerm.toLowerCase()) >
                    -1,
                )
                : Projects,
            };
        default:
            return state;
    }
}