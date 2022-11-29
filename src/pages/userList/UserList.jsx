import { useEffect } from "react";
import { useState } from "react";
import UserCard from "../../components/userCard/UserCard";

export default function UserList() {
  const [users, setUsers] = useState([]);
  console.log("This shit working");
  useEffect(() => {
    (async () => {
      let userData;
      try {
        const response = await fetch("https://randomuser.me/api/?results=12");
        userData = (await response.json()).results;
      } catch (error) {
        console.log(error);
        userData = [];
      }

      setUsers(userData);
    })();
  }, []);

  return (
    <div id="UnderNav" className="container w-100 min-vh-100 h-100">
      <h1 className="ms-4">User list</h1>
      <div className="row justify-content-center text-center">
        {users.map((user, index) => {
          return <UserCard key={index} userData={user} />;
        })}
      </div>
    </div>
  );
}
