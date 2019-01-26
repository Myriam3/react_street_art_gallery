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

    this.state = {
      currentCountry: 'All',
      currentImageList: this.dataImages
    }

  }

  // Methods

  //  Updates state.currentCountry & state.currentImageList with array of images filtered by country
  filterByCountry = country =>{
    let filteredImages;
    
    if (country !== 'All'){
      filteredImages = this.dataImages.filter(img => img.country === country);
    }
    else{
      filteredImages = this.dataImages;
    }
    
    this.setState({
      currentCountry: country,
      currentImageList: filteredImages
    });
  }

  // Render
  render() {
    return (
        <div>
          <nav>
            <CountryList countries={this.countries} clickHandler={this.filterByCountry} currentCountry={this.state.currentCountry}/>
          </nav>
          
          <div>
            <ImageList images={this.state.currentImageList}/>
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
