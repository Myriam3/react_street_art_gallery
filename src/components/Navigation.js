import React from 'react';
import PropTypes from 'prop-types';
import './../css/Navigation.css';

const Navigation = props => {
    
    // Render whether a link (more than 1 place) || a string
    const renderPlace = (place,isLink) => {
        if (isLink){
            // Click handler
            const handleClick = (e) => {
                e.preventDefault();
                props.clickHandler(place);
            }
            return (
                <a href="#" onClick={handleClick}>{place}</a>
            );
        }
        else{
            return place;
        }
    }

    return (
                <ul className="nav">
                    {
                        props.places.map((place,index) => {
                            // CSS classes
                            const classes = ['nav-item'];
                            // if current country, add class active
                            if (place === props.currentPlace) classes.push('active');

                            // Country List
                            return (
                                <li key={index} className={classes.join(' ')}>
                                       {renderPlace(place,props.places.length > 1)}
                                </li>
                            );
                        })
                    }
                </ul>
    );
};

Navigation.propTypes = {
    places: PropTypes.arrayOf(PropTypes.string).isRequired,
    currentPlace: PropTypes.string.isRequired,
    clickHandler: PropTypes.func.isRequired
}

export default Navigation;

