import React, {useEffect, useState} from 'react';
import { connect } from 'react-redux';

import * as CountryActions from '../store/actions/country';

const InputSearch  = ({ data, dispatches }) => {
    const [inputSearch, setInputSearch] = useState('');

    function search(val) {
        setInputSearch(val);

        if(val === "") {
            dispatches.setSearchCountries([]);
            return;
        }

        const searched = [];

        data.countries.map(function(country) {
            if(country.name.toLowerCase().indexOf(val.toLowerCase()) > -1) {
                searched.push(country);
            }
        });

        dispatches.setSearchCountries(searched);
    }

    return (
        <>
            <div className="SearchCountries">
                <input type="text" value={inputSearch} onChange={(e) => search(e.target.value)} placeholder="Pesquisar"/>
            </div>
        </>
    );
};

const mapStateToProps = state => ({
    data: {
        countries: state.country.countries
    }
});

const mapDispatchToProps = dispatch => ({
    dispatches: {
        setSearchCountries: (countries) => dispatch(CountryActions.setSearchCountries(countries))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(InputSearch);