
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
          <View style={styles.AutoContainer}></View>
          <Text>Teleop</Text>
          <View style={styles.TeleOpContainer}></View>
          <Text>End Game</Text>
          <View style={styles.EgContainer}></View>
          <View style={styles.Spacer}></View>
          
          <Text style={styles.submit} > submit </Text>
          
        </View>
      </ScrollView>
      </View>
  );
}

const styles = StyleSheet.create({
  AutoContainer: {
    flex: .65,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#666',
    width: '95%',
    alignSelf: 'center',
    borderRadius: 20,
  },
  TeleOpContainer: {
    flex: .65,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ff1900',
    width: '95%', 
    alignSelf: 'center',
    borderRadius: 20,
  },
  EgContainer: {
    flex: .5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0008ff',
    width: '95%',
    alignSelf: 'center',
    borderRadius: 20,
  },
submit:{
flex: .25,
alignItems: 'center',
justifyContent: 'center',
backgroundColor:'#fa0202',
width: '50%',
alignSelf: 'center',
borderRadius:20,
},
Spacer: {
flex: .5,
alignItems: 'center',
justifyContent: 'center',
width: '100%',
alignSelf: 'center'
},

  head:{
    flex: .5,
    alignItems:'center',
    backgroundColor: '#00ff',
    justifyContent: 'flex-start',
    width: '100%',
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
  },

  
});
