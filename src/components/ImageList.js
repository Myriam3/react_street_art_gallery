import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './../css/ImageList.css';
import Image from './Image.js';

class ImageList extends Component{
    constructor(props){
        super(props);
    }
    render(){
        console.log('public url',process.env.PUBLIC_URL);
        return (
            <ul className="image-list">
                {
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
    images: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default ImageList;

