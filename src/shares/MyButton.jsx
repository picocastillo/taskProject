import React from 'react';
import { Feather,Entypo,EvilIcons } from '@expo/vector-icons'; 
import { Row,Mx,Point } from '../utilStyles';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert } from 'react-native';

interface Props {
    title: string;
    onPress: () => void;
  };

  
const MyButton : React.FC<Props> = ({title,onPress}) => {
    return (
        <Row  >
            <Mx>
                <Button
                    title={title}
                    onPress={onPress}
                />
            </Mx>
        </Row>
       
    )
  };


  export default MyButton;