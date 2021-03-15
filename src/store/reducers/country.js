const INITTIAL_STATE = {
    countries: [],
    searchCountries: []
};

export default function country(state = INITTIAL_STATE, action) {
    if(action.type == 'SET_ALL_COUNTRIES') {
        state = {
            countries: action.countries,
            searchCountries: []
        };

    } else if(action.type == 'SET_SEARCH_COUNTRIES') {
        state = {
            ...state,
            searchCountries: action.countries
        };

    } else if(action.type == 'UPDATE_COUNTRY') {
        state = {
            ...state,
            countries: action.editedCountries
        };
    }

    return state;
}