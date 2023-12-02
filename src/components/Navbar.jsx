import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <header className="header">
            <a href="#" className="logo text-[#F9FD6D]">d.Dev</a>
            {/* We can use either useNavigate here or Link from react-router */}
            <nav className="navbar">

                <ul className='flex'>
                    <Link to="/">
                        <li>Home</li>
                    </Link>
                    <Link to="/transactions">
                        <li>Transactions</li>
                    </Link>
                    <Link to="/data">
                        <li>Data</li>
                    </Link>



                </ul>

            </nav>
        </header>
    )
}

export default Navbar