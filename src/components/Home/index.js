import { Component } from 'react';
import './index.css';
import Header from '../Header';
import Sidebar from '../Sidebar';
import Footer from '../Footer';
import Content from '../Content'
import AppContext from '../../context/AppContext';

class Home extends Component {
    render() {
        return (
            <>
                <AppContext.Consumer>
                    {value => {
                        const {isDarkTheme} = value
                        return (
                            <>
                                {isDarkTheme ? (
                                    <div className='home-bg-container-dark'>
                                        <div className='home-div-dark'>
                                            <Sidebar />
                                            <div className="home-div-2-dark" >
                                                <Header />
                                                <Content />
                                                <Footer />
                                            </div>    
                                        </div>
                                    </div>
                                ) : (
                                <div className='home-bg-container-light'>
                                    <div className='home-div-light'>
                                        <Sidebar />
                                        <div className="home-div-2-light" >
                                            <Header />
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