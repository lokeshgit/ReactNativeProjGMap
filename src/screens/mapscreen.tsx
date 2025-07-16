import React from 'react';
import MapView, { Marker } from 'react-native-maps';

export default function MapScreen({ location }) {
  return (
    <MapView
      style={{ flex: 1 }}
      region={{
        latitude: location.lat,
        longitude: location.lng,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
    >
      <Marker coordinate={{ latitude: location.lat, longitude: location.lng }} />
    </MapView>
  );
}