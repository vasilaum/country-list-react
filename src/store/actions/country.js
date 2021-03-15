export function setAllCountries(countries) {
    return {
        type: 'SET_ALL_COUNTRIES',
        countries
    }
}

export function setSearchCountries(countries) {
    return {
        type: 'SET_SEARCH_COUNTRIES',
        countries
    }
}

export function updateCountry(editedCountries) {
    return {
        type: 'UPDATE_COUNTRY',
        editedCountries
    }
}