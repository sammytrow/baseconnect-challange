import React from 'react';
import {personalInformation} from './static-data';
import WorksBar from './worksBar';
import Skills from './skills';
import PersonalQualities from './personalQualities';
import './mainPage.css';
interface Props {
    onTabChange:any,
    setWorksDisplayed:any
  }
const MainPage: React.FC<Props> = ({onTabChange, setWorksDisplayed}) => {
    return (
    <div className='mainPage'>
        <div style={{backgroundImage: `url("/images/header_bg.jpg")`}} className='mainPage-header'>
            <div className='container'>
                <div className='left'>
                    <img src={personalInformation.intro.image}/>
                    <div className='profile-text-cont'>
                        <p className='profile-name'>{personalInformation.name}</p>
                        <p className='profile-title'>{personalInformation.intro.jobTitle}</p>
                    </div>
                </div>
                <div className='right'>
                    <p className='profile-info'>{personalInformation.intro.text1}</p>
                    <p className='profile-jap-name'>{personalInformation.intro.nameJap}</p>
                    <table>
                        <tr>
                            <td><b>Address</b></td>
                            <td>{personalInformation.intro.address}</td>
                        </tr>
                        <tr>
                            <td><b>Date of birth</b></td>
                            <td>{personalInformation.intro.dateOfBirth}</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
        <div style={{clear:'both'}}></div>
        <div className='worksbar-section'>
            <div className='container'>
                <div className='works-header'>
                    <p className='title'>Works</p>
                    <p className='sub_title'>japanese</p>
                </div>
                <WorksBar onTabChange = {onTabChange} setWorksDisplayed = {setWorksDisplayed} />
                <div style={{clear:'both'}}></div>
            </div>
        </div>
        <div style={{clear:'both'}}></div>
        <div className='experience-section'>
            <div className='container'>
                <div className='left'>
                    <div className='title'>
                        <img src='images/fa-solid_address-book.png'/>
                        <p>Experience</p>
                    </div>
                    <div className='items-container'>
                        {personalInformation.experience.map((experience, index) =>{
                            /*let borderStyle = {
                                "border-left":'#c4c4c4 1px solid',
                            } as React.CSSProperties;
                            if(index + 1 == personalInformation.experience.length){
                                borderStyle = {
                                    "border-left":'none',
                                } as React.CSSProperties;;
                            }*/
                            return (<div className='experience-item'>
                                <p className='title'><b>{experience.companyName} | {experience.date}</b></p>
                                <p>{experience.position}</p>
                                <p>{experience.moreInfo}</p>
                            </div>)
                        })}
                    </div>
                </div>
                <div className='right'>
                    <div className='title'>
                        <img src='images/fa-solid_address-book.png'/>
                        <p>Education</p>
                    </div>
                    <div className='items-container'>
                        {personalInformation.education.map(education =>{
                            return (<div className='education-item'>
                                <p className='title'><b>{education.schoolName} | {education.date}</b></p>
                                <p>{education.subject}</p>
                                <p>{education.moreInfo}</p>
                            </div>)
                        })}
                    </div>
                </div>
                <div style={{clear:'both'}}></div>
                <div className='left'>
                  <div className='title'>
                        <img src='images/fa-solid_address-book.png'/>
                        <p>Skills</p>
                    </div>
                    <div className='items-container'>
                       <Skills/>
                    </div>
                </div>
                <div className='right'>
                    <div className='title'>
                        <img src='images/fa-solid_address-book.png'/>
                        <p>Personal Qualities</p>
                    </div>
                    <div className='items-container'>
                        <PersonalQualities/>
                    </div>
                </div>
                <div style={{clear:'both'}}></div>
            </div>
        </div>
        <div className='activity-section'>
            <div className='container'>
                <div className='activity-header'>
                    <p className='title'>Activity</p>
                    <p className='sub_title'>japanese</p>
                </div>
                <div className='activity-cont'>
                    <div className='left'>
                        <div className='title'>
                            <img src='images/about_me_thumbnail.png'/>
                            <p className='title'>About me</p>
                        </div>
                    </div>
                    <div className='right'>
                        <div className='title'>
                            <img src='images/interests_thumbnail.png'/>
                            <p>Interests</p>
                        </div>
                        <div className='items-container'>
                            {personalInformation.activity.pages.map((pages:any) =>{
                                return (<div className='activity-item'>
                                    <img onClick={()=> window.open(pages.link, "_blank")} src={pages.img}/>
                                    <p>{pages.text}</p>
                                </div>)
                            })}
                        </div>
                    </div>
                    <div style={{clear:'both'}}></div>
                </div>
            </div>
        </div>
        <div className='social-media-section'>
            <div className='container'>
                <div className='items-container'>
                    {personalInformation.socialMedia.map((socialMedia:any) =>{
                        return (<div className='social-media-item'>
                            <img onClick={()=> window.open(socialMedia.link, "_blank")} src={socialMedia.img}/>
                        </div>)
                    })}
                    <div style={{clear:'both'}}></div>
                </div>
            </div>
        </div>
        <div className='bottom-section'>
            <div className='container'>
                <img onClick={function(){window.scrollTo({top: 0, behavior: 'smooth',})}}src='images/moveup_button.png'/>
            </div>
        </div>
    </div>
    );
};
//<WorksBar works={works} changeWorks={changeWorks}/>

//mainPage.propTypes = {
//    works: PropTypes.array.isRequired,
//    changeWorks: PropTypes.func.isRequired
//}

export default MainPage;