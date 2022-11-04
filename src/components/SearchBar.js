import { StyleSheet, TextInput, View } from 'react-native';
import React from 'react';
import { FontAwesome } from '@expo/vector-icons';

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.backgroundStyle}>
      <FontAwesome name='search' style={styles.iconStyle} />
      <TextInput
        autoCapitalize='none'
        autoCorrect={false}
        style={styles.inputStyle}
        placeholder='Search...'
        value={term} //value is always the current state object
        onChangeText={onTermChange} //Here we just call the instace of property, its same as -> onChangeText={(newText) => { onTermChange(newText) }}
        onEndEditing={onTermSubmit} //we call this to when we wish to initiate respose after hitting okay of done button on mobile keyboard
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: '#F0EEEE',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 20,
    flexDirection: 'row',
    marginTop: 15,
  },
  inputStyle: {
    flex: 1,
    fontSize: 18,
  },
  iconStyle: {
    fontSize: 35, //size of icon, if defined in its like size={number}
    alignSelf: 'center',
    marginHorizontal: 15,
  },
});
