import React from 'react';
import {personalInformation} from './static-data';
import PropTypes from 'prop-types';
import './worksbar.css';

interface Props {
    onTabChange:any,
    setWorksDisplayed:any,
    skipWorksID?:number
  }

const worksBar: React.FC<Props> = ({onTabChange, setWorksDisplayed, skipWorksID}) => {
    return (
    <div className='worksbar'>
        {personalInformation.works.map(works =>{
            if(works.id != skipWorksID){
                return(<div key={works.id} onClick={function(){ onTabChange('works'); setWorksDisplayed(works.id)}} className='worksbar-works'>
                    <div className="works">
                        <img className='works-image' src={works.image}/>
                        <p className='title'>{works.title}</p>
                        <p>{works.position}</p>
                        <img className='works-arrow' src='images/works-arrow.png'/>
                    </div>
                </div>)}
            }
            )}
    </div>);
}

export default worksBar;