import Icon from 'react-native-vector-icons/Ionicons';
import { StyleSheet, Text, View, ScrollView, StatusBar, Pressable } from 'react-native';

export default function App() {
  return (
    <View style={styles.main}>
      <ScrollView style={styles.scroll} contentContainerStyle={{flexGrow: 1}}>
        
        <View style={styles.head}>
          <Icon name="menu" size={30} color= "#fff"></Icon>
          <Text>test</Text>
        </View>
        <View style={styles.body}>      
          <Text>Autonomous</Text>
          <View style={styles.AutoContainer}></View>
          <Text>Teleop</Text>
          <View style={styles.TeleOpContainer}></View>
          <Text>End Game</Text>
          <View style={styles.EgContainer}></View>
          
          <Pressable
            onPress={() => {
              
            }}
            style={({pressed}) => [
              {
                backgroundColor: pressed ? '#bae8e8' : '#2c698d',
              },
              styles.submit,
            ]}>
            {({pressed}) => (
              <Text style={styles.text}>{pressed ? 'Submit' : 'Submitted'}</Text>
            )}
          </Pressable>
        </View>
      </ScrollView>
      </View>
  );
}


// color palatte can be found at https://colors.muz.li/palette/272643/ffffff/e3f6f5/bae8e8/2c698d
const styles = StyleSheet.create({
  AutoContainer: {
    margin: '2%',
    flex: .65,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e3f6f5',
    width: '95%',
    alignSelf: 'center',
    borderRadius: 20,
  },
  TeleOpContainer: {
    margin: '2%',
    flex: .65,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e3f6f5',
    width: '95%', 
    alignSelf: 'center',
    borderRadius: 20,
  },
  EgContainer: {
    margin: '2%',
    flex: .5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e3f6f5',
    width: '95%',
    alignSelf: 'center',
    borderRadius: 20,
  },
  submit:{
    
    alignItems: 'center',
    justifyContent: 'center', 
    alignSelf: 'flex-end',
    borderRadius:20,
    marginRight: '7%',
    marginBottom: '2%',
    marginTop: 10,
    // bottom: '5%',
    padding: 12,
    // position: 'absolute',
    
  },
  Spacer: {
    flex: .5,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    alignSelf: 'center'
  },

  head:{
    flex: 1.5,
    alignItems:'flex-start',
    backgroundColor: '#272643',
    justifyContent: 'center',
    width: '100%',
  },
  body:{
    flex: 20,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: 10
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
