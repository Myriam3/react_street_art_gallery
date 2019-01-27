import React, {Component} from 'react';
import PropTypes from 'prop-types';
// CSS
import './../css/Lightbox.css';
// Components
import ImageDetails from './ImageDetails';

class Lightbox extends Component {
    constructor(props){
        super(props);
        this.state = {
            infos:false
        }
        this.lightboxBg = React.createRef();
    }

    // Methods
    toggleInfos = (e) =>{
        this.setState({
            infos: !this.state.infos
        })
    }

    exit = (e) => {
        this.props.onExit();
    }

    handleKeys = (e) => {
        e.preventDefault();
        switch (e.keyCode){
            // Space
            case 32: 
                this.toggleInfos();
            break;
            // Arrow Right
            case 39:
                this.props.onNav(true); // Next img
            break;
            // Arrow Left
            case 37:
                this.props.onNav(false); // Previous img
            break;
            // Escape
            case 27:
                this.exit(e);
            break;
            // Default
            default:
                return;
        }
    }

    //Lifecycle
    componentDidMount(){
        window.addEventListener('keydown',this.handleKeys);
    }

    componentWillUnmount(){
        window.removeEventListener('keydown',this.handleKeys);
    }

    // Render
    render(){
       
        const img = this.props.image; 
        const path = 'http://localhost/2018/street_art_react/'+img.path+'/'+img.fileName;
        const infos = {
            country: img.country,
            city: img.city,
            location: img.location,
            year: img.year
        }
        const backgroundExit = (e) => {
            if (!(e.target === this.lightboxBg.current)) return;
            this.exit();
        }
        return (
            <React.Fragment>
                <div className="overlay" ></div>
                <div className="lightbox" ref={this.lightboxBg} onClick={backgroundExit}>
                    <div className="lightbox-wrap">
                        <img onClick={this.toggleInfos} alt="" src={path}/>
                        <ImageDetails {...infos} toggled={this.state.infos}/>
                    </div>
                </div>
            </React.Fragment>
        );
    }
};

Lightbox.propTypes = {
    image: PropTypes.object.isRequired,
    onExit: PropTypes.func.isRequired,
    onNav: PropTypes.func.isRequired
}

export default Lightbox;

