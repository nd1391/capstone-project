import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { getUser } from "./utilities/users-service";
import NewOutfitPage from "./pages/NewOutfitPages/NewOutfitPage";
import AuthPage from "./pages/AuthPages/AuthPage";
import WardrobeHistory from "./pages/WardrobeHistoryPages/WardrobeHistory";
import NavBar from "./component/NavBar/NavBar";

function App() {
  const [user, setUser] = useState(getUser());
  return (
    <main className="App">
      {user ? (
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path="/outfit/new" element={<NewOutfitPage />} />
            <Route path="/wardrobe" element={<WardrobeHistory />} />
          </Routes>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}

export default App;
