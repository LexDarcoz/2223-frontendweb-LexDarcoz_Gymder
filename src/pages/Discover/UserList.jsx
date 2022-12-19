import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import { useState } from "react";
import useUser from "../../api/User";
import AuthLanding from "../../components/authentication/AuthLanding";
import UserCard from "../../components/UserTools/UserCard";

export default function UserList() {
  const userApi = useUser();
  const [users, setUsers] = useState([]);
  useEffect(() => {
    // (async () => {
    //   let userData;
    //   try {
    //     const response = await fetch("https://randomuser.me/api/?results=12");
    //     userData = (await response.json()).results;
    //   } catch (error) {
    //     console.log(error);
    //     userData = [];
    //   }
    //   setUsers(userData);
    // })();
    const fetchUsers = async () => {
      const data = await userApi.getAll();
      setUsers([...data]);
      console.log(data);
    };
    fetchUsers();
  }, [userApi]);

  const { isAuthenticated } = useAuth0();
  if (isAuthenticated) {
    return (
      <div className="row justify-content-center text-center">
        {users.map((user, index) => {
          return <UserCard key={index} userData={user} />;
        })}
      </div>
    );
  }
  return <AuthLanding />;
}
