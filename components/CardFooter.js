import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, Title } from 'react-native-paper';
import LikeBtn from "./LikeBtn";

const CardFooter = (props) => {
    const{size, likes} = props;
    return(
  <Card>
      <View style={styles.row}>
      <Title>Taille {size}</Title>
      <Title>{likes}</Title>
      </View>
  </Card>

);
};
export default CardFooter;

const styles = StyleSheet.create({
    row:{
        flexDirection:"row",
        justifyContent:"space-between",
    }
 
   });