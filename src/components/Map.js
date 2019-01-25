import React from 'react';
import PropTypes from 'prop-types';

const Map = props => {
    let map = '';
    
    // World map
    if (props.currentCountry === 'world') map = 'http://localhost/2018/street_art_react/maps/world.svg';
    
    return (
        <object type="image/svg+xml" data={map}></object>
    );
};

Map.propTypes = {
   currentCountry: PropTypes.string
}

export default Map;

