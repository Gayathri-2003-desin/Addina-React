import axios from "axios";

const updateAddressAPI = async (addressId, formData, token) => {
  const res = await axios.put(
    "http://164.52.215.173:4002/api/address/updateAddress",
    {
      _id:addressId,       // 🔥 REQUIRED by backend
      ...formData,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  );

  return res.data;  
};

export default updateAddressAPI;
