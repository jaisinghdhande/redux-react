import "./App.css";
import Login from "./components/login";
import Logout from "./components/logout";
import Profile from "./components/profile";


function App() {
  return (
    <div className="App">
      <Login></Login>
      <Profile></Profile>
      <Logout></Logout>
    </div>
  );
}

export default App;
