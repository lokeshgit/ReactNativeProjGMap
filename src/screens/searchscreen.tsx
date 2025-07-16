import React from 'react';
import { View } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

export default function SearchScreen({ onPlaceSelected }) {
  return (
    <View style={{ flex: 1 }}>
      <GooglePlacesAutocomplete
        placeholder="Search for a place"
        onPress={(data, details = null) => onPlaceSelected(data, details)}
        fetchDetails={true}
        query={{
          key: 'YOUR_GOOGLE_API_KEY',
          language: 'en',
        }}
      />
    </View>
  );
}