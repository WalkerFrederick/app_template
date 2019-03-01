import React from 'react';
import './index.scss'

import MailIcon from '../Icons/mail';

class Navbar extends React.Component {

    render() {
        return (
            <nav>
                <button>
                    <MailIcon/>
                </button>
                <a href='#' title='logo' className='logo'>
                    <h1>APP</h1>                                
                </a>
                <button>
                    <span/>
                    <span/>
                    <span/>
                </button>
            </nav>
        )
    }

}

export default Navbar;