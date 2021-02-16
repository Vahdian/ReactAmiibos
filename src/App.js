import './App.css';

import {Routes} from './core/components/Routes/Routes'
import {Menu} from './core/components/Menu/Menu'
import {useState } from 'react';
import { BrowserRouter as Router} from 'react-router-dom'
import { Loading } from './core/components/Loading/Loading';
import { LoadingContext } from './core/components/Loading/contexts/LoadingContext';

function App() {
  const [isLoading, setIsLoading] = useState(false)
  return (
    <Router>
    <div className="App">
      <header className="container">
        
        <Menu></Menu>
       
        <div className="centered">
        <LoadingContext.Provider value={{isLoading, setIsLoading}}>
        <Loading></Loading>
        <Routes></Routes>
        </LoadingContext.Provider>
        </div>
       
      </header>
    </div>
    </Router>
  );
}

export default App;
