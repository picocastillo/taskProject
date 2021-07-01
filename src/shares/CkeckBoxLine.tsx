import React, { useState } from 'react';
// import CheckBox from '@react-native-community/checkbox';
import { CheckBox } from 'react-native-elements'
import { Row,TextCheckbox } from '../utilStyles';
import { check_4,check_1,check_2,check_3 } from '../constants';
import { useEffect } from 'react';

export type Props = {
    title: string;
    isCheck: boolean;
    id: string;
    changeState: () => void;
  };

const CheckBoxLine: React.FC<Props> = ({title,isCheck,changeState,id}) => {
    const [toggleCheckBox, setToggleCheckBox] = useState(isCheck)
    const onChange = (value: boolean) => {
        setToggleCheckBox(!toggleCheckBox);
        changeState(id);
      }
      useEffect(() => {
        setToggleCheckBox(isCheck)
      },[isCheck])
    return (
            <Row>
                {/* <CheckBox
                    value={isCheck}
                    onValueChange={Checkbox}
                    tintColor="#cc25aa"
                    onCheckColor="#12hdvc2"
                    boxType="circle"
                    tintColors={{ true: (id%4)+1==1 ? check_1 : ((id%4)+1==2 ? check_2: ((id%4)+1==3 ? check_3 : check_4)), false: (id%4)+1==1 ? check_1 : ((id%4)+1==2 ? check_2: ((id%4)+1==3 ? check_3 : check_4)) }}
                />
                <TextCheckbox>{title}</TextCheckbox> */}
                <CheckBox
                    title={title}
                    checked={toggleCheckBox}
                    iconType='material'
                    checkedIcon='check-box'
                    uncheckedIcon='check-box-outline-blank'
                    containerStyle={{backgroundColor: 'white',borderColor: 'white'}}
                    onPress={onChange}
                    checkedColor={(id%4)+1==1 ? check_1 : ((id%4)+1==2 ? check_2: ((id%4)+1==3 ? check_3 : check_4))}
                    uncheckedColor={(id%4)+1==1 ? check_1 : ((id%4)+1==2 ? check_2: ((id%4)+1==3 ? check_3 : check_4))}
                  />
            </Row>
    )
}

export default CheckBoxLine;