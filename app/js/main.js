'use strict';

function initMap() {
	let map, styles;

	styles = [
		{
		  "featureType": "administrative.country",
		  "stylers": [
			{
			  "color": "#282828"
			}
		  ]
		},
		{
		  "featureType": "landscape.man_made",
		  "stylers": [
			{
			  "color": "#282828"
			}
		  ]
		},
		{
		  "featureType": "landscape.natural",
		  "stylers": [
			{
			  "color": "#282828"
			}
		  ]
		},
		{
		  "featureType": "landscape.natural.landcover",
		  "stylers": [
			{
			  "color": "#282828"
			}
		  ]
		},
		{
		  "featureType": "landscape.natural.terrain",
		  "stylers": [
			{
			  "color": "#282828"
			}
		  ]
		},
		{
		  "featureType": "poi.park",
		  "stylers": [
			{
			  "color": "#dfdbd4"
			}
		  ]
		},
		{
		  "featureType": "road.arterial",
		  "stylers": [
			{
			  "color": "#383838"
			}
		  ]
		},
		{
		  "featureType": "road.highway",
		  "stylers": [
			{
			  "color": "#383838"
			}
		  ]
		},
		{
		  "featureType": "road.highway.controlled_access",
		  "stylers": [
			{
			  "color": "#383838"
			}
		  ]
		},
		{
		  "featureType": "road.local",
		  "stylers": [
			{
			  "color": "#383838"
			}
		  ]
		},
		{
		  "featureType": "water",
		  "stylers": [
			{
			  "color": "#004044"
			}
		  ]
		},
		{
		  "featureType": "water",
		  "elementType": "labels.icon",
		  "stylers": [
			{
			  "weight": 1.5
			}
		  ]
		}
	  ]
	
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 48.85837693990208, lng: 2.3385230535409463 },
    zoom: 16,
	styles: styles,
	zoomControl: false,
  });
}

(function($){
	$(document).ready(function() {
		// Code
		$('.header__burger').click(function(event) {
			$('.header__burger, .header__menu').toggleClass('active');
			$('.body').toggleClass('lock')
		})
	});
})(jQuery);


  
  
  