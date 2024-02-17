
import { StyleSheet, Text, View, ScrollView, StatusBar } from 'react-native';

export default function App() {
  return (
    <View style={styles.main}>
      <ScrollView style={styles.scroll} contentContainerStyle={{flexGrow: 1}}>
        
        <View style={styles.head}>
          <Text>test</Text>
        </View>
        <View style={styles.body}>      
          <Text>Autonomous</Text>
          <View style={styles.container}></View>
          <Text>Teleop</Text>
          <View style={styles.container}></View>
          <Text>End Game</Text>
          <View style={styles.container}></View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#666',
    width: '80%',
    alignSelf: 'center'
  },
  head:{
    flex: 2,
    backgroundColor: '#00ff',
    justifyContent: 'flex-start',
    width: '100%'
  },
  body:{
    flex: 20,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  main:{
    flex:1,
    // alignItems: 'center',
    paddingTop: StatusBar.currentHeight,
  },
  scroll:{
    // flex:1,
    // flexGrow: 0,
  }

  
});
