import React from 'react'
import '../index.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <>
            <header>
                <nav>
                    <div>
                        <img src="" alt="logo" />
                    </div>
                    <ul>
                        <Link to='/'>Home</Link>
                        <Link to='/collection'>Collection</Link>
                        <Link to='/about'>About</Link>
                        <Link to='/contact'>Contact Us</Link>
                    </ul>
                    <div
                        style={{
                            height: '20px',
                            width: '20px',
                            background: 'black'
                        }}
                    ></div>
                </nav>
            </header>
        </>
    )
}

export default Navbar