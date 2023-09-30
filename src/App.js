import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import ProfileSummary from './components/ProfileSummary';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <ProfileSummary />
    </div>
  );
}

export default App;
