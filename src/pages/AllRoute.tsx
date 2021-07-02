import React, {  useEffect } from 'react';
import { Container } from '../utilStyles';
import ListChekBoxes from '../shares/ListCheckBoxes';
import MyButton from '../shares/MyButton';
import { useNavigation } from '@react-navigation/native';
import { connect } from 'react-redux';
import {changeState} from '../actions/TaskActions'
import { ITask } from '../Interfaces';

type Props = {
  tasks: ITask[];
  changeState: () => void;
}



 const AllRoute: React.FC<Props> = ({tasks,changeState}) => {
  const navigation = useNavigation();
  const [data,setData] = React.useState([])
  useEffect(() => {
    async function fetch(){
      await navigation.addListener(
        'focus',
         async () => { 
          await setData([])
        },
        );
    }
    fetch();
    setData(tasks)


  },[data])

    return (
        <Container>
          <ListChekBoxes changeState={changeState} data={tasks} />
            <MyButton onPress={() => navigation.navigate('AddTask')} title="Create a Task"/>
        </Container>
    )
}



const mapStateToProps = ({tasks}) => {
  return {tasks: tasks.tasks};
}

export default connect(
mapStateToProps,
{
  changeState
}
)(AllRoute)

