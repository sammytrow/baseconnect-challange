import React from 'react';

interface Props {
    activeTab:string,
    onTabChange:any
}

const Nav: React.FC<Props> = ({activeTab, onTabChange}) =>{
    return(
        <nav className='App-nav'>
            <ul>
                <li className='tab'>
                    <button onClick={() => onTabChange('index')}>Items</button>
                </li>
                <li className='tab'>
                    <button onClick={() => onTabChange('works')}>Cart</button>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;