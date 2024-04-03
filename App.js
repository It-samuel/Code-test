import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ContactScreen from './Screens/ContactScreen';
import AddContacts from './Screens/AddContacts';

export default function App() {
  return (
    
    <View style={styles.container}>
      <StatusBar style="auto" />
      <AddContacts />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    
    
  },
});
