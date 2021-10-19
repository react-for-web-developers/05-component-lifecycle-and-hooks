import { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Image from './Image';

// Describe the React component lifecycle
function App() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const [imageVisible, setImageVisible] = useState(false);
  // created / mounted
  useEffect(() => {
    console.log('WILL RUN ONCE, WHEN MOUNTED / CREATED', Date.now());
  }, []);

  useEffect(() => {
    console.log('WILL RUN ANYTIME COUNT2 HAS CHANGED!', Date.now());
  }, [count2]);

  useEffect(() => {
    console.log('WILL RUN ANYTIME COUNT OR COUNT2 HAS CHANGED!', Date.now());
  }, [count, count2]);

  // update / rendered
  console.log('WILL RUN ON EVERY RENDER (at component level)!', Date.now());
  useEffect(() => {
    console.log('WILL RUN ON EVERY RENDER (inside useEffect)!', Date.now());
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {imageVisible ? <Image /> : null}
        <button onClick={() => setImageVisible(!imageVisible)}>Toggle Image</button>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React: {count}
        </a>
        <button onClick={() => setCount(count + 1)}>Increase Count 1</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React: {count2}
        </a>
        <button onClick={() => setCount2(count2 + 1)}>Increase Count 2</button>
      </header>
    </div>
  );
}

export default App;
