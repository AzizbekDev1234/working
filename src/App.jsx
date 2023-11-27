// App.js

import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await response.json();
        setUsers(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="container">
      {loading && <div className="loader"></div>}
      <h1 className="title">Users' Information</h1>
      <div className="card__row row">
        {users.map((user) => (
          <div key={user.id} className="card_wrapper">
            <div className="card">
              <div className="card-body">
                <h2 className="card-title">{user.name}</h2>
                <h3 className="card-subtitle mb-2 text-muted">
                  {user.username}
                </h3>
                {/* Other user information here */}
                <div className="button_wrapper">
                  <a
                    onClick={() => saveId(user.id, "Todos")}
                    style={{ color: "white" }}
                    className="btn"
                    href="todos.html"
                  >
                    Todos
                  </a>
                  <a
                    onClick={() => saveId(user.id, "Posts")}
                    style={{ color: "white" }}
                    className="btn"
                    href="posts.html"
                  >
                    Posts
                  </a>
                  <a
                    onClick={() => saveId(user.id)}
                    style={{ color: "white" }}
                    className="btn"
                    href="gallery.html"
                  >
                    Gallery
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
