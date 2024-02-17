
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    
    <View style={styles.container}>
      <view style={styles.topbar}>

      </view>
      
      <view style={styles.mainBody}>
        <Text>Open up App.js to start working on your app!</Text>
      </view>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    
    justifyContent: 'center',
  },
  topbar:{
    flex: 1,
    alignItems: "center",
    backgroundColor: "#00f"
  },
  mainBody:{
    flex: 5,
  },
});
