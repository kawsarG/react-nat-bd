import  React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from './HomeScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AboutScreen from './AboutScreen';
import SupportScreen from './SupportScreen';
import MovieScreen from './MovieScreen';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import PackagesScreen from './PackagesScreen';
import MoviDetailScreen from './MoviDetailScreen'
import { forHorizontalIOS } from '@react-navigation/stack/lib/typescript/src/TransitionConfigs/CardStyleInterpolators';

const HomeStack = createStackNavigator();
const AboutStack = createStackNavigator();
const SupportStack = createStackNavigator();
const MovieStack = createStackNavigator();
const PackagesStack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const MainTabScreen=()=>{
    return (
        <Tab.Navigator
      initialRouteName="Home"
      activeColor="#fff"
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarColor:'#009387',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="About"
        component={AboutStackScreen}
        options={{
          tabBarLabel: 'About',
          tabBarColor:'#009387',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Support"
        component={SupportStackScreen}
        options={{
          tabBarLabel: 'Support',
          tabBarColor:'#009387',
          tabBarIcon: ({ color }) => (
            <MaterialIcon name="support-agent" color={color} size={26} />
          ),
        }}
      />
      {/* <Tab.Screen
        name="Movie"
        component={MovieStackScreen}
        options={{
          navigationOptions:()=>{
            return {
              tabBarVisible:false,
            };
         },
          tabBarLabel: 'Movies',
          tabBarColor:'#009387',
          tabBarIcon: ({ color }) => (
            <MaterialIcon name="local-movies" color={color} size={26} />
          ),
        }}
      /> */}
    </Tab.Navigator>
    )
}
export default MainTabScreen;

const HomeStackScreen=({navigation})=>(
    <HomeStack.Navigator  screenOptions={{
      headerStyle:{
        backgroundColor:'#009387'
      },
    
      headerTintColor:'#fff',
      headerTitleStyle:{
        alignSelf: 'center' ,
        fontWeight:'bold'
      }
    }}>
    <HomeStack.Screen name="HomeTab" component={HomeScreen} options={{
      title:'Home',
      headerLeft:()=>(
        <Icon.Button name="ios-menu" size={25} backgroundColor="#009387"
        onPress={()=>navigation.openDrawer()}></Icon.Button>
      )
    }} />
     <HomeStack.Screen name="Packages" options={{
       headerShown:false
     }} component={PackagesScreen} />
    
    </HomeStack.Navigator>
  )
  
  const AboutStackScreen=({navigation})=>(
    <AboutStack.Navigator screenOptions={{
      headerStyle:{
        backgroundColor:'#009387'
      },
      headerTintColor:'#fff',
      headerTitleStyle:{
        alignSelf: 'center' ,
        fontWeight:'bold'
      }
    }}>
    <AboutStack.Screen name="About" component={AboutScreen} options={{
      headerLeft:()=>(
        <Icon.Button name="ios-menu" size={25} backgroundColor="#009387"
        onPress={()=>navigation.openDrawer()}></Icon.Button>
      )
    }}/>
    
    </AboutStack.Navigator>
  )

  const SupportStackScreen=({navigation})=>(
    <SupportStack.Navigator screenOptions={{
      headerStyle:{
        backgroundColor:'#009387'
      },
      headerTintColor:'#fff',
      headerTitleStyle:{
        alignSelf: 'center' ,
        fontWeight:'bold'
      }
    }}>
    <SupportStack.Screen name="Support" component={SupportScreen} options={{
      headerLeft:()=>(
        <Icon.Button name="ios-menu" size={25} backgroundColor="#009387"
        onPress={()=>navigation.openDrawer()}></Icon.Button>
      )
    }}/>
    </SupportStack.Navigator>
  )


  // const MovieStackScreen=({navigation,route})=>{
    
  //   return (<MovieStack.Navigator
  //   screenOptions={{
  //     tabBarLabel:'fuck'
  //   }}
  //   >
  //     <MovieStack.Screen name="Movie" component={MovieScreen} options={({navigation,route})=>({
  //       headerShown:false,
  //     })}/>
  //      <MovieStack.Screen name="Detail" options={{
  //        headerShown:false,
  //      }} component={MoviDetailScreen} />
  //     </MovieStack.Navigator>)
  // }



