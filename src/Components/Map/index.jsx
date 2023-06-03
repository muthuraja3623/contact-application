import React from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import { useLocation, Link } from 'react-router-dom';

function MapView() {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const location = useLocation()
  console.log("location", location.state);
  const position = [51.505, -0.09]

  // useEffect(() => {
  //   if (location?.state) {
  //     getCoordinates(location?.state?.postalCode)
  //   }
  // }, [location.state])

  // const getCoordinates = (postalCode) => {
  //   fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${postalCode}&key=${API_KEY}`)
  //     .then(response => response.json())
  //     .then(data => {
  //       if (data.results.length > 0) {
  //         const { lat, lng } = data.results[0].geometry.location;
  //         position.push(lat)
  //         position.push(lng)
  //       } else {
  //         console.log('error');
  //       }
  //     })
  //     .catch(error => console.log(error));
  // }

  return (
    <div className='map-view'>
      <div className='row map-view-title'>
        <div className='col-8'>
          <h2>Map view</h2>
        </div>
        <div className='col-4 back-btn'>
          <Link to="/" className="btn btn-secondary">Back</Link>
        </div>
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <Marker
                key={location.state.id}
                position={position}
              />
            </MapContainer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MapView;