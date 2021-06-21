import React, { useEffect, useState } from 'react';
import { View ,Text,FlatList,TouchableOpacity,Dimensions,ActivityIndicator, StyleSheet, Image} from 'react-native';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const col=2;
const PackagesScreen = ({navigation}) => {
  const [packages,setPackages]=useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(()=>{
    fetch('http://circleapp-backend.herokuapp.com/packages').then(res=>res.json()).
    then(res=>setPackages(res)).
    catch((error) => console.error(error))
    .finally(() => setLoading(false));
  },[]);

  const renderItem = ({item}) => (
    <TouchableOpacity style={styles.item}>
       <View style={styles.card}>
          <Text style={styles.title}>Package Name:{item.name}</Text>
          <Text style={{fontSize:25}}>Package Bandwith:{item.band} Mbps</Text>
          <Text  style={{fontSize:25}}>Package Price:{item.price} BDT.</Text>
       </View>
    </TouchableOpacity>
  );
    return(
        
          <View style={{flex:1,alignItems:"center",justifyContent:'center'}}>
            <Image source={require('../assets/images/pac.jpg')}
            style={styles.img}></Image>
         
          {isLoading ? <ActivityIndicator size="large" color="#0000ff"/> :
           (
            <FlatList data={packages}
          keyExtractor={(item)=>item._id}
          renderItem={renderItem}
          ></FlatList>
          )}
         
          </View>
      
      )
}

const styles = StyleSheet.create({
  top:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    width:'100%'
  },
  bot:{
    flex:2,
    justifyContent:'center',
    alignItems:'center',
  },
  img:{
    width:'100%',
    height:250,
    borderBottomLeftRadius:5,
    borderBottomRightRadius:5,
    marginBottom:10
  },
  item:{
    width:windowWidth-20,
    alignItems:'center',
    justifyContent:'center',
    color:'#fff'
  },
  card:{
    borderRadius:10,
   borderWidth:2,
    color:"#fff",
    width:windowWidth-20,
    height:200,
    alignItems:'center',
    justifyContent:'center',
    marginTop:5,
    color:'#fff'
  },
  title:{
    fontSize:32
  }
})
export default PackagesScreen;
