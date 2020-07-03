import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import mainAxios from './instances/axiosInstance';

const App = ()=> {
  mainAxios.get(`/post`).then((res)=> {
    console.log(res.data)
  })
  return (
    <div>
      <Header />
      <div className="container" style={{backgroundColor: "red", height: "100vh", color: "white"}}>
      UI is working
     </div>
    </div>
  );
}

export default App;
