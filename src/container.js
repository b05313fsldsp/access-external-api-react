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

function container() {

  const word = 'React';
  /* JavaScript */
  const deviceName = 'Galaxy Note';
  const currentPrice = 31900;
  const discount = 0.85;


  return (
    <div className="Container">
      <header className="App-header">
      <h2>TQS Data</h2>
      <h1>hello, {word}</h1>
      // JSX 中可以在 {} 內放入表達式（expression）
      <h1>現在 {deviceName} 的售價是 {currentPrice * discount}</h1>
      </header>

      <Counter />
      <Counter />
      <Counter />
    </div>

  );
}

export default container;
