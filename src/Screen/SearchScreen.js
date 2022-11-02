import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';

const SearchScreen = () => {
  const [term, setTerm] = useState('');

  return (
    <View>
      <SearchBar term={term} onTermChange={(newTerm) => setTerm(newTerm)} />
      <Text>{term}</Text>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({});
