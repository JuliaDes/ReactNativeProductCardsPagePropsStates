import React from "react";
import { View, FlatList, StyleSheet} from 'react-native';
import {
  Card,
} from "react-native-paper";
import CardHeader from "./CardHeader";
import CardBody from "./CardBody";
import CardFooter from "./CardFooter";
import LikeBtn from "./LikeBtn";
import data from "../data/data";



const CardMake = () => {
 
  return (
    <FlatList numColumns={2} data={data} renderItem={({ item }) => (
      <View style={{ flex: 1 }}>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ flex: 1, }}>
            <Card style={{ borderColor: 'black', borderWidth: 2, margin: 6, marginTop: 40, }}>
              <Card.Content>
                <CardHeader price={item.price} />
                <CardBody photo={item.photo} title={item.title} desc={item.desc} />
                <View style={ styles.row}>
                  <CardFooter size={item.size} likes={item.likes} />
                <LikeBtn likes={item.likes}  />
                </View>
              </Card.Content>
            </Card>
          </View>
        </View>
      </View>
    )} />
  );
};
   

  
export default CardMake;

const styles = StyleSheet.create({
  row:{
      flexDirection:"row",
      justifyContent:"space-between",
  }

 });