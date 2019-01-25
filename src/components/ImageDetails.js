import React from 'react';
import PropTypes from 'prop-types';

const ImagesDetails = props => {
    console.log('props',props);
    return (
        <div>
            <span>{props.country}</span>
            <span>{props.city}</span>
            <span>{props.location}</span>
            <span>{props.year}</span>
        </div>
    )
};

ImagesDetails.propTypes = {
    country: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    location: PropTypes.string,
    year: PropTypes.string.isRequired
}

export default ImagesDetails;

