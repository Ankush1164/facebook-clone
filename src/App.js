
import './App.css';
import Header from './components/Header';
import MainPage from './components/MainPage';
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Header/>
      <MainPage/>
    </div>
  );
}

export default App;
