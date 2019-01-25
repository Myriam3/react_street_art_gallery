import React from 'react';
import PropTypes from 'prop-types';
// Components
import ImageDetails from './ImageDetails';

const Lightbox = props => {
    const img = props.image;
    const path = 'http://localhost/2018/street_art_react/'+img.path+'/'+img.fileName;
    const infos = {
        country: img.country,
        city: img.city,
        location: img.location,
        year: img.year
    }

    return (
            <div>
                <div>
                    <img alt="" src={path}/>
                    <ImageDetails {...infos}/>
                </div>
            </div>
    );
};

Lightbox.propTypes = {
    image: PropTypes.object.isRequired
}

export default Lightbox;

