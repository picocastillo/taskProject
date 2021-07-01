import React, { useCallback, useEffect } from 'react';
import { Container } from '../utilStyles';
import ListChekBoxes from '../shares/ListCheckBoxes';
import MyButton from '../shares/MyButton';
import { useNavigation } from '@react-navigation/native';
import { connect } from 'react-redux';
import {setTaskComplete,setTaskUnComplete} from '../actions/TaskActions'



 const AllRoute: React.FC = ({tasks,setTaskComplete,setTaskUnComplete}) => {
  const navigation = useNavigation();
  const [data,setData] = React.useState([])
  useEffect(() => {
    
    navigation.addListener(
      'focus',
       () => { 
        setData(tasks)
      },
    );
    setData(tasks)
      console.log(tasks)
  },[tasks])

    const onPressCheckbox = (index) => {
      if (tasks[index].complete){
        setTaskUnComplete(index);
      }else {
        setTaskComplete(index);
      }
    }
     
    return (
        <Container>
          <ListChekBoxes onPressCheckbox={onPressCheckbox}  data={data} />
          <MyButton onPress={() => navigation.navigate('AddTask')} title="Add task"/>
        </Container>
    )
}



const mapStateToProps = (tasks) => {
  return tasks;
}

export default connect(
mapStateToProps,
{
  setTaskComplete,
  setTaskUnComplete
}
)(AllRoute)

