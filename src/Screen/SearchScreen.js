import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const searchApi = async () => {
    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          term,
          location: 'toronto',
        },
      });
      setResults(response.data.businesses);
      setErrorMessage('');
    } catch (err) {
      setErrorMessage('Something went wrong!');
    }
  };

  return (
    <View>
      <SearchBar
        term //term={term}
        onTermChange={setTerm} //call back props, ===(newTerm) => setTerm(newTerm)
        onTermSubmit={searchApi} //call back prop
      />
      {errorMessage ? <Text> {errorMessage} </Text> : null}
      <Text>We have found {results.length} results!</Text>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({});
