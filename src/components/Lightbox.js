import React from 'react';
import PropTypes from 'prop-types';
// CSS
import './../css/Lightbox.css';
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
        <React.Fragment>
            <div className="overlay"></div>
            <div className="lightbox">
                <div className="lightbox-wrap">
                    <img alt="" src={path}/>
                    <ImageDetails {...infos}/>
                </div>
            </div>
        </React.Fragment>
    );
};

Lightbox.propTypes = {
    image: PropTypes.object.isRequired
}

export default Lightbox;

