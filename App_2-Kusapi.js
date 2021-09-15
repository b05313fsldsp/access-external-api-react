import React, { useState, useEffect } from "react";
import "./App.css";
//import axios from "axios";

// const gitHubUrl = "https://api.github.com/users/deekshasharma";
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

  return (
    <div className="App">
      <header className="App-header">
        <h2>TQS Data</h2>
      </header>
      <div className="user-container">
        <h5 className="info-item">{title}</h5>
        <h5 className="info-item">{SPN1761}</h5>
      </div>
    </div>
  );
}

export default App;
