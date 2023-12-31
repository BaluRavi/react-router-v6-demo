import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Home } from "./Pages/Home";
import { About } from "./Pages/About";
import { Profile } from "./Pages/Profile";
import { ErrorPage } from "./Pages/ErrorPage";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/profile"}>Profile</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile/" element={<Profile />} />
        <Route path="/profile/:username" element={<Profile />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <div>this is footer</div>
    </BrowserRouter>
  );
}

export default App;
