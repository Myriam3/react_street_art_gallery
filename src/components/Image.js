import React, {Component} from 'react';
import PropTypes from 'prop-types';

const Image = props => {
    const img = props.image;
    const path = 'http://localhost/2018/street_art_react/'+img.path+'/'+img.fileName;
    const classes = ['image-list-item'].concat(img.classes);
    const openLightbox = (e) => {
         e.preventDefault();
         props.clickHandler(props.index);
     }
    return (
        <li className={classes.join(' ')}>
            <a href="#" onClick={openLightbox}>
                <img src={path} alt=""/>
            </a>
        </li>
    );
};

Image.propTypes = {
    image: PropTypes.object.isRequired,
    clickHandler: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired
}

export default Image;

