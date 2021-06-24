import React, { useEffect, useState } from 'react';
import { View,ImageBackground 
  ,Dimensions,Text,StyleSheet,
 FlatList,TouchableOpacity,Platform} from 'react-native';
import {sections} from '../Services/services';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Orientation from 'react-native-orientation';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const col=2;


const HomeScreen = ({navigation}) => {
  const [or,Setor]=useState('Portrait')
  const isTv= Platform.isTV
  useEffect(()=>{
   
    Orientation.getOrientation((err, orientation) => {
    if(!isTv)
    {
      Orientation.lockToLandscape();
      Setor('LANDSCAPE')
    }else{
      Setor('PORTRAIT')
    }
    
});
  },[])
  const OnPress=(item)=>{
      navigation.navigate(`${item.name}`)
  }

  const renderItem = ({item}) => (
    <TouchableOpacity onPress={()=>{navigation.navigate(`${item.name}`)}}>
       <View style={styles.item}>
        <Icon name={item.icon} style={[styles.iconStyle,{backgroundColor:`${item.color}`,color:'#fff'}]} size={50}></Icon>
        <Text style={styles.title}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );
  
  {if(or==='PORTRAIT'){
      return <View>
        <Text>{or}</Text>
      </View>
  }else{
    return <View>
        <Text>{or}</Text>
      </View>
  }
}
  
    // return(
    // //   <View style={styles.container}>
    // //     <ImageBackground
    // //     source={require('../assets/images/internet.jpg')}
    // //     style={{ height:250,width:'100%',alignItems:'center',justifyContent:'center'}}
    // //     >
    // //     </ImageBackground>
    // //   <FlatList
    // //     data={sections}
    // //     renderItem={renderItem}
    // //     keyExtractor={item => item.id}
    // //     numColumns={col}
    // //     style={{marginTop:4,marginVertical:10}}
    // //   />
    // // </View>
    // )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center'
  },
  iconStyle:{
    backgroundColor:'gray',
    padding: 30,
    borderRadius:15,
  },
  item: {
    width:windowWidth/2.1,
    height:(windowHeight-320)*.4,
    alignItems:'center',
    justifyContent:'center',
  },
  title: {
    fontSize: 20,
    color:'#000'
  },
});
export default HomeScreen;
