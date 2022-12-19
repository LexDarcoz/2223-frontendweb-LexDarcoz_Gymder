import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useGym from "../../api/Gym";
import AuthLanding from "../../components/authentication/AuthLanding";
import GymCard from "../../components/gymTools/GymCard";

export default function GymList() {
  const gymApi = useGym();
  const navigate = useNavigate();

  const [GymList, setGymList] = useState([]);
  function handleClick(id) {
    return navigate(`/detailsGym/${id}`);
  }

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
              id={gym.id}
              description={gym.description}
              gymRating={gym.rating}
              image={gym.image}
              key={gym.id}
              handleClick={handleClick}
            />
          );
        })}
      </div>
    );
  }
  return <AuthLanding />;
}
