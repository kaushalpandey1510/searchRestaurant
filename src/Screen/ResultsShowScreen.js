import {
  StyleSheet,
  Text,
  View,
  Image,
  Linking,
  TouchableOpacity,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import yelp from '../api/yelp';
import { FlatList } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

const ResultsShowScreen = ({ navigation }) => {
  const [results, setResults] = useState(null);
  const id = navigation.getParam('id');

  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResults(response.data);
  };

  useEffect(() => {
    getResult(id);
  }, []);

  if (!results) {
    return null; //conditional check if our results is null before returning view on display
  }

  return (
    <View style={styles.container}>
      <Text style={styles.nameStyle}>{results.name}</Text>
      <TouchableOpacity onPress={() => Linking.openURL(`tel:${results.phone}`)}>
        <View style={styles.phoneViewStyle}>
          <Feather name='phone-call' size={15} color='blue' />
          <Text style={styles.phoneStyle}>{results.phone.slice(2)}</Text>
        </View>
      </TouchableOpacity>
      <Text style={styles.addressStyle}>
        {results.location.display_address}
      </Text>
      <Text style={{ marginLeft: 10 }}>Photo Gallery: </Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={results.photos}
        renderItem={({ item }) => {
          return <Image style={styles.photoStyles} source={{ uri: item }} />;
        }}
      />
    </View>
  );
};

export default ResultsShowScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  photoStyles: {
    marginTop: 10,
    height: 200,
    width: 200,
    borderRadius: 5,
    marginLeft: 10,
  },
  nameStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  phoneViewStyle: {
    flexDirection: 'row',
    marginTop: 10,
    marginLeft: 10,
  },
  phoneStyle: {
    color: 'blue',
    fontSize: '16',
    marginLeft: 10,
  },
  addressStyle: {
    marginLeft: 10,
    marginBottom: 10,
  },
});
