import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import  { TextInput,Text } from 'react-native';
import { Column,Title,MyInput,Row,Container } from '../utilStyles';
import DropDownPicker from 'react-native-dropdown-picker';
import { Feather } from '@expo/vector-icons'; 
import MyButton from '../shares/MyButton';
import {setNewTask} from '../actions/TaskActions'
import { connect } from 'react-redux';
import {ITask} from '../Interfaces';

type Props = {
  setNewTask: (task: ITask ) => void
}

 const AddTask: React.FC = (props) => {
    const [title,onChangeTitle] = React.useState('Design teem meeting')
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
      {label: 'Apple', value: 'apple'},
      {label: 'Banana', value: 'banana'}
    ]);
    const navigation = useNavigation();

    const submit = () => {

      props.setNewTask({
        id: (props.tasksLength+1).toString(),
        title: title,
        complete: false
      })
      
      navigation.navigate('Board');

    }

    return (
      <Column>
          <Title>Title</Title>
          <MyInput>
            <TextInput value={title}  onChangeText={onChangeTitle} />
          </MyInput>
          <Title>Deadline</Title>
          <DropDownPicker
            open={open}
            value={value}
            items={items}
            placeholder="2021-02-08"
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            />
            <Container>
              <Row>
                <Column>
                  <Title>Start Time</Title>
                  <Row>
                      <Text>11:00 pm</Text>
                      <Feather name="clock" size={24} color="black" />
                  </Row>
                </Column>
                <Column>
                  <Title>End Time</Title>
                  <Row>
                    <Text>11:14 pm</Text>
                    <Feather name="clock" size={24} color="black" />
                  </Row>

                </Column>
              </Row>

              <Title>Remind</Title>
              <DropDownPicker
                open={open}
                placeholder="10 minutes earlier"
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
                />
              <Title>Repeat</Title>
              <DropDownPicker
                open={open}
                value={value}
                items={items}
                placeholder="Weekly"
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
                />

            <MyButton onPress={submit} title="Add task"/>

            </Container>
      </Column>
    );
};

const mapStateToProps = ({tasks}) => {
  return {tasksLength: tasks.length};
}

export default connect(
  mapStateToProps,{
  setNewTask
}
)(AddTask)
