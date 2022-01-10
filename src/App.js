import './App.css'
import { Routes, Route } from 'react-router-dom'
import SiteFrame from './SiteFrame'
import HomePage from './HomePage'


function App() {

  return (
    <div className="App">
      <SiteFrame>
        <Routes>
          <Route path="/" element={<HomePage />}/>
        </Routes>
      </SiteFrame>
    </div>
  )
}

export default App;
