import axios from "axios";

const getAddressAPI = async (token, skip = 0, size = 10) => {
  const res = await axios.get(
    `http://164.52.215.173:4002/api/address/getMyAddressBook?skip=${skip}&size=${size}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return res.data.payload.addressBook;
};

export default getAddressAPI;
