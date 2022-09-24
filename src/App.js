import logo from "./logo.svg";
import "./App.css";
import "./css/sb-admin-2.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Portal from "./Portal";
import Books from "./Books";
import CreateBook from "./CreateBook";
import Bookview from "./Bookview";
import EditBook from "./EditBook";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Portal />}>
          <Route path="/books" element={<Books />} />
          <Route path="create-book" element={<CreateBook />} />
          <Route path="books/:id" element={<Bookview />} />
          <Route path="books/edit/:id" element={<EditBook />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
