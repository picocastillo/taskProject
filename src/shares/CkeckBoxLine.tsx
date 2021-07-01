import React, { useCallback, useState } from 'react';
import { Text } from 'react-native';
import CheckBox from '@react-native-community/checkbox';

import { My,Row } from '../utilStyles';

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
        <My>
            <Row>
                <CheckBox
                    value={toggleCheckBox}
                    onValueChange={Checkbox}
                />
                <Text>{title}</Text>
            </Row>
        </My>
    )
}

export default CheckBoxLine;