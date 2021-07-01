import React, { useState } from 'react';
import {CheckBox} from 'react-native';
import { Row,TextCheckbox } from '../utilStyles';
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
    return (
            <Row>
                <CheckBox
                    value={isCheck}
                    onValueChange={Checkbox}
                    tintColor="#cc25aa"
                    onCheckColor="#12hdvc2"
                    boxType="circle"
                />
                <TextCheckbox>{title}</TextCheckbox>
            </Row>
    )
}

export default CheckBoxLine;