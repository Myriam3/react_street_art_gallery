import React, { Component } from 'react';
import PropTypes from 'prop-types';
//import logo from './logo.svg';
// CSS
import './css/normalize.css';
import './css/App.css';
// Components
import Navigation from './components/Navigation.js';
import ImageList from './components/ImageList.js';
import Lightbox from './components/Lightbox.js';
 
class App extends Component {
  constructor(props){
    super(props);  
  
    // Country list
    this.countries = this.props.countries;
    if (this.countries.length > 1) this.countries.unshift('All');
    
    // Photos
    this.dataImages = this.props.images

    // State init
    this.state = {
      currentCountry: 'All',
      currentCity: 'All',
      currentImageList: this.dataImages
    }
  }

  // Methods

  // getCityList()
  // Get city list of the current country
  getCityList = () => {
    if (this.state.currentCountry === 'All') return;

    const countryImages = this.dataImages.filter(img => img.country === this.state.currentCountry);
    
    let cities = countryImages.reduce((acc,next) => {
      acc.push(next.city);
      return acc;
    },[]);
    // Remove duplicates
    cities = Array.from(new Set(cities));
    // If more than 1 city, add 'All' option
    if (cities.length > 1) cities.unshift('All');

    return cities;
  }

  // filterByCountry()
  // Updates currentCountry state
  // Updates currentImageList state with array of images filtered by country. Filter from all images (dataImages)
  // Reset currentCity state
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
      currentCity:'All',
      currentImageList: filteredImages
    });
  }
  
  // filterByCity()
  //  Updates currentCity state
  // Updates currentImageList state with array of images filtered by country and city
  filterByCity = city =>{
    // Filter by country
    let filteredImages = this.dataImages.filter(img => img.country === this.state.currentCountry);
  
    if (city !== 'All'){
      // Filter by city
      filteredImages = filteredImages.filter(img => img.city === city ); 
    }

    this.setState({
      currentCity: city,
      currentImageList: filteredImages
    }); 
  }

  // Render
  render() {
    return (
        <div>
          <nav className="country-list">
            <Navigation 
              places={this.countries}
              clickHandler={this.filterByCountry} 
              currentPlace={this.state.currentCountry}/>
          </nav>
          <nav className="city-list">
            <Navigation 
              places={this.state.currentCountry === 'All' ? [] : this.getCityList()}
              clickHandler={this.filterByCity} 
              currentPlace={this.state.currentCity}/>
          </nav>
          <div>
            <ImageList 
              images={this.state.currentImageList} 
              clickHandler={this.filterByCountry} 
              currentCountry={this.state.currentCountry}/>
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
