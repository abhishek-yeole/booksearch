import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/Home';
import BookShelf from "./components/BookShelf";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bookshelf" element={<BookShelf />} />
      </Routes>
    </Router>
  );
};

export default App;