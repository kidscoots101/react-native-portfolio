import { StyleSheet, Text, View, FlatList, Image } from 'react-native'
import React from 'react'


const POSITIONS = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'React Native',
    image: require("../assets/react.png")
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Machine Learning',
    image: require("../assets/machine-learning.png")
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Javascript',
    image: require("../assets/javascript.png")
  },
  {
      id: '534594b1f-5g21-29sb-cb20-145571e29d72',
      title: 'Cloud Computing',
      image: require("../assets/cloud-comp.png")
    },
];


const Item = ({ title, year, place, image }) => (
  <View style={styles.item}>
    <Image source={image} style={styles.image} />
    <Text style={styles.title}>{title}</Text>
  </View>
);

const Skills = () => {
  return (
    <View>
      <Text style={styles.header}>Skills</Text>
      <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={POSITIONS}
          renderItem={({ item }) => (
            <Item
              title={item.title}
              image={item.image}
            />
          )}
          keyExtractor={(item) => item.id}
        />
    </View>
  )
}

export default Skills

const styles = StyleSheet.create({
  header: {
    marginTop: 20,
    marginLeft: 25,
    fontWeight: 'bold',
    fontSize: 25,
  },
  item: {
      backgroundColor: '#e1e3ff',
      padding: 10,
      margin: 5,
      borderRadius: 5,
      left: 20,
      flexDirection: 'row'
  },
  image: {
    width: 25, // Adjust the width and height as needed
    height: 25,
    borderRadius: 5,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    alignSelf: 'center',
    marginLeft: 10
  },
  year: {
    fontWeight: '600',
    fontSize: 15,
  },
  place: {
    fontSize: 15,
  },
});
