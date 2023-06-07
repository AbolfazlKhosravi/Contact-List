import "./App.css";
import Main from "./container/Main/Main";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <div className="container">
        <BrowserRouter>
          <Main />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
