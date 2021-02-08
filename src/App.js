import './App.css';
import MyCarousal from './components/Carousal/carousal.component';

//components
import MyNavbar from "./components/Navbar/navbar.component";
import TitleMessage from './components/Title Message/titleMessage.component';

function App() {
  return (
    <div className="App">
      <MyNavbar/>
      <MyCarousal/>
      <TitleMessage/>
    </div>
  );
}

export default App;
