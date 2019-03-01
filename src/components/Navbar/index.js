import React from 'react';
import './index.scss'

import MailIcon from '../Icons/mail';

class Navbar extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            leftActive: false,
            rightActive: false,
        }
    }

    handleLeftClick() {
        this.setState(
            {leftActive: !this.state.leftActive,}
        );
    }

    handleRightClick() {
        this.setState(
            {rightActive: !this.state.rightActive,}
        );
    }


    

    render() {
        return (
            <nav>
                <button className={this.state.leftActive ? 'left-active' : 'left-hidden'} onClick={this.handleLeftClick.bind(this)}>
                    <MailIcon/>
                </button>
                <a href='/#' title='logo' className='logo'>
                    <h1>APP</h1>                                
                </a>
                <button className={this.state.rightActive ? 'right-active' : 'right-hidden'} onClick={this.handleRightClick.bind(this)}>
                    <span/>
                    <span/>
                    <span/>
                </button>
            </nav>
        )
    }

}

export default Navbar;