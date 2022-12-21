import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { useCallback, useMemo } from "react";

const baseUrl = `${process.env.REACT_APP_API_URL}userGym`;

const useUserGym = () => {
  const { getAccessTokenSilently } = useAuth0();

  const getAll = useCallback(async () => {
    const token = await getAccessTokenSilently();

    const { data } = await axios.get(baseUrl, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return data;
  }, [getAccessTokenSilently]);

  const save = useCallback(
    async (gymId) => {
      const token = await getAccessTokenSilently();
      await axios({
        method: "POST",
        url: baseUrl,
        data: { gymId },

        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    },
    [getAccessTokenSilently]
  );

  const deleteById = useCallback(
    async (id) => {
      const token = await getAccessTokenSilently();
      await axios.delete(`${baseUrl}/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    },
    [getAccessTokenSilently]
  );

  const gymApi = useMemo(
    () => ({ getAll, save, deleteById }),
    [getAll, save, deleteById]
  );

  return gymApi;
};

export default useUserGym;
