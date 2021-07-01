import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Home } from './src/pages/Home';
import AddTask  from './src/pages/AddTask';
import { RightIcons } from './src/shares/RightIcons';


const Stack = createStackNavigator();








export const NavigationProvider: React.FC = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Board" >
      <Stack.Screen name="Board" component={Home} 
        options={({ navigation, route }) => ({
          // headerBackground: (props) => <Header bg_white={true} />,
          // headerLeft: props => <Icon name='dots-vertical' type='material-community' containerStyle={styles.headerLeft} size={40}  color={theme.point_tab} onPress={(props) => {navigation.toggleDrawer()}}/>,
          headerRight: props => <RightIcons />,
          // headerTransparent: true,
          // title: "",
          headerTitleStyle: {fontWeight: 'bold'}
        })}
      
      />
      <Stack.Screen name="AddTask" component={AddTask} 
      
      />
    </Stack.Navigator>
  </NavigationContainer>
);
