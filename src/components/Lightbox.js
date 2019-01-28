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
        this.firstFocus = React.createRef();
        this.lastFocus = React.createRef();
    }

    // Methods
    toggleInfos = () =>{
        this.setState({
            infos: !this.state.infos
        })
    }

    exit = () => {
        this.props.onExit();
        
    }

    backgroundExit = (e) => {
        if (!(e.target === this.lightboxBg.current)) return;
        this.exit();
    }

    nextImage = () => {
        this.props.onNav(true);
    }

    previousImage = () => {
        this.props.onNav(false);
    }

    handleKeys = (e) => {
       // e.preventDefault();
        console.log(e.keyCode);
        
        switch (e.keyCode){

            // Arrow Right
            case 39:
                this.nextImage();
            break;
            // Arrow Left
            case 37:
                this.previousImage();
            break;
            // Arrow Down
            case 40:
                e.preventDefault();
                if (this.state.infos) this.toggleInfos();
            break;
            // Arrow Up
            case 38:
                e.preventDefault();
                if (!this.state.infos) this.toggleInfos();
            break;
            // Escape
            case 27:
                this.exit();
            break;
            // Tab - Focus trapping
            case 9:
                // Navigate backward
              
                if (e.shiftKey){
                   if(document.activeElement === this.firstFocus.current){
                    e.preventDefault();
                    this.lastFocus.current.focus();
                   }
                }
                // Navigate forward
                else {
                    if(document.activeElement === this.lastFocus.current){
                        e.preventDefault();
                        this.firstFocus.current.focus();
                    }
                }
            break;
            // Default
            default:
                return;
        }
    }

    //Lifecycle
    componentDidMount(){
        this.firstFocus.current.focus();
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

        return (
            <React.Fragment>
                <div className="overlay" ></div>
                <div className="lightbox" ref={this.lightboxBg} onClick={this.backgroundExit}>
                    <button onClick={this.exit} className="btn lightbox-btn close-btn" title="Close" aria-label="Close" ref={this.firstFocus}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path d="M38 12.83L35.17 10 24 21.17 12.83 10 10 12.83 21.17 24 10 35.17 12.83 38 24 26.83 35.17 38 38 35.17 26.83 24z"/></svg>
                    </button>
                    <button onClick={this.previousImage} className="btn lightbox-btn nav-btn prev" title="Previous" aria-label="Previous Photo">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path d="M40 22H15.66l11.17-11.17L24 8 8 24l16 16 2.83-2.83L15.66 26H40v-4z"/></svg>
                    </button>
                    <button  onClick={this.nextImage} className="btn lightbox-btn nav-btn next" title="Next" aria-label="Next Photo">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path d="M24 8l-2.83 2.83L32.34 22H8v4h24.34L21.17 37.17 24 40l16-16z"/></svg>
                    </button>
                    <div className="lightbox-wrap">
                        <img onClick={this.toggleInfos} alt="" src={path}/>
                        <ImageDetails {...infos} toggled={this.state.infos}/>
                        <button onClick={this.toggleInfos} className="btn lightbox-btn info-btn" title="Details" arial-label="Details" ref={this.lastFocus}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path d="M22 34h4V22h-4v12zm2-30C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm0 36c-8.82 0-16-7.18-16-16S15.18 8 24 8s16 7.18 16 16-7.18 16-16 16zm-2-22h4v-4h-4v4z"/></svg>
                        </button>
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

