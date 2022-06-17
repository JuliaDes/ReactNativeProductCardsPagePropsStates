import * as React from 'react';
import { View } from 'react-native';
import { Card, Title, Text } from 'react-native-paper';


const CardBody = ( props ) => {
    const { photo, title, desc} = props;
return (
    <View>
        <Card>
        <Card.Cover source={ photo } />
        <Title> {title }</Title>
        <Text> { desc} </Text>
  </Card>
   </View>
   
);
};

export default CardBody;