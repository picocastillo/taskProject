import React, { useCallback, useEffect } from 'react';
import { Container } from '../utilStyles';
import ListChekBoxes from '../shares/ListCheckBoxes';
import MyButton from '../shares/MyButton';
import { useNavigation } from '@react-navigation/native';
import { connect } from 'react-redux';
import {changeState} from '../actions/TaskActions'
import { ITask } from '../Interfaces';
import { useFocusEffect } from '@react-navigation/native';

 const CompleteRoute: React.FC = ({tasks,changeState}) => {
  const navigation = useNavigation();
  const [data,setData] = React.useState([])

  useFocusEffect(
    React.useCallback(() => {
      let isActive = true;
      console.log("object")
  
      return () => {
        isActive = false;
      };
    }, [])
  );

    return (
        <Container>
         
          <ListChekBoxes changeState={changeState} data={tasks} />
        </Container>
    )
}



const mapStateToProps = ({tasks}) => {
  const completed = tasks.length>0 ? tasks.filter((e: ITask) => e.complete===true) : [];
  return {tasks: completed};
}
export default connect(
mapStateToProps,
{
  changeState
}
)(CompleteRoute)

