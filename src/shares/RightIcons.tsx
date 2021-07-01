import React from 'react';
import { Feather,Entypo,EvilIcons } from '@expo/vector-icons'; 
import { Row,Mx,Point } from '../utilStyles';


export const RightIcons : React.FC = () => {
    return (
   
        <Row  >
            <Mx>
                <EvilIcons name="search" size={24} color="black" />
            </Mx>
            <Mx>
                <Point >·</Point>
                <Feather name="bell" size={24} color="black" />
            </Mx>
            <Mx>
                <Entypo name="menu" size={24} color="black" />
            </Mx>
        </Row>
       
    )
  };
