import React, { useEffect, useState } from "react";
// import styled from "styled-components";
//a.
//import { Component } from 'react';

const kusUrl = "http://10.3.1.194:8081/api/tutorials";

// component - 箭頭函式（arrow function）- 建立一個名為 Counter 的 React 組件
const Counter = () => (
    <div className="container">
      <div className="chevron chevron-up" />
      <div className="number">256</div>
      <div className="chevron chevron-down" />
    </div>
);


function App() {

  const word = 'React';
  /* JavaScript */
  const deviceName = 'Galaxy Note';
  const currentPrice = 31900;
  const discount = 0.85;

  const [userData, setUserData] = useState({});

  useEffect(() => {
    getGitHubUserWithFetch();
    // getGiHubUserWithAxios();
  }, []);

  const getGitHubUserWithFetch = async () => {
    const response = await fetch(kusUrl);
    const jsonData = await response.json();
    setUserData(jsonData);
  };

  console.log(userData.SN);

  return (
    <div className="App">   
      <header className="App-header">

      </header>

      <div className="Container">
        <h2>TQS Data</h2>
        <h2>{userData.SN}</h2>
      </div>
        
      <div className="user-container">
        <h5 className="info-item">{userData.SN}</h5>
        <h5 className="info-item">{userData.SPN1761}</h5>
      </div>

      <div className="Container">
        <h1>hello, {word}</h1>
        // JSX 中可以在 {} 內放入表達式（expression）
        <h1>現在 {deviceName} 的售價是 {currentPrice * discount}</h1>
        <Counter />
        <Counter />
        <Counter />
      </div>


    </div>
  );
}

export default App;
