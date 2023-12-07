import {BrowserRouter} from "react-router-dom";
import "./App.css";
import {Header} from "./components/Header";
import {Menu} from "./components/Menu";
import CrudApi from "./components/CrudApi";
import SongSearch from "./components/SongSearch";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="santos">
        <Header />
        <Menu />
        <hr />
        <CrudApi />
      </BrowserRouter>
      {/* <SongSearch /> */}
    </div>
  );
}

export default App;
