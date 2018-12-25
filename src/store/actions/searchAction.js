import { SEARCH_INPUT_CHANGED } from './types';

export const searchTermChanged = (searchTerm) => ({
    type: SEARCH_INPUT_CHANGED,
    payload: { searchTerm }
});