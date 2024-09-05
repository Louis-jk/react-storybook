import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';

function App() {

  const [isLogin, setIsLogin] = useState<boolean>(false)

  return (
    <div>
      <Header isLogin={isLogin} setIsLogin={setIsLogin} />
    </div>
  );
}

export default App;
