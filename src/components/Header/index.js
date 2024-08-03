import './index.css'
import { FaSearch } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { MdDarkMode } from "react-icons/md";
import { IoIosInformationCircleOutline } from "react-icons/io";
import AppContext from '../../context/AppContext';


const Header = () => {
  return (
    <AppContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value

      const onToggleTheme = () => {
        toggleTheme()
      }


      return (
          <>
            {isDarkTheme ? (   
                <div className='header-container-dark'>
            
                <header className='header-1-dark'>
            
                <div className='headings-container-dark'>
                    <p className='para-dark'>Pages/Dashboard</p>
                    <h1 className='heading'>Main Dashboard</h1>
                </div>
                <div className='details-container-dark'>
                    <div className='div-1-dark'>
                        <FaSearch className='icons' />
                        <input type="search" placeholder='Search' className='input'  />
                    </div>
                    <button type='button'><IoIosNotifications className='icon-dark' /></button>
                    <button type='button' onClick={onToggleTheme}><MdDarkMode className='icon-dark' /></button>
                    <button type='button'><IoIosInformationCircleOutline className='icon-dark'/></button>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDJ1UtxSyeAnvsuw6XcSuB5C9Jx1Mi5x_Rcg&s" className='profile-pic' alt="profile-pic" />
                </div> 
                
            </header>
        </div>) : (   
            <div className='header-container-light'>
            
            <header className='header-1-light'>
            
                <div className='headings-container-light'>
                    <p className='para-light'>Pages/Dashboard</p>
                    <h1 className='heading'>Main Dashboard</h1>
                </div>
                <div className='details-container-light'>
                    <div className='div-1-light'>
                        <FaSearch className='icons' />
                        <input type="search" placeholder='Search' className='input'  />
                    </div>
                    <button type='button'><IoIosNotifications className='icon-light' /></button>
                    <button type='button' onClick={onToggleTheme}><MdDarkMode className='icon-light' /></button>
                    <button type='button'><IoIosInformationCircleOutline className='icon-light'/></button>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDJ1UtxSyeAnvsuw6XcSuB5C9Jx1Mi5x_Rcg&s" className='profile-pic' alt="profile-pic" />
                </div> 
                
            </header>
        </div>)}
          </>
      )
    }}
    </AppContext.Consumer>
   
  )     
}  


export default Header
            