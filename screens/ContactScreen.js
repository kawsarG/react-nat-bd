import React, { useEffect, useState } from 'react';
import { View ,Text, FlatList} from 'react-native';

const ContactScreen = () => {
    const [data,setData] = useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((json) => setData(json));
    },[])
    renderItem=({item})=>{
        return(
            <View>

        <Text>{item.id}:{item.title}</Text>
            </View>
        )
    }
    return(
        <View>
            <FlatList data={data}
            keyExtractor={(item)=>item.id.toString()}
            renderItem={renderItem}>
            </FlatList>
        </View>
    )
}

export default ContactScreen;
