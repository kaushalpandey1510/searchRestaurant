import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

const ResultsDetail = ({ result }) => {
  return (
    <View style={styles.conatinerStyle}>
      <Image style={styles.imageStyles} source={{ uri: result.image_url }} />
      <Text style={styles.nameStyle}>{result.name}</Text>
      <Text>
        {result.rating} Star {result.review_count} Reviews
      </Text>
    </View>
  );
};

export default ResultsDetail;

const styles = StyleSheet.create({
  conatinerStyle: {
    marginLeft: 15,
  },
  imageStyles: {
    height: 125,
    width: 250,
    borderRadius: 4,
    marginBottom: 5,
    marginBottom: 10,
  },
  nameStyle: {
    fontWeight: 'bold',
  },
});
