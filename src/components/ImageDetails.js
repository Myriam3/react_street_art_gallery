import React from 'react';
import PropTypes from 'prop-types';
// CSS
import './../css/ImageDetails.css';
// ICON
import locationIcon from './../icons/location.svg';

const ImagesDetails = props => {
    let wrapClasses = 'image-details-wrap';
    if (props.toggled) wrapClasses+= ' active';

    return (
        <div className="image-details">
            <div className={wrapClasses}>
                {
                    props.location ? <span className="info location">{props.location}</span> : ''
                }
                <span className="info">{props.city} - {props.country}</span>         
                <span className="info year">{props.year}</span>
            </div>
        </div>
    )
};

ImagesDetails.propTypes = {
    country: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    location: PropTypes.string,
    year: PropTypes.string.isRequired,
    toggled: PropTypes.bool.isRequired
}

export default ImagesDetails;

