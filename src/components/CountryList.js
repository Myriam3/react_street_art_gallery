import React from 'react';
import PropTypes from 'prop-types';

const CountryList = props => {
    return (
            <ul>
                {
                    props.countries.map((item,index) => {
                        return <li key={index}><a href="#">{item}</a></li>
                    })
                }
            </ul>
    );
};

CountryList.propTypes = {
    countries: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default CountryList;

