import initialiseMap from './map';
import $ from 'jquery';
import whatInput from 'what-input';

window.$ = $;
window.initialiseMap = initialiseMap;

import Foundation from 'foundation-sites';
// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
// import './lib/foundation-explicit-pieces';

imagesLoaded(document.querySelector('body'), function(instance) {
  document.getElementById('loader').style.display = 'none';
  document.getElementById('page-content').style.display = 'block';
});

$(document).foundation();
