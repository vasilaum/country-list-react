import '../styles/Card.css';
import React from 'react';
import { Link } from "react-router-dom";

export default (props) => {
    return (
        <div className="Card" key={ props.index }>
            <div className="Content">
                <div>
                    <img src={ props.country.flag.svgFile } />
                </div>
                <div>Capital: { props.country.capital }</div>
                <div>
                    <Link to={ '/card-info/' + props.country.alpha2Code }>Card Info</Link>
                </div>
            </div>
            <div className="Footer">
                { props.country.name + ' | ' + props.country.nativeName }
            </div>
        </div>
    );
};