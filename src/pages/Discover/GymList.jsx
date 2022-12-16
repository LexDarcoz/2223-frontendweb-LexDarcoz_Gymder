import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import { useState } from "react";
import useGym from "../../api/Gym";
import AuthLanding from "../../components/authentication/AuthLanding";
import GymCard from "../../components/gymTools/GymCard";

export default function GymList() {
  const gymApi = useGym();
  // const navigate = useNavigate();

  const [GymList, setGymList] = useState([]);

  useEffect(() => {
    const fetchGyms = async () => {
      const data = await gymApi.getAll();
      setGymList([...data]);
    };
    fetchGyms();
  }, [gymApi]);

  const { isAuthenticated } = useAuth0();
  if (isAuthenticated) {
    return (
      <div className="row justify-content-center text-center">
        {GymList.map((gym) => {
          return (
            <GymCard
              name={gym.name}
              description={gym.description}
              gymRating={gym.rating}
              key={gym.id}
            />
          );
        })}
      </div>
    );
  }
  return <AuthLanding />;
}
