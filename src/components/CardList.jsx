import '../styles/CardList.css';

import React, {useEffect} from 'react';
import { connect } from 'react-redux';

import * as CountryActions from '../store/actions/country';

import Card from './Card';
import InputSearch from './InputSearch';

const CardList  = ({ data, dispatches }) => {
    useEffect(() => {
        if(data.countries.length < 1) {
            fetch('https://countries-274616.ew.r.appspot.com', {
                method  : 'POST',
                headers : { 'Content-Type': 'application/json' },
                body    : JSON.stringify({ query:`
                    query {
                        Country {
                            name
                            nativeName
                            capital
                            alpha2Code
                            flag {
                                emoji
                                emojiUnicode
                                svgFile
                            }
                        }
                    }
                `}),
            })
            .then(res => res.json()).then(res => {
                dispatches.setAllCountries(res.data.Country);
            })
        }
    }, []);

    if(data.countries.length < 1) {
        return (
            <>
                <InputSearch />
                <div className="ListCards">
                    <h1>Loading data....</h1>
                </div>
            </>
        );
    }

    if(data.searchCountries.length != 0) {
        return (
            <>
                <InputSearch />
                <div className="ListCards">
                    {data.searchCountries.map((country, index) =>
                        <Card country={country} index={index} key={index}></Card>
                    )}
                </div>
            </>
        );
    }

    return (
        <>
            <InputSearch />
            <div className="ListCards">
                {data.countries.map((country, index) =>
                    <Card country={country} index={index} key={index}></Card>
                )}
            </div>
        </>
    );
};

const mapStateToProps = state => ({
    data: {
        countries: state.country.countries,
        searchCountries: state.country.searchCountries
    }
});

const mapDispatchToProps = dispatch => ({
    dispatches: {
        setAllCountries: (countries) => dispatch(CountryActions.setAllCountries(countries))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(CardList);