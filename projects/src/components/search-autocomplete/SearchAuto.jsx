import React, { useEffect, useState } from "react";
import Suggestion from "./Suggestion";

const SearchAuto = () => {
  const [loading, setloading] = useState(true);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [searchParam, setSearchParam] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [filteredUsers, setFilteredUsers] = useState([]);

  function handleChange(e) {
    const query = e.target.value.toLowerCase();
    setSearchParam(query);
    if (query.length > 1) {
      const filteredData =
        users && users.length
          ? users.filter((item) => item.toLowerCase().indexOf(query) > -1)
          : [];

      setFilteredUsers(filteredData);
      setShowDropdown(true);
    } else {
      setShowDropdown(false);
    }
  }
  function handleClick(e) {
    console.log(e.target.innerText);
  }
  async function fetchUsers() {
    try {
      setloading(true);
      const response = await fetch(`https://dummyjson.com/users`);
      const data = await response.json();
      console.log(data);

      if (data && data.users && data.users.length) {
        setUsers(data.users.map((userItem) => userItem.firstName));
        setloading(false);
        setError(null);
      }
    } catch (error) {
      setloading(false);
      console.log("Error fetching users");
      setError(error);
    }
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  console.log(users);
  return (
    <div>
      <input
        name="serach_user"
        placeholder="Search Users"
        value={searchParam}
        onChange={handleChange}
      />
      {showDropdown && (
        <Suggestion handleClick={handleClick} data={filteredUsers} />
      )}
    </div>
  );
};

export default SearchAuto;
