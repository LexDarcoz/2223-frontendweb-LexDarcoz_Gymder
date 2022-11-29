import axios from "axios";
const baseUrl = "http://localhost:9000/api/User";

export const getAll = async () => {
  const { data } = await axios.get(baseUrl);

  return data.items;
};

export const deleteById = async (id) => {
  await axios.delete(`${baseUrl}/${id}`);
};

export const getById = async (id) => {
  const { data } = await axios.get(`${baseUrl}/${id}`);
  return data;
};

export const save = async (toestel) => {
  const { id, ...values } = toestel;
  await axios({
    method: id ? "PUT" : "POST",
    url: `${baseUrl}/${id ?? ""}`,
    data: values,
  });
};
