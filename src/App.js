
import './App.css';
import DataTable from './Components/DataTable';
import SignupPage from './Components/SignupPage';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"

function App() {
  return (
    <div className="App">
      {/* <SignupPage />
      
      <DataTable /> */}


      <Router>
        <Routes>
        <Route exact path='/' element={<SignupPage />} />
        <Route exact path='/table' element={<DataTable />} />
        </Routes>
        
      </Router>


   

    </div>
  );
}

export default App;
