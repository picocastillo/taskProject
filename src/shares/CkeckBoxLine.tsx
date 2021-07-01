import React, { useCallback, useState } from 'react';
import { Text } from 'react-native';
import CheckBox from '@react-native-community/checkbox';

import { My,Row,TextCheckbox } from '../utilStyles';
import { check_4,check_1,check_2,check_3 } from '../constants';

export type Props = {
    title: string;
    isCheck: boolean;
    id: string;
    changeState: () => void;
  };

const CheckBoxLine: React.FC<Props> = ({title,isCheck,changeState,id}) => {
    const [toggleCheckBox, setToggleCheckBox] = useState(isCheck)
    const Checkbox = (value: boolean) => {
        setToggleCheckBox(value);
        changeState(id);
      }
      console.log(`check_${(id%4)+1}`)
    return (
            <Row>
                <CheckBox
                    value={toggleCheckBox}
                    onValueChange={Checkbox}
                    tintColor="#cc25aa"
                    onCheckColor="#12hdvc2"
                    boxType="circle"
                    tintColors={{ true: (id%4)+1==1 ? check_1 : ((id%4)+1==2 ? check_2: ((id%4)+1==3 ? check_3 : check_4)), false: (id%4)+1==1 ? check_1 : ((id%4)+1==2 ? check_2: ((id%4)+1==3 ? check_3 : check_4)) }}
                />
                <TextCheckbox>{title}</TextCheckbox>
            </Row>
    )
}

export default CheckBoxLine;