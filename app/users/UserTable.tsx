import Link from "next/link";
import React from "react";
import { sort } from "fast-sort";

export interface User {
  id: number;
  name: string;
  email: string;
}

interface UserProps {
  sortOrder: string;
}

const UserTable = async ({ sortOrder }: UserProps) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-cache",
  });

  const users: User[] = await res.json();

  const sortedUsers = sort(users).asc(
    sortOrder === "email" ? (user) => user.email : (user) => user.name
  );
  return (
    <div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <td>
              <Link href="/users?sortOrder=name">Name</Link>
            </td>
            <td>
              <Link href="/users?sortOrder=email">Email</Link>
            </td>
          </tr>
        </thead>

        <tbody>
          {sortedUsers &&
            sortedUsers?.map((user) => (
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
