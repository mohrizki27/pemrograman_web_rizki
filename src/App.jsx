// Import Libraries 
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './App.css';
import List from './List';
import Top from './Top'
import Main from './Main'
// Create component
function App(){
  return (
    <div className='App'>
    <Header list="10 daftar makanan"/>
    <Main />
    <Top />
    <List />
    <Footer />
    </div>
  );
}
// Export Component
export default App;