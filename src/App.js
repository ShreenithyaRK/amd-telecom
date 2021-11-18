import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Routes
} from 'react-router-dom';
import News from './components/News';
import Home from './components/Home';
(function() {
  var cors_api_host = 'cors-anywhere.herokuapp.com';
  var cors_api_url = 'https://' + cors_api_host + '/';
  var slice = [].slice;
  var origin = window.location.protocol + '//' + window.location.host;
  var open = XMLHttpRequest.prototype.open;
  XMLHttpRequest.prototype.open = function() {
      var args = slice.call(arguments);
      var targetOrigin = /^https?:\/\/([^\/]+)/i.exec(args[1]);
      if (targetOrigin && targetOrigin[0].toLowerCase() !== origin &&
          targetOrigin[1] !== cors_api_host) {
          args[1] = cors_api_url + args[1];
      }
      return open.apply(this, args);
  };
})();

function App() {

  
  return (
    <Router  basename={process.env.PUBLIC_URL}>
      <div className="App">
        <div className="navbar">
          <NavLink activeClassName="active" to="/">
            <button>Home</button>
          </NavLink>
          <NavLink activeClassName="active" to="/news">
            <button>News</button>
          </NavLink>
      </div>
      <Routes>
              <Route  exact path='/' element={<Home/>}></Route>
              <Route  exact path='/news' element={<News/>}></Route>
        </Routes>
     
        
    </div>
    </Router>
  );
}

export default App;
