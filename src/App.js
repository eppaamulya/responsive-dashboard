import { Component } from 'react';
import AppContext from './context/AppContext';

import {Routes, Route} from 'react-router-dom'
import Home from './components/Home';
import './App.css';

class App extends Component {
  state = {
    isDarkTheme: false,
    
  }

  toggleTheme = () => {
    this.setState(prevState => ({isDarkTheme: !prevState.isDarkTheme}))
  }

  render() {
    const {isDarkTheme} = this.state
    return (
      <>
        <AppContext.Provider value={{isDarkTheme, toggleTheme: this.toggleTheme}}>
          <Routes>
            <Route exact path="/" element={<Home />} />
          </Routes>

        </AppContext.Provider>
      </>
      
    );
  }

 
}

export default App;
