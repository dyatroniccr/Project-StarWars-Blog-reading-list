import React, { useEffect, useState } from "react";

const ImportData = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch("https://www.swapi.tech/api/people/");
    const data = await response.json();
    console.log(data);
    setUsers( data.results.map((dato, index) => (
      {uid: dato.uid-1, name: dato.name, url: dato.name }
    )) );
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      {console.log(users)}
      {users.map((user) => (
        <h3 key={user.uid}>
          {" "} Id: {user.uid} | User: {user.name} | URL: {user.url}
        </h3>
      ))}
    </div>
  );
};

export default ImportData;
