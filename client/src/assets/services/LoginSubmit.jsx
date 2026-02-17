import axios from "axios";

export const loginUserAPI = async (email, password) => {
  const res = await axios.post(
    "http://164.52.215.173:4002/api/user/login",
    { email, password }
  );

  return res.data.payload; 
};