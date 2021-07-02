import React from 'react';
import { Mx } from '../utilStyles';
import { Input} from 'react-native';

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