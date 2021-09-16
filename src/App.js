import React, { useEffect, useState } from "react";
// import styled from "styled-components";
//a.
//import { Component } from 'react';

const kusUrl = "http://10.3.1.194:8081/api/tutorials";

// JavaScript
// 定義 inline-style 行內樣式
const shadow = {
  boxShadow: '0 0 10px 10px #eaeaea',
  padding: 20, // 省略 px，樣式會自動帶入單位變成 '20px'
};

// STEP 1: 從 React 物件中取出 `useState` 方法
// const { useState } = React;


const Counter = () => {
  
  // let count = 256;
  // STEP 2:
  // 透過 useState 建立 `count` 這個變數，預設值設為 256
  // 並取得修改變數的 `setCount` 方法
  const [count, setCount] = useState(256);

  return (
    <div className="container">
      // dc-
      {console.log('render')}  
      <div
        className="chevron chevron-up"
        style={{
          visibility: count >= 999 && 'hidden',
        }}
        onClick={() => {
          setCount(count + 1);
        }}
      />

      <div className="number">{count}</div>

      <div
        className="chevron chevron-down"
        style={{
          visibility: count <= 999 && 'hidden',
        }}
        onClick={() => {
          setCount(count - 1);
        }}
      />
    </div>
  );
};

function App() {

  const word = 'React';
  /* JavaScript */
  const deviceName = 'Galaxy Note';
  const currentPrice = 31900;
  const discount = 0.85;

  console.log(deviceName);

  return (
    <div className="App"> 
      <div className="Container" style={shadow}>
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
