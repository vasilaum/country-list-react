import '../styles/CardEdit.css';

import React, {useEffect, useState} from 'react';
import { useParams } from "react-router-dom";
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

import * as CountryActions from '../store/actions/country';

const CardEdit = ({ data, dispatches }) => {
    const { index }                                 = useParams();
    const [inputName, setInputName]                 = useState('');
    const [inputCapitalName, setInputCapitalName]   = useState('');

    useEffect(() => {
        setInputName(data.countries[index].name);
        setInputCapitalName(data.countries[index].capital);
    }, []);

    function updateCountries() {
        data.countries[index].name       = inputName;
        data.countries[index].capital    = inputCapitalName;

        dispatches.updateCountry(data.countries);

        alert('Atualziado com sucesso!');
    }

    return (
        <>
            <div className="CardEditForm">
                <form>
                    <label>Name: </label>
                    <input type="text" value={inputName} onChange={(e) => {setInputName(e.target.value)}} />
                    <br />
                    <label>Capital: </label>
                    <input type="text" value={inputCapitalName} onChange={(e) => {setInputCapitalName(e.target.value)}} />
                    <br />
                    <button type="button" onClick={updateCountries}>Update</button>
                </form>
                <Link to="/">🠔 Home</Link>
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
        updateCountry: (editedCountries) => dispatch(CountryActions.updateCountry(editedCountries))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(CardEdit);