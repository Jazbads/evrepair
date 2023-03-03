import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link, Routes } from "react-router-dom";
import ErrorPage from "./error-page";
import Sidebar from "./sidebar/sidebar";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/sidebar" element={<Sidebar />}/>
          <Route path="*" element={<ErrorPage />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
