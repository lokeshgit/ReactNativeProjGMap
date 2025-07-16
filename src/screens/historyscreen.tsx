import React, { useEffect, useState } from 'react';
import { FlatList, Text, TouchableOpacity } from 'react-native';

export default function HistoryScreen({ onSelect }) {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    getHistory(setPlaces);
  }, []);

  return (
    <FlatList
      data={places}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => onSelect(item)}>
          <Text>{item.name} — {new Date(item.timestamp).toLocaleString()}</Text>
        </TouchableOpacity>
      )}
    />
  );
}