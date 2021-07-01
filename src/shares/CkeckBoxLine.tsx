import React, { useCallback, useEffect } from 'react';
import BouncyCheckbox from "react-native-bouncy-checkbox";

import { My } from '../utilStyles';

export type Props = {
    title: string;
    isCheck: boolean;
    onPress: () => void
  };

const CheckBoxLine: React.FC<Props> = ({title,isCheck,onPress}) => {
    return (
        <My>
            <BouncyCheckbox
                size={25}
                fillColor="red"
                unfillColor="#FFFFFF"
                text={title}
                isChecked={isCheck}
                iconStyle={{ borderColor: "red" }}
                onPress={onPress}
            />
        </My>
    )
}

export default CheckBoxLine;