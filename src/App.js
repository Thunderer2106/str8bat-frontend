
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { Layout, Button, message } from "antd";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Buttons from "./components/Buttons";
const { Header, Content } = Layout;

const App = () => {
  const [token, setToken] = useState(localStorage.getItem("token"));

  const handleLogout = () => {
    setToken(null);
    localStorage.removeItem("token");
    message.success("You have been signed out.");
  };

  return (
    <Router>
      <Layout className="min-h-screen bg-gray-50">
        <Header className="bg-indigo-600 shadow-md">
          <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
            <h1 className="text-white text-2xl font-semibold">BaseAuth</h1>
            {token && (
              <Buttons func={handleLogout}/>   )}
              {/* <Button
                onClick={handleLogout}
                type="primary"
                className="text-white hidden sm:block"
              >
                Sign Out
              </Button> */}
         
          </div>
        </Header>
        <Content className="px-4 py-10 sm:px-6 md:px-8 flex-1 bg-white">
          <div className="max-w-7xl mx-auto">
            <Routes>
              <Route path="/signup" element={<Signup />} />
              <Route path="/" element={<Login setToken={setToken} />} />
              <Route
                path="/profile"
                element={
                  token ? <Profile token={token} /> : <Navigate to="/" />
                }
              />
            </Routes>
          </div>
        </Content>
      </Layout>
    </Router>
  );
};

export default App;
