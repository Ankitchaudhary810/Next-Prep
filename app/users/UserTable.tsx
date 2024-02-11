import React from "react";

export interface User {
  id: number;
  name: string;
  email: string;
}

const UserTable = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-cache",
  });

  const users: User[] = await res.json();
  return (
    <div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
          </tr>
        </thead>

        <tbody>
          {users &&
            users?.map((user) => (
              <tr key={user.id}>
                <th>{user.name}</th>
                <th>{user.email}</th>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
