import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import RootNavigator from './Navigation/RootNaviator';
import store from './Components/Store';

export default function App() {
  return (
    
    <Provider style={styles.container}  store={store}>
      <StatusBar style="auto" />
      <RootNavigator />
      
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    
    
  },
});
