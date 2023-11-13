import './App.css';

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage'
import Header from './components/Header'
import PrivateRoute from './utils/PrivateRoute'
import HelloPage from './pages/HelloPage';
import {AuthProvider} from './context/AuthContext';

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Header></Header>
          <Routes>
            <Route exact path='/' element={<HelloPage></HelloPage>}/>
            <Route exact path='/home' element={<PrivateRoute><HomePage/></PrivateRoute>}/>
            <Route exact path='/login' element={<LoginPage/>}/>
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
