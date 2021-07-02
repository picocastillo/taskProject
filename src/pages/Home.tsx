import React from 'react';
import  { useWindowDimensions } from 'react-native';
import { TabView, SceneMap,TabBar } from 'react-native-tab-view';
import { my_gray } from '../constants';
import  AllRoute  from './AllRoute';
import  {LabelTab,TitleTab}  from '../utilStyles';
import  CompleteRoute  from './CompleteRoute';
import  UncompleteRoute  from './UncompleteRoute';
  
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
      uncomplete: UncompleteRoute,
      favorite: CompleteRoute,
    });

    const renderLabelTabs = ({ route, focused, color })=> {
      if (focused)
        return <TitleTab>{route.title}</TitleTab>
      else
        return <LabelTab>{route.title}</LabelTab>  
    }

    const renderTabBar : React.FC = (props) => {
        return (
            <TabBar
                style={{backgroundColor: 'white', height:55,marginTop: 20, borderBottomWidth: 2, borderColor: my_gray}}
                labelStyle={{ fontSize: 12, fontWeight: 'bold', backgroundColor: 'black',color: 'red'}}
                {...props}
                activeColor={'#252526'}
                indicatorStyle={{backgroundColor: '#252526', width: 20, marginLeft: 45}}
                renderLabel={renderLabelTabs}
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
