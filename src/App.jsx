import './App.css';
import Home from './components/Home';
import OtherComponent from './components/OtherComponent';
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <div className="App">

<Routes>
  <Route element={<Home />} path="/home"/>
  <Route element={<OtherComponent />} path="/:word"/>
  <Route element={<OtherComponent />} path="/:word/:color/:bgCol"/>
</Routes>

    </div>
    </BrowserRouter>
  );
}

export default App;
