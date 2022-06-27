import "./App.css"
import Home from './pages/home/Home'
import Profile from './pages/profile/Profile'
import Auth from './pages/auth/Auth'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
function App() {
  return (
   
        <Router>
            <div className="App">
                <div className="blur" style={{top:'-18%',right:'0'}}></div>
                <div className="blur" style={{top:'36%',left:'-8rem'}}></div>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/profile" element={<Profile/>}/>
                    <Route path="authentication" element={<Auth />}/>
                </Routes>
            </div>
        </Router>
       
  );
}

export default App;
