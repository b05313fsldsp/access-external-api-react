import React, { useEffect, useState } from "react";
import styled from "styled-components";
//a.
//import { Component } from 'react';

const kusUrl = "http://10.3.1.194:8081/api/tutorials";

function App() {
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
        <h2>TQS Data</h2>
        <h2>{userData.SN}</h2>
      </header>
      <div className="user-container">
        <h5 className="info-item">{userData.SN}</h5>
        <h5 className="info-item">{userData.SPN1761}</h5>
      </div>
    </div>
  );
}

export default App;
