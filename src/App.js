import React, { useState } from 'react';
//styles
import './styles/App.css';
//components
import Sidebar from './components/sidebar';
import AppBody from './components/appBody';

function App() {
  //states
  const 
  [ currnetPage, setCurrentPage ] = useState(1),
  [ appData, setAppData ] = useState({});
  //functions
  const 
  changePage = back=> {
      if(back) setCurrentPage(currnetPage-1);
      else setCurrentPage(currnetPage+1);
  },
  updateAppData = data=>{
      const { name, value, goback, planType, isMonthlyPlan} = data;
      console.log({name, value})
      setAppData({ ...appData, [name]: value });
      if(goback) setCurrentPage(currnetPage-1);
      else if(currnetPage===5) setCurrentPage(1);
      else setCurrentPage(currnetPage+1);
  }
  
  return (
    <div className="App">
      <Sidebar 
        currnetPage={currnetPage} 
      />
      <AppBody 
        currnetPage={currnetPage} 
        changePage={changePage}
        updateAppData={updateAppData}
        appData={appData}
      />
    </div>
  );
}

export default App;
