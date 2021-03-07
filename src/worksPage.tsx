import React from 'react';
import './mainPage.css';
import './worksPage.css';
import WorksBar from './worksBar';
import './worksbar.css';
import {personalInformation} from './static-data';

interface Props {
    onTabChange:any,
    setWorksDisplayed: any,
    worksDisplayed?:number
  }
/* brings all the content together to form the workspage */
const WorksPage: React.FC<Props> = ({worksDisplayed, setWorksDisplayed, onTabChange}) =>{
    let worksDetails = personalInformation.works[worksDisplayed!]    
    return (<div className='works-page'>
        <div className='breadcrums-section'>
            <div className='container'>
                <img onClick={function(){ onTabChange('index'); setWorksDisplayed()}} className='arrow' src='images/works-arrow.png'/>
                <p onClick={function(){ onTabChange('index'); setWorksDisplayed()}} className='title'>{personalInformation.name}</p>
            </div>
        </div>
        <div className='work-details-section'>
            <div className='container'>
                <div className='works-header'>
                    <p className='title'>Works</p>
                    <p className='sub_title'>制作実績など</p>
                </div>
                <div className='work-details-cont'>
                    <div className='image-cont'>
                        <GetImages worksimages={worksDetails.details.images}/>
                    </div>
                    <div className='text-cont'>
                        <GetText workstext={worksDetails.details.text}/>
                    </div>
                    <div style={{clear:'both'}}></div>
                </div>
            </div>
        </div>
        <div className='worksbar-section'>
            <div className='container'>
                <WorksBar onTabChange = {onTabChange} setWorksDisplayed = {setWorksDisplayed} skipWorksID = {worksDisplayed}/>
                <div style={{clear:'both'}}></div>
            </div>
        </div>
    </div>
        );
}
/* gets all images from static-data and returns them in an arranged layout */
const GetImages = ({worksimages}:{worksimages:string[]}) =>{
    let getimages = [];
    let count = true;
    for (var i=0; i < worksimages.length; i++) {
        if(count == true){
            count = false;
            getimages.push(<div className='left'>
                <img src={worksimages[i]}></img>
            </div>)
        }
        else if(!count){
            count = true;
            getimages.push(<div className='right'>
                <img src={worksimages[i]}></img>
            </div>)
        }
    }
    return (<div>
    { getimages.map(getimages => <span>{ getimages }</span>) }
  </div>);
}
/* gets text from static-data and returns them in an arranged layout */
const GetText = ({workstext}:{workstext:{ text_title: string; text: string; }[]}) =>{
    let gettext = [];
    let textMargin = ''
    for (var i=0; i < workstext.length; i++) {
        if(i!=0){
            textMargin = 'text-margin'
        }
        gettext.push(<div className={"text-item " + textMargin}>
            <p className='title'>{workstext[i].text_title}</p>
            <p className='text'>{workstext[i].text}</p>
        </div>)
    }
    return(<div>
    { gettext.map(gettext => <span>{ gettext }</span>) }
  </div>)
}

export default WorksPage;