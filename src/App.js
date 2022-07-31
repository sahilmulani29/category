import logo from './logo.svg';
import './App.css';
import Category from './component/category';
import { fethcCategory } from './utils/utils';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import RouterData from './Navigation/router';

function App() {

  const dispatch = useDispatch();

  useEffect(()=>{
    (async ()=>{
        const cat = await fethcCategory();
        dispatch({type : 'SET_CATEGORY' , data:cat})
    })()
},[])

  return (
    <div className="App">
      <RouterData/>
    </div>
  );
}

export default App;
