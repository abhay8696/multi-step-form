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
  [ appData, setAppData ] = useState({
    form2: {
      isMonthlyPlan: true,
      planCost: 9,
      planType: 'Arcade'
    },
    form3: ["", "", ""]
  });
  //functions
  const 
  changePage = back=> {
      if(back) setCurrentPage(currnetPage-1);
      else setCurrentPage(currnetPage+1);
  },
  updateAppData = data=>{
      const { name, value, goback, planType, isMonthlyPlan} = data;
      console.log({name, value})
      setAppData({ ...appData, [name]: value, form3: ["", "", ""]});
      if(goback) setCurrentPage(currnetPage-1);
      else if(currnetPage===5) setCurrentPage(1);
      else setCurrentPage(currnetPage+1);
  },
  handleAdd_on = (checked, val)=>{
      let arr = [];
      if(appData.form2.isMonthlyPlan){
          arr = [{name:'Online Service', price:1}, {name:'Larger Storage', price:2}, {name:'Customizable profile', price:2}]
      }else{
          arr = [{name:'Online Service', price:10}, {name:'Larger Storage', price:20}, {name:'Customizable profile', price:20}]
      }
      
      let arr2 = appData.form3;
      if(checked) arr2[val] = arr[val];
      if(!checked) arr2[val] = '';

      // setAdd_onData([...arr2]); 
      setAppData({ ...appData, form3: [...arr2] });
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
        handleAdd_on={handleAdd_on}
      />
    </div>
  );
}

export default App;
