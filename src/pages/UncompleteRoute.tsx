import React from 'react';
import { Container } from '../utilStyles';
import ListChekBoxes from '../shares/ListCheckBoxes';
import { connect } from 'react-redux';
import {changeState} from '../actions/TaskActions'
import { ITask } from '../Interfaces';

type Props = {
  tasks: ITask[];
  changeState: () => void;
}
 const UncompleteRoute: React.FC<Props> = ({tasks,changeState}) => {
  return (
      <Container>
        <ListChekBoxes changeState={changeState} data={tasks} />
      </Container>
  )
}



const mapStateToProps = ({tasks}) => {
  const completed = tasks.tasks.length>0 ? tasks.tasks.filter((e: ITask) => e.complete===false) : [];
  return {tasks: completed};
}
export default connect(
mapStateToProps,
{
  changeState
}
)(UncompleteRoute)

