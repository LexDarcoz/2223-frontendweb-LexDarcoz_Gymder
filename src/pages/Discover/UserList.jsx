import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useUser from "../../api/User";
import AuthLanding from "../../components/authentication/AuthLanding";
import UserCard from "../../components/UserTools/UserCard";

export default function UserList() {
  const userApi = useUser();
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  function handleClick(id) {
    return navigate(`/detailsUser/${id}`);
  }
  useEffect(() => {
    const fetchUsers = async () => {
      const data = await userApi.getAll();
      setUsers([...data]);
    };
    fetchUsers();
  }, [userApi]);

  const { isAuthenticated } = useAuth0();
  if (isAuthenticated) {
    return (
      <div className="row justify-content-center text-center">
        {users.map((user, index) => {
          return (
            <UserCard key={index} userData={user} handleClick={handleClick} />
          );
        })}
      </div>
    );
  }
  return <AuthLanding />;
}
