import {createStore} from 'redux';
import reducer from './src/reducers';
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
}





const persistedReducer = persistReducer(persistConfig, reducer)

const store = createStore(persistedReducer)


let persistor = persistStore(store)
export { store,persistor }

// const set = async () => {
//  console.log(await  AsyncStorage.getItem('asd'))
// }



// set()

// AsyncStorage.getAllKeys((err, keys) => {
//   AsyncStorage.multiGet(keys, (error, stores) => {
//     stores.map((result, i, store) => {
//       console.log('log async: ',{ [store[i][0]]: store[i][1] });
//       return true;
//     });
//   });
// });