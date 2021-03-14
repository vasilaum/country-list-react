import '../styles/CardInfo.css';
import React, {useEffect, useState} from 'react';
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default (props) => {
    let { code }                    = useParams();
    const [country, setCountry]     = useState([]);

    useEffect(() => {
        fetch('https://countries-274616.ew.r.appspot.com', {
            method  : 'POST',
            headers : { 'Content-Type': 'application/json' },
            body    : JSON.stringify({ query:`
                query {
                    Country (alpha2Code: "${code}") {
                        name
                        nativeName
                        capital
                        alpha2Code
                        area
                        population
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
            setCountry(res.data.Country);
        })
    }, []);

    function formatNumber(num) {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
    }

    if(country.length < 1) {
        return <h1>Loading data....</h1>
    }

    return (
        <>
            <div className="CardInfoContent">
                <div><img src={ country[0].flag.svgFile } /></div>
                <div className="CardInfoContentDescription">
                    <p>Name: { country[0].name }</p>
                    <p>Capital: { country[0].capital }</p>
                    <p>Area: { formatNumber(country[0].area) } km²</p>
                    <p>Population: { formatNumber(country[0].population) } peoples</p>
                </div>
            </div>
            <div className="CardInfoContentLinks">
                <Link to="/">🠔 Home</Link>
            </div>
        </>
    );
};