import React, {Component} from 'react';
import PropTypes from 'prop-types';
// CSS
import './../css/ImageList.css';
// Components
import WorldMap from './WorldMap.js';
import Image from './Image.js';

class ImageList extends Component{
    constructor(props){
        super(props);
    }
    renderWorldMap = () => {
        return (
            <li className="image-list-map world">
                <WorldMap clickHandler={this.props.clickHandler}/>
            </li>
        );
    }

    render(){
        return (
            <ul className="image-list">
            { // World Map
               this.props.currentCountry === 'All' ? this.renderWorldMap() : ''
            }
            { // Images
                this.props.images.map((img,index) => {
                    return (
                        <Image key={index} image={img}/>
                    );
                })
            }
            </ul>
        );
    }
}

ImageList.propTypes = {
    images: PropTypes.arrayOf(PropTypes.object).isRequired,
    currentCountry: PropTypes.string,
    clickHandler: PropTypes.func
}

export default ImageList;

