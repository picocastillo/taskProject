import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import  { TextInput,Text,View } from 'react-native';
import { Column,Title,MyInput,Row,Container,Col2,ContainerTime,RightTime,ColumnForm } from '../utilStyles';
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
      <View style={{backgroundColor: 'white', flex: 1,justifyContent: 'center'}} >
        <Column>
          <Title>Title</Title>
          <MyInput>
            <TextInput value={title} style={{color: '#cdcece',paddingTop: 10, paddingLeft: 15}}  onChangeText={onChangeTitle} />
          </MyInput>
          <Title>Deadline</Title>
          <DropDownPicker
            open={open}
            value={value}
            items={items}
            placeholder="2021-02-08"
            style={{borderColor: '#cdcece'}}
            placeholderStyle={{color: '#cdcece'}}
            setOpen={setOpen}
            disabled
            setValue={setValue}
            setItems={setItems}
            />
            <Container>
              <Row>
                <ColumnForm>
                  <Title>Start Time</Title>
                  <Col2>
                    <MyInput>
                      <ContainerTime>
                        <Text>11:00 pm</Text>
                        <RightTime>
                          <Feather name="clock" size={18} color="black" />
                        </RightTime>
                      </ContainerTime>
                    </MyInput>
                  </Col2>
                </ColumnForm>
                <ColumnForm>
                  <Title>End Time</Title>
                  <Col2>
                    <MyInput>
                      <ContainerTime>
                        <Text>11:14 pm</Text>
                        <RightTime>
                          <Feather name="clock" size={18} color="black" />
                        </RightTime>
                      </ContainerTime>
                    </MyInput>
                  </Col2>

                </ColumnForm>
              </Row>

              <Title>Remind</Title>
              <DropDownPicker
                open={open}
                placeholder="10 minutes earlier"
                value={value}
                disabled
                items={items}
                style={{borderColor: '#cdcece'}}
                placeholderStyle={{color: '#cdcece'}}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
                />
              <Title>Repeat</Title>
              <DropDownPicker
                open={open}
                value={value}
                disabled
                items={items}
                style={{borderColor: '#cdcece'}}
                placeholderStyle={{color: '#cdcece'}}
                placeholder="Weekly"
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
                />

            <MyButton onPress={submit} title="Add task"/>

            </Container>
      </Column>
      </View>
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
