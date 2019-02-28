import React from 'react';
import './index.scss'

class Navbar extends React.Component {

    render() {
        return (
            <nav>
                <button>
                    <span/>
                    <span/>
                </button>
                <a href='#' className='logo'>
                    <h1>APP</h1>                                
                </a>
                <button>
                    <span/>
                    <span/>
                </button>
            </nav>
        )
    }

}

export default Navbar;