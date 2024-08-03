import './index.css'
import { IoMdHome } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { IoIosStats } from "react-icons/io";

import { BsKanban } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { FaLock } from "react-icons/fa";
import AppContext from '../../context/AppContext';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
    <AppContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      return (
        <>
            {isDarkTheme ? (
            <sidebar className='sidebar-dark'>
            <div className='side-top-div'>
                <h1 className='head-1-dark'>HORIZON <span>FREE</span></h1>
            </div>
            <ul>
                <div>
                    <IoMdHome className='icon'/>
                    <li>Dashboard</li>
                </div>
                <div>
                    <IoCartOutline className='icon' />
                    <li>NFT Marketplace</li>
                </div>
                <div>
                    <IoIosStats className='icon' />
                    <li>Tables</li>
                </div>
                <div>
                    <BsKanban className='icon' />
                    <li>Kanban</li>
                </div>
                <div>
                    <CgProfile className='icon' />
                    <li>Profile</li>
                </div>
                <div>
                    <FaLock className='icon' />
                    <li>Sign in</li>
                </div>
                
            </ul>
            <div className='bottom-sidebar-dark'>
                <h1 className='box-head'>Upgrade to PRO</h1>
                <p className='box-para'>to get access to all features!<br /> Connect with Venus World!</p>
            </div>
        </sidebar>) : (<sidebar className="sidebar-light">
            <div className='side-top-div'>
                <h1 className='head-1-light'>HORIZON<span>FREE</span></h1>
            </div>
            <ul>
                <div>
                    <IoMdHome className='icon'/>
                    <a href="#" >
                    <li>Dashboard</li>
                    </a>
                </div>
                <div>
                    <IoCartOutline className='icon' />
                    <a href="#marketplace" >
                    <li>NFT Marketplace</li>
                    </a>
                </div>
                <div>
                    <IoIosStats className='icon' />
                    <a href="#tables" >
                    <li>Tables</li>
                    </a>
                </div>
                <div>
                    <BsKanban className='icon' />
                    <a href="#kanban" >
                    <li>Kanban</li>
                    </a>
                </div>
                <div>
                    <CgProfile className='icon' />
                    <a href="#profile" >
                    <li>Profile</li>
                    </a>
                </div>
                <div>
                    <FaLock className='icon' />
                    <a href="#signin" >
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

export default Sidebar