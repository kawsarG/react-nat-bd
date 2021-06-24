import { NavigationContainer } from '@react-navigation/native';
import React,{useState,useEffect} from 'react';
import { View ,Text,FlatList,Image,Dimensions,ActivityIndicator,
    SafeAreaView, StyleSheet,ScrollView,Alert} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import Orientation from 'react-native-orientation'
const windWith= Dimensions.get('window').width;
const windowHeight= Dimensions.get('window').height;
const MovieScreen = ({navigation,route}) => {
    const [movies,setMovies]=useState([]);
    const [isLoading, setLoading] = useState(true);
  

    useEffect(()=>{

        
        Orientation.getOrientation((err, orientation) => {
            Orientation.lockToPortrait();
          
      });
       fetch('http://circleftp.net/category_by_post').
       then(res=>res.json()).
       then(res=>{
        setMovies(res);
        setLoading(false)
       }).
       catch(err=>console.log(err))
    },[]);
    const col=3;
    const Item =({item})=>{
    return (  
              <TouchableOpacity 
              onPress={()=>{
               
                navigation.navigate('Detail',{
                  videoURL:`${item.media}`
              })}}>
                    <Image 
                    source={{uri:`${item.banner}`}} 
                    style={{width:windWith/2.7,height:200}}>
                    </Image>
                </TouchableOpacity> 
           )
    }
    return(
      <SafeAreaView >
      {isLoading? (<View style={{marginTop:130}}><ActivityIndicator size="large" color="#000000"/></View>):( <View style={{backgroundColor:'#000'}}>
            {movies.map(cat=>
               (<View key={cat.cat_id}>
                    <Text style={styles.catStyle} 
                    key={cat.custom_cat_name}>{cat.custom_cat_name}</Text>
                
                    <FlatList data={cat.movies}
                    keyExtractor={(item,i)=>i}
                    renderItem={Item}
                    horizontal={true}
                    ></FlatList>
               
               </View>)
            )}
        </View>)}
        </SafeAreaView>
      
       
    )
}

const styles=StyleSheet.create({
    catStyle:{
        fontSize:32,
        fontWeight:'bold',
        color:'#fff',
        paddingVertical:10,
        alignSelf:'center'
    }
})

export default MovieScreen;
