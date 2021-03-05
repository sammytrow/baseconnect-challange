import React from 'react';
import {personalInformation} from './static-data';

const skills = () =>{
    let skillLevel: string[] = [];
    let i = 0;
    let blue = <div className='skill-level-blue'></div>;
    return (
    <div className='skills-cont'>
        {personalInformation.skills.map(skills =>
            <div key={skills.id} className='skill-item'>
                <p className='section-1'>{skills.langName}</p>
                <LevelBar j={skills.level} />   
                <p className='section-3'>{skills.libraries}</p>
            </div>
        )}
    </div>);
};
const LevelBar = ({j}:{j:number}) =>{
    let skillLevel = [];
    for (var i = 1; i <= 5; i++) {
        if(i <= j){
            skillLevel.push(<div className='skill-level-blue'></div>)
        }
        else{
            skillLevel.push(<div className='skill-level-grey'></div>)
        }
    }
    return (<div className='section-2'>
    { skillLevel.map(skillLevel => <p>{ skillLevel }</p>) }
  </div>);
}
export default skills;