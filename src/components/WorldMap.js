import React from 'react';
import PropTypes from 'prop-types';
import worldSVG from './../maps/world.svg';


const WorldMap = (props) => {
    
   const objectRef = React.createRef();

   const handleClick = () => {
    console.log('hey');
    let svg;
    if (objectRef.current && objectRef.current.contentDocument){
        svg = objectRef.current.contentDocument.documentElement;
    }
    
    if (!svg) return;        
    
    const links = svg.querySelectorAll('a');

    links.forEach(link => {
        link.addEventListener('click',function(e){
            e.preventDefault();
            console.log(link);
            props.clickHandler(this.dataset.link);
        });
    });
   }

   // on first load 
   window.addEventListener('load',() => {
    handleClick();
   });

    return (
        <object type="image/svg+xml" data={worldSVG} ref={objectRef} onLoad={handleClick}></object>
    );
};

/*class Map extends Component{
    constructor(props){
        super(props);
        this.objectRef = React.createRef();
    }
}*/
WorldMap.propTypes = {
    clickHandler: PropTypes.func.isRequired
}



export default WorldMap;

