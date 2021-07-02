import React from 'react';
import CheckBoxLine from '../shares/CkeckBoxLine';
import  { SafeAreaView,FlatList } from 'react-native';
import { My } from '../utilStyles';
import { ITask } from '../Interfaces';

type Props  = {
    data: ITask[];
    changeState: (id: string) => void;
  }

const ListCheckBoxes: React.FC<Props> = ({data,changeState}) => {
    return (
        <My>
           <SafeAreaView style={{maxHeight: 300}} >
                    <FlatList
                      data={data}
                      extraData={data}
                      renderItem={
                        ({ item }) => (
                          <CheckBoxLine id={item.id}  isCheck={item.complete} changeState={changeState} title={item.title} />
                        )
                      }
                      keyExtractor={item => item.id}
                    />
            </SafeAreaView>
        </My>
    )
}

export default ListCheckBoxes;