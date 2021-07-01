import React, { useCallback, useEffect } from 'react';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import CheckBoxLine from '../shares/CkeckBoxLine';
import  { SafeAreaView,FlatList } from 'react-native';

import { My } from '../utilStyles';
import { ITask } from '../Interfaces';

interface Props {
    data: ITask[],
    onPressCheckbox: (index: number) => void
  }

const ListCheckBoxes: React.FC<Props> = ({data,onPressCheckbox}) => {

    return (
        <My>
           <SafeAreaView >
                    <FlatList
                    data={data}
                    renderItem={
                      ({ item,index }) => (
                        <CheckBoxLine isCheck={item.complete} onPress={() => {onPressCheckbox(index)}} title={item.title} />
                      )
                    }
                    keyExtractor={item => item.id}
                    />
            </SafeAreaView>
        </My>
    )
}

export default ListCheckBoxes;