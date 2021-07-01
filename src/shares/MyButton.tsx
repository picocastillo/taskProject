import React from 'react';
import { Feather,Entypo,EvilIcons } from '@expo/vector-icons'; 
import { TitleButton } from '../utilStyles';
import { TouchableOpacity } from 'react-native';
import { my_green } from '../constants';

type Props = {
    title: string;
    onPress: () => void;
  };

  
const MyButton : React.FC<Props> = ({title,onPress}) => {
    return (
            <TouchableOpacity style={{marginTop: 200,backgroundColor: my_green, borderRadius: 15}} onPress={onPress} >
                <TitleButton>{title}</TitleButton>
            </TouchableOpacity>
       
    )
  };


  export default MyButton;