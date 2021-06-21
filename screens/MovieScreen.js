import React,{useState,useEffect} from 'react';
import { View ,Text,FlatList,Image,Dimensions,ScrollView} from 'react-native';


const windWith= Dimensions.get('window').width;
const windowHeight= Dimensions.get('window').height;
const MovieScreen = () => {
    const [movies,setMovies]=useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(()=>{
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
    return (<Image 
    source={{uri:`${item.banner}`}} style={{width:windWith/3,height:windowHeight/3}}>
        
    </Image>)
    
    }
    return(
       
        <View>
           
            {movies.map(cat=>{
               return(<View key={cat.cat_id}>
                <Text style={{fontSize:32}} key={cat.custom_cat_name}>{cat.custom_cat_name}</Text>
              
                <FlatList data={cat.movies}
                keyExtractor={(item,i)=>i}
                renderItem={Item}
                numColumns={col}
                ></FlatList>
               
               </View>)
})}
        </View>
       
    )
}

export default MovieScreen;
