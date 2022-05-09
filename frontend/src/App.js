import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ListBiodata from "./components/ListBiodata.js";
import AddBiodata from "./components/AddBiodata.js";
import EditBiodata from "./components/EditBiodata.js";

function App() {
  return (
    <Router>
      <div className="container">
        <div className="columns">
          <div className="column is-full">
            <Routes>
              <Route exact path="/" element={<ListBiodata />} />
              <Route path="/add" element={<AddBiodata />} />
              <Route path="/edit/:id" element={<EditBiodata />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;