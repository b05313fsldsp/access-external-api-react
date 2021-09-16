import React, { useEffect, useState } from "react";
// import styled from "styled-components";
//a.
//import { Component } from 'react';

const kusUrl = "http://10.3.1.194:8081/api/tutorials";

function container() {

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
    <div className="Container">
      <header className="App-header">
      <h2>TQS Data</h2>
      <h1>hello, {word}</h1>
      // JSX 中可以在 {} 內放入表達式（expression）
      <h1>現在 {deviceName} 的售價是 {currentPrice * discount}</h1>
      <h2>{userData.SN}</h2>
      </header>

      <div class="chevron chevron-up" />
      <div class="number">256</div>
      <div class="chevron chevron-down" />
    </div>

  );
}

export default container;
