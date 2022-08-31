import React from 'react';
import Header from './Header/Header';
import './App.css';

function App() {
  const navigationBarElements = [{title: 'Home', count:100},{title: 'My Network', count:0},{title: 'Messsage', count:3},{title: 'Notifications', count:30}]
  return(
    <Header elements={navigationBarElements}></Header>
  );
}

export default App;
