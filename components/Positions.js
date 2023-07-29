import { StyleSheet, Text, View, FlatList, Image } from 'react-native'
import React from 'react'


const POSITIONS = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'CTO (React)',
      year: '2023',
      place: 'SST Inc.',
      image: require("../assets/cto.jpeg")
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Task Force (React)',
      year: '2022',
      place: 'SST Inc.',
      image: require("../assets/taskforce.jpeg")
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Assistant PL',
      place: 'Scouts',
      year: '2023',
      image: require("../assets/cto.jpeg")
    },
    {
        id: '534594b1f-5g21-29sb-cb20-145571e29d72',
        title: 'Founder and CEO',
        place: 'GrowCalth',
        year: '2022-present',
        image: require("../assets/growcalth.jpeg")

      },
  ];
  

  const Item = ({ title, year, place, image }) => (
    <View style={styles.item}>
      <Image source={image} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.year}>{year}</Text>
      <Text style={styles.place}>{place}</Text>
    </View>
  );
  
  const Positions = () => {
    return (
      <View>
        <Text style={styles.header}>Positions</Text>
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={POSITIONS}
          renderItem={({ item }) => (
            <Item
              title={item.title}
              year={item.year}
              place={item.place}
              image={item.image}
            />
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    );
  };
  
  export default Positions;
  
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
        width: 120,
    },
    image: {
      width: 100, // Adjust the width and height as needed
      height: 100,
      borderRadius: 5,
    },
    title: {
      fontWeight: 'bold',
      fontSize: 18,
    },
    year: {
      fontWeight: '600',
      fontSize: 15,
    },
    place: {
      fontSize: 15,
    },
  });
  
  
  
  
  