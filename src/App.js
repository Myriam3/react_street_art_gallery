import React, { Component } from 'react';
import PropTypes from 'prop-types';
//import logo from './logo.svg';
// CSS
import './css/normalize.css';
import './css/App.css';
// Components
import CountryList from './components/CountryList.js';
import ImageList from './components/ImageList.js';
import Lightbox from './components/Lightbox.js';
 
class App extends Component {

  constructor(props){
    super(props);  

    // Country list
    this.countries = this.props.countries;
    // Photos
    this.dataImages = this.props.images

  }

  // Methods

  // Render
  render() {
    return (
        <div>
          <nav>
            <CountryList countries={this.countries}/>
          </nav>
          
          <div>
            <ImageList images={this.dataImages}/>
          </div>

          
          {/*<Lightbox image={this.dataImages[3]}/>*/}
          
        </div>
    )
  }
}

App.propTypes = {
  countries: PropTypes.arrayOf(PropTypes.string),
  dataImages: PropTypes.arrayOf(PropTypes.object)
};

export default App;
