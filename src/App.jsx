import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./Pages/Contact";
import HomePage from "./Pages/HomePage";
import Info from "./Pages/Info";
import Project from "./Pages/Project";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route index element={<Project />} />
        <Route index element={<Info />} />
        <Route index element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
