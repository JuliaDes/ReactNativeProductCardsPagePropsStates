import { View, StyleSheet } from 'react-native';
import * as React from 'react';
import { Card, Title } from 'react-native-paper';


const CardHeader = ( props ) => {
    const { price } = props;
return (
    <View>
        <Card.Content style={styles.titl}>
  <Title style={styles.title}>{ price} € </Title>
  </Card.Content>
   </View>
   

);
};

export default CardHeader;

const styles = StyleSheet.create({
    title:{
    //   flex:1,
      color: "yellow",
    },
    titl:{
        alignItems: "flex-end",
    }

  });