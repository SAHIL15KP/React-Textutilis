import React, { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';
import{
  BrowserRouter as Router,
  Switch,
  Route,

}from "react-router-dom"

function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    }
    )
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#042743'
      showAlert("Dark mode is enabled", "success")
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode is enabled", "success")
    }
  }

  return (
    <>
    <Router>
    <Navbar title="Textutils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Switch>
            <Route exact path="/about">
              <About  mode={mode}/>
            </Route>
            <Route exact path="/">
              <Textform showAlert={showAlert} heading="Enter the Text To Analyze" mode={mode} />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );

}
export default App;


