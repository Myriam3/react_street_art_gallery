import React from 'react';
import PropTypes from 'prop-types';
import worldSVG from './../maps/world.svg';


const WorldMap = (props) => {
    
    const objectRef = React.createRef();

    window.addEventListener('load',(e) => {
        let svg;
        if (objectRef.current && objectRef.current.contentDocument){
            svg = objectRef.current.contentDocument.documentElement;
        }
        
        if (!svg) return;        
        
        const links = svg.querySelectorAll('a');

        links.forEach(link => {
            link.addEventListener('click',function(e){
                e.preventDefault();
                props.clickHandler(this.dataset.link);
            });
        })
    });
   
    return (
        <object type="image/svg+xml" data={worldSVG} ref={objectRef}></object>
    );
};

/*class Map extends Component{
    constructor(props){
        super(props);
        this.objectRef = React.createRef();
    }
}*/
WorldMap.propTypes = {
    clickHandler: PropTypes.func
}



export default WorldMap;

