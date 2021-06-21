import React from 'react';
import { View, StyleSheet ,Image} from 'react-native';
import {
    useTheme,
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';



export function DarwerContent(props){
    return (
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{flexDirection:'column',marginTop: 15 ,alignItems:'center',justifyContent:'center',}}>
                            <Image 
                                source={
                                    require('../assets/images/cn.png')
                                }
                                style={{ height:100,width:120}}
                            />
                            <View >
                                <Title style={styles.title}>Circle Network</Title>
                            </View>
                        </View>

                    </View>

                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem 
                            icon={({color, size}) => (
                                <MaterialIcon 
                                name="home" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Home"
                           onPress={()=>props.navigation.navigate('HomeTab')}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon
                                name="bell" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="About"
                            onPress={()=>props.navigation.navigate('About')}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <MaterialIcon
                                name="support-agent" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Support"
                            onPress={()=>props.navigation.navigate('Support')}
                        />
                      
                        <DrawerItem 
                            icon={({color, size}) => (
                                <MaterialIcon
                                name="local-movies" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Movies"
                            onPress={()=>props.navigation.navigate('Movie')}
                        />
                    </Drawer.Section>
                   
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem 
                    icon={({color, size}) => (
                        <Icon 
                        name="exit-to-app" 
                        color={color}
                        size={size}
                        />
                    )}
                    label="www.yetfix.com"
                   
                />
            </Drawer.Section>
        </View>
    )
}

const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      paddingLeft: 20,
    },
    title: {
      fontSize: 26,
      marginTop: 3,
      marginLeft:20,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
  });
