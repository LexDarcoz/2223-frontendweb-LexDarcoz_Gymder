import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { useCallback, useMemo } from "react";

const baseUrl = `${process.env.REACT_APP_API_URL}user`;

const useUser = () => {
  const { getAccessTokenSilently } = useAuth0();

  const getAll = useCallback(async () => {
    const token = await getAccessTokenSilently();
    console.log(`${token}`);
    const { data } = await axios.get(baseUrl, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return data.data;
  }, [getAccessTokenSilently]);

  const getByAuthId = useCallback(async () => {
    const token = await getAccessTokenSilently();
    const { data } = await axios.get(`${baseUrl}/current`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  }, [getAccessTokenSilently]);

  const save = useCallback(
    async (user) => {
      const token = await getAccessTokenSilently();
      const { ...values } = user;
      await axios({
        method: "PUT",
        url: `${baseUrl}/save`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: values,
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

  const userApi = useMemo(
    () => ({ getAll, getByAuthId, save, deleteById }),
    [getAll, save, getByAuthId, deleteById]
  );

  return userApi;
};

export default useUser;
