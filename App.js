import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import CardMake from './components/CardMake';

export default function App() {
  return (
    <View style={styles.container}>


     <CardMake/>
      

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
