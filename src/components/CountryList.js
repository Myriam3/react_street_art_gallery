import React from 'react';
import PropTypes from 'prop-types';
import './../css/CountryList.css';

const CountryList = props => {
    return (
            <ul className="country-list">
                {
                    props.countries.map((item,index) => {
                        return <li key={index} className="country-list-item"><a href="#">{item}</a></li>
                    })
                }
            </ul>
    );
};

CountryList.propTypes = {
    countries: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default CountryList;

