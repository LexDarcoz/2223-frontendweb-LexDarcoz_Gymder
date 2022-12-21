import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { useCallback, useMemo } from "react";

const baseUrl = `${process.env.REACT_APP_API_URL}gym`;

const useGym = () => {
  const { getAccessTokenSilently } = useAuth0();

  const getAll = useCallback(async () => {
    const token = await getAccessTokenSilently();
    const { data } = await axios.get(baseUrl, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return data.items;
  }, [getAccessTokenSilently]);

  const getById = useCallback(
    async (id) => {
      const token = await getAccessTokenSilently();
      const { data } = await axios.get(`${baseUrl}/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return data;
    },
    [getAccessTokenSilently]
  );

  const save = useCallback(
    async (gym) => {
      const token = await getAccessTokenSilently();

      const { id, ...values } = gym;

      await axios({
        method: "POST",
        url: baseUrl,
        data: values,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    },
    [getAccessTokenSilently]
  );

  const gymApi = useMemo(
    () => ({ getAll, getById, save }),
    [getAll, save, getById]
  );

  return gymApi;
};

export default useGym;
