import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useQuery } from './gqless'

function App() {
  const { viewer } = useQuery()

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <p>
          {viewer.name}
        </p>
        {viewer?.followers({ first: 5 })?.nodes?.map(follower => {
          return (
            <p key={follower?.id}>{follower?.name}</p>
          )
        })}
      </header>
    </div>
  );
}

export default App;
