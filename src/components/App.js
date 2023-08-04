import logo from "../logo.svg";
import "./App.css";
import AppContent from "./AppContent";

import Header from "./Header";

function App() {
  return (
    <div className="App">
      <Header pageTitle="Frontend authenticated with JWT" logoSrc={logo} />
      <div className="container-fluid">
        <div className="row">
          <div className="col"></div>
          <AppContent />
        </div>
      </div>
    </div>
  );
}

export default App;
