import React, { useState } from "react";
import "./App.css";

// A simple mock of repositories
const repositories = [
  { id: 1, name: "Repo 1", description: "This is the first repository", owner: "User 1" },
  { id: 2, name: "Repo 2", description: "This is the second repository", owner: "User 2" },
];

const App = () => {
  const [selectedRepo, setSelectedRepo] = useState(null);

  const handleRepoClick = (repo) => {
    setSelectedRepo(repo);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>GitHub Clone</h1>
        <h2>Repositories</h2>
        <div className="repo-list">
          {repositories.map((repo) => (
            <div key={repo.id} className="repo-item" onClick={() => handleRepoClick(repo)}>
              <h3>{repo.name}</h3>
              <p>{repo.description}</p>
            </div>
          ))}
        </div>

        {selectedRepo && (
          <div className="repo-detail">
            <h2>{selectedRepo.name} Details</h2>
            <p><strong>Owner:</strong> {selectedRepo.owner}</p>
            <p><strong>Description:</strong> {selectedRepo.description}</p>
            <h3>Commits:</h3>
            <ul>
              <li>Initial commit</li>
              <li>Added readme</li>
            </ul>
          </div>
        )}
      </header>
    </div>
  );
};

export default App;

