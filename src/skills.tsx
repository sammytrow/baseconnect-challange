import React from 'react';
import {personalInformation} from './static-data';

/* returns all skill items in static-data */
const skills = () =>{
    return (
        <div className='skills-cont'>
            {personalInformation.skills.map(skills =>
                <div key={skills.id} className='skill-item'>
                    <p className='section-1'>{skills.langName}</p>
                    <LevelBar j={skills.level} />   
                    <p className='section-3'>{skills.libraries}</p>
                </div>
            )}
        </div>
    );
};
/* Returns 5 divs that display a dot, blue changes depending on the skill level given, 5 circles will always be returned */
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
    return (
    <div className='section-2'>
        { skillLevel.map(skillLevel => <p>{ skillLevel }</p>) }
    </div>
    );
}

export default skills;