import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { useCallback, useMemo } from "react";

const baseUrl = `${process.env.REACT_APP_API_URL}user`;

const useUser = () => {
  const { getAccessTokenSilently } = useAuth0();

  const getAll = useCallback(async () => {
    const token = await getAccessTokenSilently();

    const { data } = await axios.get(baseUrl, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return data.data;
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

  const userApi = useMemo(
    () => ({ getAll, getByAuthId, save, getById }),
    [getAll, save, getByAuthId, getById]
  );

  return userApi;
};

export default useUser;
