
import './App.css';
import Post from "./post"
import Header from './header';
import {  Route, Router, Routes } from "react-router-dom";
import Layout from './Layout';
import IndexPage from './pages/IndexPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import { UserContextProvider } from './UserContext';
import CreatePost from './pages/CreatePost';

function App() {
  return (
   
      <UserContextProvider>
        <Routes>
          <Route path="/" element={<Layout/>}>
          <Route path="/" element={<IndexPage/> }/>
          <Route path="/login" element={<div><LoginPage/></div>}/>
          <Route path="register" element={<div><RegisterPage/></div>}/>
          <Route path='/create' element={<CreatePost/>}/>
          </Route>
        </Routes>
        </UserContextProvider>

  );
}


export default App;
