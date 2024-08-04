import { Component } from 'react';
import './index.css';
import Header from '../Header';
import Sidebar from '../Sidebar';
import Footer from '../Footer';
import Content from '../Content';
import AppContext from '../../context/AppContext';


class Home extends Component {
    state = {isSidebarVisible: false}
    

  toggleSidebar = () => {
    this.setState(prevState => ({isSidebarVisible : !prevState.isSidebarVisible}))
    
  };
    render() {
        const {isSidebarVisible} = this.state
        return (
            <>
                <AppContext.Consumer>
                    {value => {
                        const {isDarkTheme} = value
                        return (
                            <>
                                {isDarkTheme ? (
                                    <div className='home-bg-container-dark'>
                                        
                                        <Header toggleSidebar={this.toggleSidebar} />
                                            
                                            <div className='home-div-dark'>
                                                <Sidebar isVisible = {isSidebarVisible} />
                                            <div className="home-div-2-dark" >
                                            
                                                <Content />
                                                <Footer />
                                            </div>    
                                        </div>
                                    </div>
                                ) : (
                                <div className='home-bg-container-light'>
                                    
                                    <Header toggleSidebar={this.toggleSidebar} />
                                        
                                    <div className='home-div-light'>
                                    <Sidebar isVisible={isSidebarVisible} />
                                        <div className="home-div-2-light" >
                                        
                                            <Content />
                                            <Footer />
                                        </div>
                                    </div>
                                </div>
                                )}
                            </>
                        )
                    }}
                </AppContext.Consumer>
            </>
            
        )
    }
}

export default Home