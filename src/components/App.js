import React from 'react';
import './App.css';
import Title from './Title';
import InputContainer from './InputContainer'
import { useSelector,useDispatch } from 'react-redux';
import {addItem,deleteItem,editItem,clickAll,clickActive,clickCompleted} from './redux/actions/index'


const App=()=>{
  return (
    <div className="App">
      <Title/>
      <InputContainer/>
    </div>
  );
}

export default App;
