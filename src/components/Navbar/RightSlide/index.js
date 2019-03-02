import React from 'react';
import './index.scss'


class RightSlide extends React.Component {

    render() {
        return (
            <div className='RightSlide'>
                <ul className='main-navigation'>
                    <li>item 1</li>
                    <li>item 2</li>
                    <li>item 3</li>
                </ul>
                <ul className='aside-navigation'>
                    <li>item 1</li>
                    <li>item 2</li>
                    <li>item 3</li>
                    <li>item 4</li>
                </ul>
            </div>
        )
    }

}

export default RightSlide;