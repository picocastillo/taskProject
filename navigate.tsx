import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Home } from './src/pages/Home';
import AddTask  from './src/pages/AddTask';
import { RightIcons } from './src/shares/RightIcons';
import { View } from 'react-native';
import { my_gray } from './src/constants';
import { Entypo } from '@expo/vector-icons'; 

const Stack = createStackNavigator();

const MyHeader = () => (
  <View style={{ borderBottomColor: my_gray,borderBottomWidth: 4, height: 100, backgroundColor: 'white'}}  />
)






export const NavigationProvider: React.FC = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Board" >
      <Stack.Screen name="Board" component={Home} 
        options={({ navigation, route }) => ({
          headerBackground: (props) => <MyHeader />,
          // headerLeft: props => <Icon name='dots-vertical' type='material-community' containerStyle={styles.headerLeft} size={40}  color={theme.point_tab} onPress={(props) => {navigation.toggleDrawer()}}/>,
          headerRight: props => <RightIcons />,
          // headerTransparent: true,
          // title: "",
          headerTitleStyle: {fontWeight: 'bold'}
        })}
      
      />
      <Stack.Screen name="AddTask"
      
      options={({ navigation, route }) => ({
        headerBackground: (props) => <MyHeader />,
        // headerLeft: props => <Icon name='dots-vertical' type='material-community' containerStyle={styles.headerLeft} size={40}  color={theme.point_tab} onPress={(props) => {navigation.toggleDrawer()}}/>,
        // headerTransparent: true,
        headerLeft: (props) => <Entypo style={{marginLeft: 10}} onPress={()=> {navigation.goBack()}} name="chevron-left" size={24} color="black" />, 
        // title: "",
        headerTitleStyle: {fontWeight: 'bold'}
      })}
      component={AddTask} 
      
      />
    </Stack.Navigator>
  </NavigationContainer>
);
