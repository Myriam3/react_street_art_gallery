import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ImageList extends Component{
    constructor(props){
        super(props);
    }
    render(){
        console.log('public url',process.env.PUBLIC_URL);
        return (
            <ul>
                {
                    this.props.images.map((img,index) => {
                       const path = 'http://localhost/2018/street_art_react/'+img.path+'/'+img.fileName;
                       return (
                        <li key={index}>
                            <a href="#">
                                <img src={path} alt=""/>
                            </a>
                        </li>
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

