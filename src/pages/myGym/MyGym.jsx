import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useGym from "../../api/Gym";
import useUserGym from "../../api/userGym";
import AuthLanding from "../../components/authentication/AuthLanding";
import GymCard from "../../components/gymTools/GymCard";

export default function MyGym() {
  const userGymApi = useUserGym();
  const navigate = useNavigate();
  const gymApi = useGym();
  const [GymList, setGymList] = useState([]);
  function handleClick(id) {
    return navigate(`/detailsGym/${id}`);
  }

  useEffect(() => {
    const fetchGyms = async () => {
      const { data } = await userGymApi.getAll();
      let gymIds = [];
      data.forEach((element) => {
        gymIds.push(element.gymId);
      });

      const gymPromises = gymIds.map((id) => gymApi.getById(id));
      const gyms = await Promise.all(gymPromises);
      setGymList(gyms);
    };

    fetchGyms();
  }, [gymApi, userGymApi]);

  function deleteById(id) {
    const updatedGymList = GymList.filter((gym) => gym.id !== id);
    setGymList(updatedGymList);
    userGymApi.deleteById(id);
  }

  console.log(GymList);
  const { isAuthenticated } = useAuth0();
  if (isAuthenticated) {
    if (GymList <= 0) {
      return (
        <div
          className="container w-100 min-vh-100 h-100 d-flex flex-column text-center"
          id="UnderNav"
        >
          <h1 className="my-auto text-center ">
            You have not added any gyms yet!
          </h1>
        </div>
      );
    }
    return (
      <div
        className="container w-100 min-vh-100 h-100 d-flex flex-column"
        id="UnderNav"
      >
        <div className="row justify-content-center text-center">
          {GymList.map((gym) => {
            return (
              <GymCard
                name={gym.name}
                id={gym.id}
                owner={gym.owner}
                address={gym.address}
                emailAddress={gym.emailAddress}
                description={gym.description}
                gymRating={gym.rating}
                image={gym.image}
                key={gym.id}
                handleClick={handleClick}
                deleteById={deleteById}
              />
            );
          })}
        </div>
      </div>
    );
  }
  return <AuthLanding />;
}
