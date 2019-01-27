import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import dataImages from './data/photos.json';

// Data
const countries = ['France','Japan','South Korea','Germany','Belgium','USA','Australia','New Zealand','UAE','Czech Republic','Sweden','Denmark'];

// Static
const photos = dataImages;
ReactDOM.render(<App images={photos} countries={countries}/>, document.getElementById('root'));

// AJAX
/*
const endpoint = 'http://localhost/street_art_data/photos_3.json';

fetch(endpoint)
    .then(result => {
    return result.json();
    })
    .then(result => {
        if (!result) return;
        ReactDOM.render(<App images={result} countries={countries}/>, document.getElementById('root'));
    });
*/

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
