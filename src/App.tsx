import React, { useState } from 'react';
import WorksPage from './worksPage';
import MainPage from './mainPage';
import './App.css';

interface Props {
  activeTab:string,
  onTabChange:any,
  worksDisplayed?:number,
  setWorksDisplayed:any
}

const App = () => {
  /* This hook changes the current page displayed between mainPage and worksPage */
  const [currentActiveTab, setActiveTab]  = useState<string>('index');
  /* This hook keeps track of which works content needs to be displayed on the works page and which should be removed on the works bar*/
  const [worksDisplayed, setWorksDisplayed] = useState<number>();
  
  return (
    <div className="App">
      <Content activeTab={currentActiveTab} onTabChange = {setActiveTab}
      worksDisplayed = {worksDisplayed} setWorksDisplayed = {setWorksDisplayed}/>
    </div>
  );
};
/* All content comes through this one function, the content is changed with a useState hook */
const Content: React.FC<Props> = ({activeTab, onTabChange, worksDisplayed, setWorksDisplayed}) =>{
  switch(activeTab){
    default:
      case 'index':
        return (
          <div>
            <MainPage onTabChange = {onTabChange} setWorksDisplayed = {setWorksDisplayed}/>
          </div>
        );
      case 'works':
        return (<WorksPage worksDisplayed={worksDisplayed} onTabChange = {onTabChange} setWorksDisplayed = {setWorksDisplayed} />);
  };
};

export default App;