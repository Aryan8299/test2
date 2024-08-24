import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import C1 from './components/C1'
import C2 from './components/C2'
import C3 from './components/C3'
import {HashRouter,Routes,Route} from "react-router-dom";
import {Home,Contact,Blog,Projects} from "./components/Main";

function App() {
  return (
    <div>
      <HashRouter>
      <C1 />
      <C3 />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/blog" element={<Blog />}/>
          <Route path="/projects" element={<Projects />}/>
        </Routes>
        <C2 />
      </HashRouter>
    </div>
  );
}

export default App;
