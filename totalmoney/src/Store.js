import { configureStore } from '@reduxjs/toolkit'
// import counterReducer from '../features/counter/counterSlice'
import counterReducer from './components/DataForms'

// import DataForms from "./DataForms"

// console.log(store.getState())


export default configureStore({
  reducer: {
    data: counterReducer
  }

})


