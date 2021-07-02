import React from 'react';
import { Container } from '../utilStyles';
import ListChekBoxes from '../shares/ListCheckBoxes';
import { useNavigation } from '@react-navigation/native';
import { connect } from 'react-redux';
import {changeState} from '../actions/TaskActions'
import { ITask } from '../Interfaces';


type Props = {
  tasks: ITask[];
  changeState: () => void;
}

 const CompleteRoute: React.FC<Props> = ({tasks,changeState}) => {
  const navigation = useNavigation();
    return (
        <Container>
          <ListChekBoxes changeState={changeState} data={tasks} />
        </Container>
    )
}



const mapStateToProps = ({tasks}) => {
  const completed = tasks.tasks.length>0 ? tasks.tasks.filter((e: ITask) => e.complete===true) : [];
  return {tasks: completed};
}
export default connect(
mapStateToProps,
{
  changeState
}
)(CompleteRoute)

