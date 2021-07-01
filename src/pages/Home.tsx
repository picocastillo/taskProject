import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useEffect } from 'react';
import  { Text,View,useWindowDimensions } from 'react-native';
import { TabView, SceneMap,TabBar } from 'react-native-tab-view';
import  AllRoute  from './AllRoute';

  
  const CompleteRoute = () => (
    <View style={{ flex: 1, backgroundColor: 'white' }} />
  );
export const Home: React.FC = () => {
    
    const layout = useWindowDimensions();

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
      { key: 'all', title: 'All' },
      { key: 'complete', title: 'Complete' },
      { key: 'uncomplete', title: 'Uncomplete' },
      { key: 'favorite', title: 'Favorite' },
    ]);
  
    const renderScene = SceneMap({
      all: AllRoute,
      complete: CompleteRoute,
      uncomplete: CompleteRoute,
      favorite: CompleteRoute,
    });
    const renderTabBar : React.FC = (props) => {
        return (
            <TabBar
                style={{backgroundColor: 'white', height:55}}
                labelStyle={{color: 'black', fontSize: 12, fontWeight: 'bold', backgroundColor: 'black'}}
                {...props}
                indicatorStyle={{backgroundColor: 'black', width: 20, marginLeft: 45}}
            />
        );
      }
    return (
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        indicatorStyle={{ color: 'black' }}
        style={{ backgroundColor: 'white' }}
        labelStyle={{backgroundColor: 'white'}}
        initialLayout={{ width: layout.width }}
        renderTabBar={renderTabBar}

      />
    );
};
