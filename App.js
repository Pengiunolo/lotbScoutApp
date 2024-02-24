import Icon from 'react-native-vector-icons/Ionicons';
import { StyleSheet, Text, View, ScrollView, StatusBar, Pressable } from 'react-native';

export default function App() {
  return (
    <View style={styles.main}>
      <ScrollView style={styles.scroll} contentContainerStyle={{flexGrow: 1}}>
        
        <View style={styles.head}>
          <Pressable
          onPress={() => {
              
            

            }}>
            
            <Icon name="menu" size={30} color= "#000000"></Icon>
          
          </Pressable>
          
        
        </View>
        <View style={styles.body}>      
        {/* Autonomous code group */}
          <Text>Autonomous</Text> 
          <View style={styles.AutoContainer}>
            <Text style={styles.textStyle}> Sample 1</Text>
            <Text style={styles.textStyle}> Sample 2</Text>
            <Text style={styles.textStyle}> Sample 3</Text>
            <Text style={styles.textStyle}> Sample 4</Text>
            <Text style={styles.textStyle}> Sample 5</Text>
          </View>
         
          {/* TeleOp code group */}
          <Text>Teleop</Text>
          <View style={styles.TeleOpContainer}>
          <Text style={styles.textStyle}> Sample 1</Text>
            <Text style={styles.textStyle}> Sample 2</Text>
            <Text style={styles.textStyle}> Sample 3</Text>
            <Text style={styles.textStyle}> Sample 4</Text>
            <Text style={styles.textStyle}> Sample 5</Text>
          </View>
          
          {/* EG code group */}
          <Text>End Game</Text>
          <View style={styles.EgContainer}>
          <Text style={styles.textStyle}> Sample 1</Text>
            <Text style={styles.textStyle}> Sample 2</Text>
            <Text style={styles.textStyle}> Sample 3</Text>
            <Text style={styles.textStyle}> Sample 4</Text>
            <Text style={styles.textStyle}> Sample 5</Text>
          </View>
          
          <Pressable
            onPress={() => {
              
            }}
            style={({pressed}) => [
              {
                backgroundColor: pressed ? '#fc8b72' : '#F24822',
              },
              styles.submit,
            ]}>
            {({pressed}) => (
              <Text style={styles.text}>{pressed ? 'Submited' : 'Submit'}</Text>
            )}
          </Pressable>
        </View>
      </ScrollView>
      </View>
  );
}



// $$$$$$$$\ $$\       $$\                 $$$$$$\                 $$$$$$$$\ $$\                        $$$$$$\            $$\                           $$$$$$$\           $$\            $$\     $$\               
// \__$$  __|$$ |      \__|                \_$$  _|                \__$$  __|$$ |                      $$  __$$\           $$ |                          $$  __$$\          $$ |           $$ |    $$ |              
//    $$ |   $$$$$$$\  $$\  $$$$$$$\         $$ |   $$$$$$$\          $$ |   $$$$$$$\   $$$$$$\        $$ /  \__| $$$$$$\  $$ | $$$$$$\   $$$$$$\        $$ |  $$ |$$$$$$\  $$ | $$$$$$\ $$$$$$\ $$$$$$\    $$$$$$\  
//    $$ |   $$  __$$\ $$ |$$  _____|        $$ |  $$  _____|         $$ |   $$  __$$\ $$  __$$\       $$ |      $$  __$$\ $$ |$$  __$$\ $$  __$$\       $$$$$$$  |\____$$\ $$ |$$  __$$\\_$$  _|\_$$  _|  $$  __$$\ 
//    $$ |   $$ |  $$ |$$ |\$$$$$$\          $$ |  \$$$$$$\           $$ |   $$ |  $$ |$$$$$$$$ |      $$ |      $$ /  $$ |$$ |$$ /  $$ |$$ |  \__|      $$  ____/ $$$$$$$ |$$ |$$$$$$$$ | $$ |    $$ |    $$$$$$$$ |
//    $$ |   $$ |  $$ |$$ | \____$$\         $$ |   \____$$\          $$ |   $$ |  $$ |$$   ____|      $$ |  $$\ $$ |  $$ |$$ |$$ |  $$ |$$ |            $$ |     $$  __$$ |$$ |$$   ____| $$ |$$\ $$ |$$\ $$   ____|
//    $$ |   $$ |  $$ |$$ |$$$$$$$  |      $$$$$$\ $$$$$$$  |         $$ |   $$ |  $$ |\$$$$$$$\       \$$$$$$  |\$$$$$$  |$$ |\$$$$$$  |$$ |            $$ |     \$$$$$$$ |$$ |\$$$$$$$\  \$$$$  |\$$$$  |\$$$$$$$\ 
//    \__|   \__|  \__|\__|\_______/       \______|\_______/          \__|   \__|  \__| \_______|       \______/  \______/ \__| \______/ \__|            \__|      \_______|\__| \_______|  \____/  \____/  \_______|
// color palatte can be found at https://colors.muz.li/palette/fc8b72/f24822/519ae3/cbe5ff/5f88cc
const styles = StyleSheet.create({
  AutoContainer: {
    margin: '2%',
    flex: .65,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#757575',
    width: '95%',
    alignSelf: 'center',
    borderRadius: 20,
  },
  textStyle: {
    fontSize: 20,
    color:'black',
    fontWeight:'normal',
    textAlign:'left',
  },
  TeleOpContainer: {
    margin: '2%',
    flex: .65,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#757575',
    width: '95%', 
    alignSelf: 'center',
    borderRadius: 20,
  },
  EgContainer: {
    margin: '2%',
    flex: .5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#757575',
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
  head:{
    flex: 1,
    flexDirection: 'row',
    alignItems:'center',
    backgroundColor: '#757575',
    justifyContent: 'space-between',
    width: '100%',
    padding: 10,
    
  },
  body:{
    flex: 20,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: 10,
  
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
