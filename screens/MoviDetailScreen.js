import React, { createRef, useEffect, useState } from 'react';
import {View,Text,StyleSheet, Button,Dimensions,BackHandler,Alert} from 'react-native';
import Video from 'react-native-video';
import Orientation from 'react-native-orientation';
import Icon from 'react-native-vector-icons/Ionicons';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
export default MoviDetailScreen =({navigation,route})=>{
       const  {videoURL} = route.params;
       console.log(videoURL);
       

       useEffect(()=>{
        Orientation.getOrientation((err, orientation) => {
                
              Orientation.lockToLandscape();
        });
       },[])
     
     
        return(
            // <View style={{flex:1,}}>
            //     <Player
            //     source={require('../assets//mov_bbb.mp4')}
            //     ref={player}
            //     onBack={(navigation)=>navigation.navigate('Video')}
            //     ></Player>
            // </View>



            <View style={{flex:1,position:'relative'}}>
                <Video source={videoURL? {uri:videoURL}:require('../assets//mov_bbb.mp4')}
        
          controls
           
            resizeMode="cover"
            style={{flex:1,}}
            />
             <Icon style={styles.iconStyle} size={40} 
             name="arrow-back-circle-sharp" onPress={()=>{
                 Orientation.lockToPortrait();
                 navigation.navigate('Home');
             }}></Icon>
            </View>
        )
    
}

const styles = StyleSheet.create({
    iconStyle:{
        position:'absolute',
        top:0,
        left:5,
       color:'#fff'
    }
})



