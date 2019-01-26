import React from 'react';
import PropTypes from 'prop-types';
import './../css/CountryList.css';

const CountryList = props => {

    return (
            <ul className="country-list">
                {
                    props.countries.map((country,index) => {
                        // CSS classes
                        const classes = ['country-list-item'];
                        // if current country, add class active
                        if (country === props.currentCountry) classes.push('active');
                        // Click handler
                        const handleClick = () => {
                            props.clickHandler(country);
                        }
                        // UI
                        return <li key={index} className={classes.join(' ')}>
                                    <a href="#" onClick={handleClick}>{country}</a>
                                </li>
                    })
                }
            </ul>
    );
};

CountryList.propTypes = {
    countries: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default CountryList;

