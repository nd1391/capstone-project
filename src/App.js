import "./App.css";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { getUser } from "./utilities/users-service";
import NewOrderPage from "./pages/NewOrderpages/NewOrderPage";
import AuthPage from "./pages/AuthPages/AuthPage";
import OrderHistory from "./pages/OrderHistoryPages/OrderHistory";
import NavBar from "./component/NavBar/NavBar";

function App() {
  const [user, setUser] = useState(getUser());
  return (
    <main className="App">
      {user ? (
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path="/orders/new" element={<NewOrderPage />} />
            <Route path="/orders" element={<OrderHistory />} />
          </Routes>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}

export default App;
