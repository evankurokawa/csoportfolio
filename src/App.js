import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from './components/home';
import Portfolio from './components/Portfolio';
import About from './components/about';
import SinglePost from './components/singlepost';
import Post from './components/post';
import Contact from "./components/contact";
import NavBar from "./components/navbar";
import Footer from "./components/footer";

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route element= {<Home/>} path= '/' exact/>
        <Route element= {<Portfolio/>} path= '/portfolio'/>
        <Route element= {<About/>} path= '/about'/>
        <Route element= {<Contact/>} path= '/contact'/>
        <Route element= {<SinglePost/>} path= '/post/:slug'/>
        <Route element= {<Post/>} path= '/blog'/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
