import './index.css'
import { IoMdHome } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { IoIosStats } from "react-icons/io";

import { BsKanban } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { FaLock } from "react-icons/fa";
import AppContext from '../../context/AppContext';

import { Component } from 'react';


class Sidebar extends Component  {
    render() {
        const {isVisible} = this.props

    return (
    <AppContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      return (
        <>
            {isDarkTheme ? (
            <sidebar className={`sidebar-dark ${isVisible ? 'visible': ''}`}>
            <div className='side-top-div'>
                
                <h1 className='head-1-dark'>HORIZON <span>FREE</span></h1>
            </div>
            <ul>
                <div>
                    <IoMdHome className='icon'/>
                    <li className='listy-dark'>Dashboard</li>
                </div>
                <div>
                    <IoCartOutline className='icon' />
                    <a href='#'>
                    <li className='listy-dark'>NFT Marketplace</li>
                    </a>
                </div>
                <div>
                    <IoIosStats className='icon' />
                    <a href='#'>
                    <li className='listy-dark'>Tables</li>
                    </a>
                </div>
                <div>
                    <BsKanban className='icon' />
                    <a href='#'>
                    <li className='listy-dark'>Kanban</li>
                    </a>
                </div>
                <div>
                    <CgProfile className='icon' />
                    <a href='#'>
                    <li className='listy-dark'>Profile</li>
                    </a>
                </div>
                <div>
                    <FaLock className='icon' />
                    <a href='#'>
                    <li className='listy-dark'>Sign in</li>
                    </a>
                </div>
                
            </ul>
            <div className='bottom-sidebar-dark'>
                <h1 className='box-head'>Upgrade to PRO</h1>
                <p className='box-para'>to get access to all features!<br /> Connect with Venus World!</p>
            </div>
        </sidebar>) : (
            <sidebar className={`sidebar-light ${isVisible ? 'visible': ''}`}>
            <div className='side-top-div'>
                
                <h1 className='head-1-light'>HORIZON<span>FREE</span></h1>
            </div>
            <ul>
                <div>
                    <IoMdHome className='icon'/>
                    <a href='#' >
                    <li>Dashboard</li>
                    </a>
                </div>
                <div>
                    <IoCartOutline className='icon' />
                    <a href='#' >
                    <li>NFT Marketplace</li>
                    </a>
                </div>
                <div>
                    <IoIosStats className='icon' />
                    <a href='#' >
                    <li>Tables</li>
                    </a>
                </div>
                <div>
                    <BsKanban className='icon' />
                    <a href='#'>
                    <li>Kanban</li>
                    </a>
                </div>
                <div>
                    <CgProfile className='icon' />
                    <a href='#'>
                    <li>Profile</li>
                    </a>
                </div>
                <div>
                    <FaLock className='icon' />
                    <a href='#'>
                    <li>Sign in</li>
                    </a>
                </div>
                
            </ul>
            <div className='bottom-sidebar-light'>
                <h1 className='box-head'>Upgrade to PRO</h1>
                <p className='box-para'>to get access to all features!<br /> Connect with Venus World!</p>
            </div>
        </sidebar>)}
        </>
        
      )
    }}
    </AppContext.Consumer>
    )
}
}

export default Sidebar