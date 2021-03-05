import React, { useState, Dispatch, SetStateAction } from 'react';
import MainPage from './mainPage';
import WorksPage from './worksPage';
import './App.css';

const App = () => {
  const [currentActiveTab, setActiveTab]  = useState<string>('index');
  const [worksDisplayed, setWorksDisplayed] = useState<number>();
  
  return (
    <div className="App">
      <Content activeTab={currentActiveTab} onTabChange = {setActiveTab}
      worksDisplayed = {worksDisplayed} setWorksDisplayed = {setWorksDisplayed}/>
    </div>
  );
};
interface Props {
  activeTab:string,
  onTabChange:any,
  worksDisplayed?:number,
  setWorksDisplayed:any
}
//const Content = ({onTabChange}:{onTabChange:(newTab: string) => void},{tab}:{tab:string}) =>{
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