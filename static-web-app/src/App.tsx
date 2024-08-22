// this is a react component that fetches a message from the serverless function and displays it on the page
// frontend code is in the src folder


import React, { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState<string>('');

  useEffect(() => {
    fetch('http://localhost:3000/api/message')
      .then((response) => response.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (
    <div className="App">
      <h1>Hello from Static Web App!</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;