import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import HomeScreen from './Screens/HomeScreen/HomeScreen';
import CommunityScreen from './Screens/CommunityScreen/CommunityScreen';
import MediaScreen from './Screens/MediaScreen/MediaScreen';
import MinistryScreen from './Screens/MinistryScreen/MinistryScreen';
import ProfileScreen from './Screens/ProfileScreen/ProfileScreen';
import DetailScreen from './Screens/HomeScreen/DetailScreen';
import DetailScreenCom from './Screens/CommunityScreen/DetailScreen'

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function StackScreenHome() {
  return (
    <Stack.Navigator>
      <Stack.Screen options={{headerShown:false}}  name='HomeScreen' component={HomeScreen}/>
      <Stack.Screen name='DetailNews' component={DetailScreen}/>
    </Stack.Navigator>
  )
}

function StackCommunityScreen(){
  return(
    <Stack.Navigator>
      <Stack.Screen options={{headerShown:false}} name='CommunityScreen' component={CommunityScreen}/>
      <Stack.Screen name='DetailComm' component={DetailScreenCom} />
    </Stack.Navigator>
  )
}

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen options={{headerShown:false}} name="Home" component={StackScreenHome} />
      <Tab.Screen options={{headerShown:false}} name="Community" component={StackCommunityScreen} />
      <Tab.Screen name="Ministry" component={MinistryScreen} />
      <Tab.Screen name="Media" component={MediaScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>

  );
}
