import React from 'react';
import {personalInformation} from './static-data';
import styled, { StyledComponent } from "styled-components";
import './worksbar.css';

interface Props {
    onTabChange:any,
    setWorksDisplayed:any,
    skipWorksID?:number
  }
/* This is a styled component it allows you to style components without the issue of clashing class names
it is used as a tag
*/
const Title = styled.p`
    font-size: 16px;
    font-weight: bold;
    margin-top: 30px;
    margin-bottom: 20px;
    cursor: pointer;
    &:hover {
        text-decoration: underline;
    }
`;
/* returns the works item bar with all work items in static-data */
const worksBar: React.FC<Props> = ({onTabChange, setWorksDisplayed, skipWorksID}) => {
    return (
    <div className='worksbar'>
        {personalInformation.works.map(works =>{
            /* if displaying on the worksPage it will skip the currently displayed works using the skipWorksID variable*/
            if(works.id != skipWorksID){
                return(<div key={works.id} onClick={function(){ onTabChange('works'); setWorksDisplayed(works.id)}} className='worksbar-works'>
                    <div className="works">
                        <img className='works-image' src={works.image}/>
                        <Title>{works.title}</Title>
                        <p>{works.position}</p>
                        <img className='works-arrow' src='images/works-arrow.png'/>
                    </div>
                </div>)}
            }
            )}
    </div>);
}

export default worksBar;