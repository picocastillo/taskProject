import React from 'react';
import { Feather,Entypo,EvilIcons } from '@expo/vector-icons'; 
import { Row,Mx,Point } from '../utilStyles';
import { StyleSheet, Input, View, SafeAreaView, Text, Alert } from 'react-native';

interface Props {
    title: string;
    onChange: () => void;
  };
  
const MyInput : React.FC<Props> = ({title,onChange}) => {
    return (
            <Mx>
                <Input
                    title={title}
                    onChange={onChange}
                />
            </Mx>
       
    )
  };


  export default MyInput;