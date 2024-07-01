import React from "react";
import CreateUser from "./components/CreateUser";
import UserList from "./components/UserList";
import UpdateUser from "./components/UpdateUser";
import DeleteUser from "./components/DeleteUser";
import UserDetail from "./components/UserDetail";
import "./App.css"; // Import your CSS file

function App() {
  return (
    <div className="App">
      <h1>User Management</h1>
      <CreateUser />
      <UserList />
      <UpdateUser />
      <DeleteUser />
      <UserDetail />
    </div>
  );
}

export default App;
