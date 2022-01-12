
import './css/main.css';
// react的hook(钩子)
// import {
//   useState, useEffect, createContext, useContext } from "react";
// // 引入外部js component 文件
import Menu from './components/Menu';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";

function App() {
  // 这个部分相当于return JSX
    return (
    //   class是JavaScript中的关键字，所以用className替代
    <div className="App">
          <Router>
            <header className="App-header">
            <Menu />
          </header>
          <main className="App-main">
          <Routes>
              <Route exact path="/" element={<Home />}>
              </Route>
              <Route path="/resume" element={<Resume />}>
              </Route>
              <Route path="/contact" element={<Contact />}>
              </Route>
            </Routes>
            </main>
          </Router>
      <footer className="App-footer">
        copyright@Jessie Wang
      </footer>
    </div>
  );
}

export default App;
