import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/Home';
import Signup from './src/Signup';

import Login from './src/Login';
// import LandingPage from './src/landing_page'; // Import your LandingPage component

import {  MainPage,UserDetails, UserList,MapPage, Interior } from './src/screens';



const Stack = createNativeStackNavigator();

const App=()=> {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
      
      <Stack.Screen name="MainPage" component={MainPage}/>         
      <Stack.Screen name="Interior" component={Interior}/>         
         <Stack.Screen name="MapPage" component={MapPage} />
        <Stack.Screen name="UserList" component={UserList} />
        <Stack.Screen name="UserDetails" component={UserDetails} />
        <Stack.Screen name="Home" component={Home} />                                                    
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Login" component={Login} />
       
        
      </Stack.Navigator>
    </NavigationContainer>
  )}

// Home - Login and Signup page
//Main Page - Architect and Main page


export default App;

