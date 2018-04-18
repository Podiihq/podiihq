google.maps.event.addDomListener(window, 'load', init);

function init() {
  var mapOptions = {
    zoom: 17,
    scrollwheel: false,

    center: new google.maps.LatLng(-0.1076263, 34.76850450000006),
    styles: [
      {
        featureType: 'administrative',
        elementType: 'labels.text.fill',
        stylers: [
          {
            color: '#000000'
          }
        ]
      },
      {
        featureType: 'landscape',
        elementType: 'all',
        stylers: [
          {
            color: '#f2f2f2'
          }
        ]
      },
      {
        featureType: 'poi',
        elementType: 'all',
        stylers: [
          {
            visibility: 'on'
          }
        ]
      },
      {
        featureType: 'road',
        elementType: 'all',
        stylers: [
          {
            saturation: -100
          },
          {
            lightness: 45
          }
        ]
      },
      {
        featureType: 'road.highway',
        elementType: 'all',
        stylers: [
          {
            visibility: 'on'
          }
        ]
      },
      {
      featureType: 'poi.place_of_time',
              elementType: 'labels.text.fill',
              stylers: [
                {
                  color: '#6b9a76'
                }
              ]
            },
            {
        featureType: 'road.arterial',
        elementType: 'labels.icon',
        stylers: [
          {
            visibility: 'on'
          }
        ]
      },
      {
        featureType: 'transit',
        elementType: 'all',
        stylers: [
          {
            visibility: 'on'
          }
        ]
      },
      {
        featureType: 'water',
        elementType: 'all',
        stylers: [
          {
            color: '#BBBBBB'
          },
          {
            visibility: 'on'
          }
        ]
      }
    ]
  };

  var mapElement = document.getElementById('map');
  var map = new google.maps.Map(mapElement, mapOptions);
  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(-0.1076263, 34.76850450000006),
    map: map,
    title: 'Lutheran Church'
  });
}