
import './App.css';
import Header from './components/Header';
import MenuBar from './components/HeaderMenuLinks/MenuBar';
import MainPage from './components/MainPage';
import Register from "./components/Register"

function App() {
  return (
    <>
    <div className="App">
      <Header/>
      <MainPage/>
    </div>
    </>

  );
}

export default App;
