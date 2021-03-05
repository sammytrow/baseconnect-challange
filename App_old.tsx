import React, { useState, Dispatch } from 'react';
import Index from './index';
import WorksPage from './worksPage';
//import logo from './logo.svg';
import './App.css';
interface IActiveTab{
  page: string;
}
function App() {
  const [currentActiveTab, setActiveTab] = useState<IActiveTab>({page: 'index'});
  let onTabChange = setActiveTab;
  let activeTab = currentActiveTab;
  return (
    <div className="App">
      <button onClick={() => onTabChange({page: 'works'})}>works</button>
      {Content(activeTab)}
    </div>
  );
};

function Content<IActiveTab>(tab: Dispatch<IActiveTab>){
  switch(tab){
    default:
      case 'index':
        return <Index/>;
      case 'works':
        return <WorksPage/>;
  };
};
export default App;