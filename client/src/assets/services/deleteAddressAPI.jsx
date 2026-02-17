import axios from "axios";

const deleteAddressAPI = async (addressId, token) => {
  const res = await axios.delete(
    `http://164.52.215.173:4002/api/address/deleteAddress?addressId=${addressId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return res.data;
};

export default deleteAddressAPI;
