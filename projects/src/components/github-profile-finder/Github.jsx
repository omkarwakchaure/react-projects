import React, { useEffect, useState } from "react";
import Card from "./Card";

const Github = () => {
  const [githubUserName, setGithubUserName] = useState("OmkarWakchaure");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  async function fetchGithubProfile() {
    setLoading(true);
    const response = await fetch(
      `https://api.github.com/users/${githubUserName}`
    );
    const data = await response.json();
    if (data) {
      setUserData(data);
      setLoading(false);
      setGithubUserName("");
    } else {
      console.log("Error fetching data");
    }
    console.log(data);
  }
  const handleSubmit = (e) => {
    fetchGithubProfile();
  };

  useEffect(() => {
    fetchGithubProfile();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="github-profile-container">
      <div className="input-wrapper">
        <input
          name="search-by-username"
          type="text"
          placeholder="Github Username"
          value={githubUserName}
          onChange={(e) => setGithubUserName(e.target.value)}
        />
        <button onClick={handleSubmit}>Search</button>
      </div>
      {userData !== null ? <Card user={userData} /> : null}
    </div>
  );
};

export default Github;
