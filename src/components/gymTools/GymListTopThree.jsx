import Transl from "../../Translation/i18n/translate";
import useGym from "../../api/Gym";
import { useState } from "react";
import { useEffect } from "react";
import GymCard from "./GymCard";
import { useNavigate } from "react-router-dom";

export default function GymListTopThree() {
  const gymApi = useGym();
  const navigate = useNavigate();

  const [top3, setTop3] = useState([]);

  useEffect(() => {
    const fetchGyms = async () => {
      const data = await gymApi.getAll();
      const data_top3 = data.slice(0, 3);
      setTop3([...data_top3]);
    };
    fetchGyms();
  }, [gymApi]);

  function handleClick(id) {
    navigate(`/detailsGym/${id}`);
  }

  return (
    <section className="team section-padding" id="ranking">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-header text-center pb-5">
              <h2>
                <strong> {Transl("TopThree")}</strong>
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          {top3.map((element) => {
            return (
              <GymCard
                name={element.name}
                address={element.address}
                gymRating={element.rating}
                image={element.image}
                handleClick={handleClick}
                key={element.id}
                id={element.id}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
