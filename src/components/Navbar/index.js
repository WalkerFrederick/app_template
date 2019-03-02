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
        if (this.state.rightActive === true) {
            this.setState(
                {rightActive: !this.state.rightActive,}
            );
        }
        this.setState(
            {leftActive: !this.state.leftActive,}
        );
    }

    handleRightClick() {
        if (this.state.leftActive === true) {
            this.setState(
                {leftActive: !this.state.leftActive,}
            );
        }
        this.setState(
            {rightActive: !this.state.rightActive,}
        );
    }


    

    render() {
        return (
            <div className="navigation-container">

                <div className={`nav-left ${this.state.leftActive ? 'left-active' : 'left-hidden'}`}>
                
                </div>

                <nav>
                    <button onClick={this.handleLeftClick.bind(this)}>
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

                <div className={`nav-right ${this.state.rightActive ? 'right-active' : 'right-hidden'}`}>
                
                </div>

            </div>
        )
    }

}

export default Navbar;